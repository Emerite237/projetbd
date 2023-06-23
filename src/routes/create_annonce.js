const {annonce}= require('../db/sequelize')
const {voiture}= require('../db/sequelize')


const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const annonces=require('../models/annoce_voiture')
const voitures=require('../models/annoce_voiture')
const cors= require('cors')

tab=[]

module.exports= (server) => {
   server.post('/api/annonce/:id',cors(), async(req,res)=>{

    
    tab= await voiture.findAll()

    voiture=tab[tab.length]

    
    
  console.log(voiture.id_voiture)
    annonces.modele=req.body.modele
    annonces.adresse=req.body.adresse
    annonces.description=req.body.description
    annonces.titre=req.body.titre
    annonces.kilometrage=req.body.kilometrage
    annonces.id_voiture=c
    annonces.prix=req.body.prix

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
      console.log(error)
       
    })
    })
    
}