const {modele}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const modeles=require('../models/modele')
const cors= require('cors')


module.exports= (server) => {
   server.post('/api/modele',cors(), (req,res)=>{
    
    modeles.modele=req.body.modele
    modeles.marque=req.body.marque
 
    modeles.energie=req.body.energie
    modeles.capacite=req.body.capacite
    modeles.nb_place= req.body.nb_place
    modeles.transmission= req.body.transmission
    modeles.categorie= req.body.categorie


   
  
      modele.create(modeles)
       .then(modele =>{
           const message ='le modele a bien ete ajouter.'
           res.json({message,data: modele})
           console.log(req.body)
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le modele n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
      
       
    })
    })
    
}