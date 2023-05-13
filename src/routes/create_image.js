const {img}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')


module.exports= (server) => {
   server.post('/api/img',(req,res)=>{
      img.create(req.body)
       .then(img =>{
           const message ='le img a bien ete ajouter.'
           res.json({message,data: img})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le img n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}