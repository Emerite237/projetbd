const {post}= require('../db/sequelize')

module.exports= (server) => {
   server.get('/api/post/',(req,res)=>{
    if(req.query.id){
        const id=req.query.id
        return post.findAll({
     
        raw:true
    })
        .then(post =>{
            const message= "l'element a bien ete retrouve"
            res.json({message,data:post})
            
        })
    }
   }) 
}