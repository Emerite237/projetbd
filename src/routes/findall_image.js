const {img}= require('../db/sequelize')
const {Op}= require('sequelize')
       
module.exports= (server) => {
   server.get('/api/findall/img', cors(),(req,res)=>{
       if(req.query.lib_img){
           const lib_img=req.query.lib_img
           return img.findAll({
               where:{lib_img
:{[Op.like]: `%${lib_img}%`}
           },
           order:['lib_img'],
           limit:4
       })
           .then(img =>{
               const message= "l'element a bien ete retrouve"
               res.json({message,data:img})
           })
       }


       img.findAll()
       .then(img =>{
           const message = `la liste des imgs a ete recupere.`
           res.json({message,data: img}) 
       })
       .catch (error =>{
           const message="la liste des img n'a pas ete recupere,reesayer dans quelques instant"
           res.status(500).json({message,data: error}) 
       })
   }) 
}