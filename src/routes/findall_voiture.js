const {modele}= require('../db/sequelize')
const {type}=require('../db/sequelize')
const {ville}=require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
const auth= require('../auth/isAuth')




module.exports= (server) => {
   server.get('/api/findall/modele',/* auth,*/cors(),async(req,res,next)=>{
   
try {

   var modeles= await  modele.findAll({
      

       
     
       order:['modele'],
        limit:5,
        raw:true
      }
       
      )
      
      res.json(modeles) }
      
       catch (error ){
        
           res.status(500).json({data: error}) 
           console.log(error)}
       
   }) 
}