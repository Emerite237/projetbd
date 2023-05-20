const {imagesuploads}= require('../db/sequelize')
const {img}= require('../db/sequelize')
const {Op}= require('sequelize')
       
module.exports= (server) => {

    tab=new Array()
    tabs=new Array()
   server.get('/api/image_imagesuploads',async(req,res)=>{
       if(req.query.lib_imagesuploads){
           const lib_imagesuploads=req.query.lib_imagesuploads
           return imagesuploads.findAll({
               where:{lib_imagesuploads
:{[Op.like]: `%${lib_imagesuploads}%`}
           },
           order:['lib_imagesuploads'],
           limit:4
       })
           .then(imagesuploads =>{
               const message= "l'element a bien ete retrouve"
               res.json({message,data:imagesuploads})
           })
       }

     tabs=  img.findAll()
       .then(img =>{
           
           tabs=img;
           console.log(tabs)
         
       }
       )


    tab=   imagesuploads.findAll()
       .then(imagesuploads =>{
           const message = `la liste des imagesuploadss a ete recupere.`
           tab=imagesuploads;
           console.log(tab)
         //  res.json({message,data: imagesuploads}) 

           
   tab=tab.concat(tabs)

       console.log(tab)

       res.json(tab)

       })
       .catch (error =>{
           const message="la liste des imagesuploads n'a pas ete recupere,reesayer dans quelques instant"
           res.status(500).json({message,data: error}) 
       })

      
      

     
   }) 
}