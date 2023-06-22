 const {annonce}= require('../db/sequelize')
 const {modele}=require('../db/sequelize')
 const {ville}=require('../db/sequelize')
 const {Op}= require('sequelize')
 const cors= require('cors')
 const auth= require('../auth/isAuth')


 

 module.exports= (server) => {
    server.get('/api/findall/annonce',/* auth,*/cors(),async(req,res,next)=>{  
        
        if(req.query.titre){
        const titre=req.query.titre
        return annonce.findAll({
            where:{titre:{[Op.like]: `${titre}%`}
        },
        order:['titre'],
        limit:4,
        
    })
        .then(annonce =>{
            const message= "l'element a bien ete retrouve"
            res.json(annonce)
            
        })
    }


   annonce.findAll({
    include:[{
        model:modele,
        
       
    }]
   }
    
   )
    .then(annonce =>{
      
        const message = `la liste des annonces a ete recupere.`
        let annonceretour={titre:"",contenu:"",image:"",}
          
   
        res.json(annonce) 
        
    })
    .catch (error =>{
        const message="la liste des annonce n'a pas ete recupere,reesayer dans quelques instant"
        res.status(500).json({message,data: error}) 
        console.log(error)
    })
}) }
