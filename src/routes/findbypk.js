const {posts}= require('../db/sequelize')

module.exports= (server) => {
   server.get('/api/posts/:id',(req,res)=>{
       site.findByPk(req.params.id )
       .then(posts =>{
           const message ='le site a ete recupere.'
           res.json({message,data: site}) 
       })
   }) 
}