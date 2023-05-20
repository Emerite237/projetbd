const {type}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const cors=require("cors")

module.exports= (server) => {
   server.post('/api/type', cors(),(req,res)=>{
      type.create(req.body)
       .then(type =>{
           const message ='le type a bien ete ajouter.'
           res.json({message,data: type})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le type n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}