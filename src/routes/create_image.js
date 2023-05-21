const {img}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const image= require('../models/images')
const {post}= require("../db/sequelize")

const cors= require('cors')

module.exports= (server) => {
   server.post('/api/img',cors(),async(req,res)=>{
    var c=  await post.count();

    c=c+1;
    console.log(c)
    image.lib_img=req.body.lib_img
    image.path= req.body.path
    image.id_posts=c
    



      img.create(image)
       .then(img =>{
           const message ='le img a bien ete ajouter.'
           res.json({message,data: img})
       }).catch(error => {
        if(error instanceof ValidationError ){
        return res.status(400).json({message: error.message,data: error})
       
       }
       if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message})
       }
       const message="le img n'a pas pue etre ajouter"
       res.status(500).json({message, data:error})
       console.log(error)
       
    })
    })
    
}