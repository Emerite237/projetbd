const {voiture}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const voitures=require('../models/voiture')
const cors= require('cors')


module.exports= (server) => {
   server.post('/api/voiture',cors(), async(req,res)=>{


    
    voitures.voiture=req.body.voiture
    voitures.marque=req.body.marque
    voitures.couleur= req.body.couleur
    voitures.modele=req.body.modele
    voitures.energie=req.body.energie
    voitures.capacite=req.body.capacite
    voitures.nb_place= req.body.nb_place
    voitures.transmission= req.body.transmission
    voitures.categorie= req.body.categorie
    voitures.anneeF=req.body.anneeF

   
  
      voiture.create(voitures)
       .then(voiture =>{
           const message ='le voiture a bien ete ajouter.'
           res.json({message,data: voiture})
           console.log(req.body)
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le voiture n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
      console.log(error)
       
    })
    })
    
}