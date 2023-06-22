const { voiture }= require('../db/sequelize')
const {ValidationError}=require('sequelize')
const cors=require("cors")
module.exports =(app) =>{
    app.put('/api/voiture/modifier/:id', cors(),(req,res) =>
    {
        const id= req.params.id

      voiture.update(req.body,{
            where: {id_voiture: id}

        })
        .then(_=>{
          return voiture.findByPk(id).then(voiture => {
                if(voiture===null)
                {
                    
                    const message="le voiture n'existe pas "
                        res.status(404).json({message}) 
                    
                }
                const message='le voiture a bien ete modifie.'
                res.json(voiture)
            })
        
            }).catch(error =>{
                const message="le voiture n'a pas pue etre modifier,reesayer dans quelques instant"
                res.status(500).json({message,data: error}) 
                console.log(error)
            }).catch(error => {
                if(error instanceof ValidationError ){
                return res.status(400).json({message: error.message,data: error})
               }
               if(error instanceof UniqueConstraintError){
                return res.status(400).json({message: error.message})
               }

               const message="l'image n'a pas pue etre ajouter"
               res.status(500).json({message, data:error})
               
            })
        })
    }
