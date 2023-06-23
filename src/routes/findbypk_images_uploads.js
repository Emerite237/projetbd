const {imagesuploads}= require('../db/sequelize')
const {img}= require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
module.exports= (server) => {

    tab=[]
   
   server.get('/api/findbypk/image_imagesuploads/:id',cors(),  async(req,res)=>{
     



    tab=   imagesuploads.findAll({
         
  })
       .then(imagesuploads =>{
           const message = `la liste des imagesuploadss a ete recupere.`
           tab=imagesuploads;
         

       console.log(imagesuploads)

       res.json(imagesuploads)

       })
       .catch (error =>{
           const message="la liste des imagesuploads n'a pas ete recupere,reesayer dans quelques instant"
           res.status(500).json({message,data: error}) 
       })

      
      

     
   }) 
}