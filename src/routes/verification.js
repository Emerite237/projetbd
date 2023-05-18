const {utilisateur} = require('../db/sequelize')
const {verification} = require('../db/sequelize')

module.exports = (app) => {
  app.get('/api/validation/:id/:token', cors(), (req, res) => {
    verification.findOne({where: {id_utilisateur:req.params.id}})
       .then(verification => {
         if(verification.token === req.params.token){

          // on vérifie si la date du token est valide

            if(verification.date_expiration > Date.now()){

              // mise à jour du status de l'utilisateur

              let user = {
                verifier: 1
              }
              utilisateur.update(user, {
                where: { id_utilisateur: req.params.id }
              }).then(()=>{

                // suppression du token de vérification de la table token

                verification.destroy({
                  where: { id_utilisateur: req.params.id }
                }).then(()=>{

                  const message = `Votre vérification a été effectué avec succès`
                  res.status(200).json({ message, data: verification })

                })
                .catch(()=>{
                  const message = `Le token n'a pas pu être supprimer désolé`
                  res.status(500).json({ message, data: verification })
                })
              })
              .catch(()=>{
                const message = `Une érreur s'est produite lors de la mise à jour de votre profil`
                res.status(500).json({ message, data: verification })
              })
                
            }else{

              // Mise à jour du token de vérification

              let new_verif = {
              token : uuidv4(),
              date_creation:Date.now(),
              date_expiration:Date.now() + 4600000
              }
              verification.update(new_verif, {
                where: { id_utilisateur: req.params.id }
              }).then(()=>{
                
                const currentUrl = "http://localhost:3000/api"
                // Envoi du nouveau mail de vérification à utilisateur
                
                const mailOptions = {
                  from: process.env.AUTH_EMAIL,
                  to: utilisateur.email,
                  subject: "Vérification de votre adresse mail",
                  html: `<p>Vérifiez votre mail pour completer votre enregistremt.</p>
                  <p> Lien de vérification <b> expire dans 1h </b>.</p>
                  <p>appuyez <a href='${currentUrl + "/validation/" + utilisateur.id_utilisateur + "/" + new_verif.token}'>ici </a> pour verifier</p>`
                }
                transporter.sendMail(mailOptions).then(()=>{
                  
                  message=`Désolé votre token a expiré un nouveau mail vous a été envoyé`
                  res.status(500).json({message, data:error})

                }).catch((error)=>{
                  console.log(error)
                  const message = `Erreur lors de l'envoi du mail`
                  res.status(500).json({message, data: error})
                })

              })

              // Message de réponse 
             }

         }else{
            message=`Désolé votre Token de vérification est incorrect`
            res.status(500).json({message})
         }
       })
       .catch(error => {
         const message = `Nous n'arrivons pas à acceder au token désolé`
         res.status(500).json({message, data:error})
         console.log(error)
       })
   })
}