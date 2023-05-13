const {ville}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')


module.exports= (server) => {
   server.post('/api/ville',(req,res)=>{
      ville.create(req.body)
       .then(ville =>{
           const message ='le ville a bien ete ajouter.'
           res.json({message,data: ville})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le ville n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}