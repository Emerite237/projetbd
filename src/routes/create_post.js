const {post}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')



module.exports= (server) => {
   server.post('/api/post',(req,res)=>{
      post.create(req.body)
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