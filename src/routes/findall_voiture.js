const {voiture}= require('../db/sequelize')
const {type}=require('../db/sequelize')
const {ville}=require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
const auth= require('../auth/isAuth')




module.exports= (server) => {
   server.get('/api/findall/voiture',/* auth,*/cors(),async(req,res,next)=>{
   
try {

   var voitures= await  voiture.findAll({
      

       
     
       order:['modele'],
        limit:5,
        raw:true
      }
       
      )
      
      res.json(voitures) }
      
       catch (error ){
        
           res.status(500).json({data: error}) 
           console.log(error)}
       
   }) 
}