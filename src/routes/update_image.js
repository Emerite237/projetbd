const { img }= require('../db/sequelize')
const {ValidationError}=require('sequelize')



module.exports =(app) =>{
    app.put('/api/imgs/:id',(req,res) =>
    {
        const id= req.params.id

        img.update(req.body,{
            where: {id_img: id}

        })
        .then(_=>{
          return  img.findByPk(id).then(imgs => {
                if(imgs===null)
                {
                    
                    const message="le img n'existe pas "
                        res.status(404).json({message}) 
                    
                }
                const message='le img a bien ete modifie.'
                res.json({message,data:imgs})
            })
        
            }).catch(error =>{
                const message="le img n'a pas pue etre modifier,reesayer dans quelques instant"
                res.status(500).json({message,data: error}) 
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
