const {imagesuploads}= require('../db/sequelize')
const {img}= require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
module.exports= (server) => {

    tab=[]
    tabs=[]
   server.get('/api/findbypk/image/:id',cors(),  async(req,res)=>{
     

    tabs=  img.findAll({
         
        where: {id_posts:req.params.id}}
       )
         .then(img =>{
             
             tabs=img;
             console.log(tabs)
           
         }
         )
  
  
      tab=   imagesuploads.findAll({
           
        where: {id_post:req.params.id}})
         .then(imagesuploads =>{
             const message = `la liste des imagesuploadss a ete recupere.`
             tab=imagesuploads;
             console.log(tab)
  
             
     tab=tab.concat(tabs)
  
         console.log(tab)
  
         res.json(tab[0])
  
         })
         .catch (error =>{
             const message="la liste des imagesuploads n'a pas ete recupere,reesayer dans quelques instant"
             res.status(500).json({message,data: error}) 
         })
  

       }
      

     
   ) 
}