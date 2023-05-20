const { utilisateur } = require('../db/sequelize')
const { ValidationError } = require('sequelize')
const {verification} = require('../db/sequelize')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const {v4: uuidv4} = require('uuid')
require('dotenv').config()
const cors=require("cors")


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
})  
module.exports = (app) => {
  app.post('/api/register',  cors(),async(req, res) => {
    if(req.body.pass){
      const salt = await bcrypt.genSalt(10)
      newPass=await bcrypt.hash(req.body.pass, salt)
      req.body.pass = newPass
    }
    
    req.body.role = "utilisateur"
    req.body.verifier = 0

    //creation du nouvel utilisateur
    
    utilisateur.create(req.body)
      .then(utilisateur => {

        // remplissage de la table de vérification

        const token = uuidv4()
        let userverfification = {
          token: token,
          id_utilisateur: utilisateur.id_utilisateur,
          date_expiration: Date.now() + 21600000
        }
        return verification.create(userverfification).then(verification =>{
      
          // Envoi du mail au nouvel utilisateur
          if(verification === null){
            const message = `Erreur lors de la sauvegarde du token`
            res.status(500).json({message, data: error})
          }
          const currentUrl = "http://localhost:3000/api"  
          const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: utilisateur.email,
            subject: "Vérification de votre adresse mail",
            html: `<p>Vérifiez votre mail pour completer votre enregistremt.</p>
            <p> Lien de vérification <b> expire dans 1h </b>.</p>
            <p>appuyez <a href='${currentUrl + "/validation/" + utilisateur.id_utilisateur + "/" + token}'>ici </a> pour verifier</p>`
          }
          transporter.sendMail(mailOptions).then(()=>{

            console.log('Lien de vérification envoyé avec succès')
            const message = 'Lien de vérification envoyé avec succès'
            res.status(200).json({message, data: utilisateur})
            
          }).catch((error)=>{

            console.log(error)
            const message = `Erreur lors de l'envoi du mail`
            res.status(500).json({message, data: error})

          })
        })  
        //res.status(200).json({message, data: utilisateur})
      })
      .catch(error => {
        if(error instanceof ValidationError){
          return res.status(400).json({message: error.message, data: error})
        }
        const message = `L'utilisateur n'a pu être créé. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
        console.log(error)
      })
  })
/*
  let userverfification = {
    token: token,
    id_utilisateur: utilisateur.id_utilisateur,
    date_expiration: Date.now() + 21600000
  }
  
  // remplissage de la table de vérification
    token: token,
  verificationUtilisateur.create(userverfification).then(()=>{
/*
  let userverfification = {
    token: token,
    id_utilisateur: utilisateur.id_utilisateur,
    date_expiration: Date.now() + 21600000
  }
  
  // remplissage de la table de vérification

  verificationUtilisateur.create(userverfification).then(()=>{

    // Envoi du mail au nouvel utilisateur
}
    
  }).catch((error)=>{
    message = `Une érreur s'est produite lors de la sauvegarde de votre token`
    return res.status(400).json({message: message, data: error})    
  })
*/
}

/*
const sendVerificationEmail=({_id, email}, res) =>{
  const currentUrl = "http://localhos:3000/api"
  const uniqueString = uuidv4() + _id
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Vérification de votre adresse mail",
    html: `<p>Vérifiez votre mail pour completer votre enregistremt.</p>
    <p> Lien de vérification <b> expire dans 1h </b>.</p>
    <p>appuyez <a href=${currentUrl + "/verification/" + _id + "/" + uniqueString}>ici </a> pour verifier</p>`
  }

  const saltRounds =10
  bcrypt.hash(uniqueString, saltRounds).then((hashedUniqueString)=>{
    const userverfification = new verificationUtilisateur({
      token: hashedUniqueString,
      id_utilisateur: _id,
      date_expiration: Date.now() + 3600,
      date_creation: Date.now()
    })
    verificationUtilisateur.create(userverfification).then(()=>{
      transporter.sendMail(mailOptions).then(()=>{
        console.log('Lien de vérification envoyé avec succès')
      }).catch((error)=>{
        console.log(error)
        const message = `Erreur lors de l'envoi du mail`
        res.status(500).json({message, data: error})
      })
    })
    .catch((error)=>{
      console.log(error)
      const message = `Erreur lors de l'entregistrement de votre token`
      res.status(500).json({message, data: error})
  })
  }).catch((error)=>{
    console.log(error)
    const message = `Erreur de création de votre token`
    res.status(500).json({message, data: error})
  })
}
*/