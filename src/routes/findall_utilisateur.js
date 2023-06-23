const {utilisateur}= require('../db/sequelize')

const {ville}=require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
const auth= require('../auth/isAuth')




module.exports= (server) => {
   server.get('/api/findall/utilisateur',/* auth,*/cors(),async(req,res,next)=>{  
       
    

  utilisateur.findAll({}
   
  )
   .then(utilisateur =>{
     
       const message = `la liste des utilisateurs a ete recupere.`
      
         
  
       res.json(utilisateur) 
       
   })
   .catch (error =>{
       const message="la liste des utilisateur n'a pas ete recupere,reesayer dans quelques instant"
       res.status(500).json({message,data: error}) 
       console.log(error)
   })
}) }


