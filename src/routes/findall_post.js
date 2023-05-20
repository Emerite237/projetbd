 const {post}= require('../db/sequelize')
 const {type}=require('../db/sequelize')
 const {ville}=require('../db/sequelize')
 const {Op}= require('sequelize')
 const cors= require('cors')


 

 module.exports= (server) => {
    server.get('/api/findall/post', cors(),(req,res)=>{
        if(req.query.titre){
            const titre=req.query.titre
            return post.findAll({
                where:{titre:{[Op.like]: `${titre}%`}
            },
            order:['titre'],
            limit:4,
            raw:true
        })
            .then(post =>{
                const message= "l'element a bien ete retrouve"
                res.json({message,data:post})
                
            })
        }


       post.findAll({
        include:[{
            model:type,
            as:'type_post',
            attributes:['lib_type']

        },{
            model:ville,
            as:'ville_post',
            attributes:['lib_ville']


        }
    ],

        
        where: {actif:1},
        order:['titre'],
         limit:5,
         raw:true
       }
        
       )
        .then(post =>{
          
            const message = `la liste des posts a ete recupere.`
            let postretour={titre:"",contenu:"",image:"",}
              
       
            res.json(post) 
            
        })
        .catch (error =>{
            const message="la liste des post n'a pas ete recupere,reesayer dans quelques instant"
            res.status(500).json({message,data: error}) 
            console.log(error)
        })
    }) 
 }