const {categorie}= require('../db/sequelize')

const {ville}=require('../db/sequelize')
const {Op}= require('sequelize')
const {type} = require('../db/sequelize')
//const auth= require('../auth/auth')




module.exports= (server) => {
   server.get('/api/categorie',(req,res)=>{
    if(req.query.id){
        type.findAll({where:{id_type:req.query.id}}).then(categorie =>{
         
            const message = `la liste des categories a ete recupere.`
           
       
            res.json({message,data:categorie}) })
            
    }
    
      categorie.findAll()
       .then(categorie =>{
         
           const message = `la liste des categories a ete recupere.`
          
      
           res.json({message,data:categorie}) 
           
       })
       .catch (error =>{
           const message="la liste des categorie n'a pas ete recupere,reesayer dans quelques instant"
           res.status(500).json({message,data: error}) 
           console.log(error)
       })
   }) 
}