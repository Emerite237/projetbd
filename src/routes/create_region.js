const {region}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const cors=require("cors")

module.exports= (server) => {
   server.post('/api/region', cors(),(req,res)=>{
      region.create(req.body)
       .then(region =>{
           const message ='le region a bien ete ajouter.'
           res.json({message,data: region})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le region n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}