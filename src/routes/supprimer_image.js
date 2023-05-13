const {img}= require('../db/sequelize');

module.exports = (app)=>{
    app.delete('/api/imgs/:id',(req,res)=>{
       img.findByPk(req.params.id)
        .then(img => {
            if(img===null){
                
                const message="l'images n'existe pas, essayer un autre identifiant "
                return res.status(404).json({message}) 
            }
            const imgsdelete=img;
            return img.destroy({
                where : id=img.id
            }).then(_ => {
                const message='le imgs  ete supprimer'
                res.json( {message,data:imgsdelete})
            }).catch(error =>{
                const message="le imgs n'a pas pue etre supprimer,reesayer dans quelques instant"
                res.status(500).json({message,data:error}); 
        })
        })

    })
}