const {annonce}= require('../db/sequelize');
const cors=require("cors")

module.exports = (app)=>{
    app.delete('/api/annonce/supprimer/:id', cors(),(req,res)=>{
        annonce.findByPk(req.params.id)
        .then(annonce => {
            if(annonce===null){
                
                const message="le annonces n'existe pas, essayer un autre identifiant "
                return res.status(404).json({message}) 
            }
            const annoncesdelete=annonce;
            annonce.destroy({
                where : id=annonce.id
            }).then()
            return  res.json( annoncesdelete)  /*annonce.destroy({
                where : id=annonce.id
            }).then(_ => {
                const message='le annonces a ete supprimer'
                res.json( {message,data:annoncesdelete})
            }).catch(error =>{
                const message="le annonces n'a pas pue etre supprimer,reesayer dans quelques instant"
                res.status(500).json({message,data:error}); 
        })*/
        })

    })
}