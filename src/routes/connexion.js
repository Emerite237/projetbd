const { utilisateur } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const cors=require("cors")
  
module.exports = (app) => {
  app.post('/api/login', cors(),async(req, res) => {
    utilisateur.findOne({
      where:{
        email:req.body.email
      }
    }).then(utilisateur => {
        if(utilisateur === null){
          const message = `email ou mot de passe incorrect`
          return res.status(404).json({message})
        }
        bcrypt.compare(req.body.pass, utilisateur.pass)
        .then(valid=>{
          if(!valid){
            const message = `Email ou mot de passe incorrect`;
            return res.status(404).json({message})
          }
          if(utilisateur.verifier==false){
            const message = `Votre adresse mail doit être vérifié pour terminer votre inscription`;
            return res.status(500).json({message})
          }
          const message = 'One user found'
          req.session.user=utilisateur
          return res.json({message, data:utilisateur})
        })
      })
      .catch(error => {
        const message = `L'utilisateur n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
        console.log(error)
      })
  })
}