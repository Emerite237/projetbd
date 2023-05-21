const {post}= require('../db/sequelize')
const cors= require('cors')
const {type} = require('../db/sequelize')
const {ville} = require('../db/sequelize')

module.exports= (server) => {
   server.get('/api/post/:id',cors(),(req,res)=>{

    post.findOne({
       include:[{
         model:type,
         as:'type_post',
         attributes:['lib_type']
       },
       {
         model:ville,
         as:'ville_post',
         attributes:['lib_ville']
         
       },
     ],
       where: {actif:1,
      id_posts: req.params.id}
   })
       .then(posts => {
         const message = 'La liste des posts a bien été récupérée.'
         res.json(posts )
       })
       .catch(error => {
         const message = `La liste des posts n'a pas pu être récupérée. Réessayez dans quelques instants.`
         res.status(500).json({message, data:error})
         console.log(error)
       })
   })
}