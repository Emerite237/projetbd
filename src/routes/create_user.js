
const {utilisateurs}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const bcrypt=require('bcrypt')
const jwt = require ('jsonwebtoken') 
const utilisateur = require('../models/utilisateur')
const cors=require("cors")

module.exports= (server) => {
   server.post('/api/utilisateurs', cors(),(req,res)=>{



    bcrypt.hash( req.body.pass,10, function(err,bcryptedpassword){
        
    utilisateur.nom=req.body.nom;
    utilisateur.prenom=req.body.prenom;
    utilisateur.email=req.body.email;
    utilisateur.pass=bcryptedpassword;
    utilisateur.telephone=req.body.telephone

    utilisateurs.create(utilisateur)
    .then(utilisateurs =>{
        const message ='le utilisateurs a bien ete ajouter.'
        res.json({message,data: utilisateurs})
    }).catch(error => {
     if(error instanceof ValidationError ){
     return res.status(400).json({message: error.message,data: error})
    
    }
    if(error instanceof UniqueConstraintError){
     return res.status(400).json({message: error.message})
    }
    const message="le utilisateurs n'a pas pue etre ajouter"
    res.status(500).json({message, data:error})
    
 })
 })

    })


     
    
}