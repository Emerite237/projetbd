const {annonce}= require('../db/sequelize')
const cors= require('cors')
const {voiture} = require('../db/sequelize')


module.exports= (server) => {
   server.get('/api/annonce/utilisateur/:id',cors(),async(req,res)=>{

    annonce.findAll({
       include:[{
         model:voiture,
         as:'annonce_voiture',
        
       },
      
     ],
       where: {
      id_utilisateur: req.params.id}
   })
       .then(annonces => {
         const message = 'La liste des annonces a bien été récupérée.'
         res.json(annonces )
       })
       .catch(error => {
         const message = `La liste des annonces n'a pas pu être récupérée. Réessayez dans quelques instants.`
         res.status(500).json({message, data:error})
         console.log(error)
       })
   })
}