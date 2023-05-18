const {categorie}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')


module.exports= (server) => {
   server.post('/api/categorie', cors(),(req,res)=>{
      categorie.create(req.body)
       .then(categorie =>{
           const message ='le categorie a bien ete ajouter.'
           res.json({message,data: categorie})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le categorie n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}