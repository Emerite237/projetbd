const { annonce }= require('../db/sequelize')
const {ValidationError}=require('sequelize')
const cors=require("cors")
module.exports =(app) =>{
    app.put('/api/annonce/modifier/:id', cors(),(req,res) =>
    {
        const id= req.params.id

      annonce.update(req.body,{
            where: {id_annonces: id}

        })
        .then(_=>{
          return annonce.findByPk(id).then(annonces => {
                if(annonces===null)
                {
                    
                    const message="le annonces n'existe pas "
                        res.status(404).json({message}) 
                    
                }
                const message='le annonces a bien ete modifie.'
                res.json({message,data:annonces})
            })
        
            }).catch(error =>{
                const message="le annonces n'a pas pue etre modifier,reesayer dans quelques instant"
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
