const {annonce}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const annonces=require('../models/annoce_voiture')
const cors= require('cors')


module.exports= (server) => {
   server.post('/api/annonce/:id',cors(), (req,res)=>{
    
    annonces.modele=req.body.modele
    annonces.description=req.body.description
    annonces.kilometrage=req.body.kilometrage
    annonces.couleur=req.body.couleur
    annonces.prix=req.body.prix
    annonces.anneeF=req.body.anneeF
    annonces.id_utilisateur= req.params.id
   
  
      annonce.create(annonces)
       .then(annonce =>{
           const message ='le annonce a bien ete ajouter.'
           res.json({message,data: annonce})
           console.log(req.body)
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le annonce n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
      
       
    })
    })
    
}