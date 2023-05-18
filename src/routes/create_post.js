const {post}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const posts=require('../models/post')



module.exports= (server) => {
   server.post('/api/post', cors(),(req,res)=>{
    posts.actif=0
    posts.titre=req.body.titre
    posts.contenu=req.body.contenu
    posts.adresse=req.body.adresse
    posts.longitude=req.body.longitude
    posts.latitude=req.body.latitude
    
    posts.id_type=req.body.id_type
    posts.id_ville=req.body.id_ville
    posts.id_utilisateur=req.body.id_utilisateur
      post.create(posts)
       .then(post =>{
           const message ='le post a bien ete ajouter.'
           res.json({message,data: post})
           console.log(req.body)
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le post n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       
    })
    })
    
}