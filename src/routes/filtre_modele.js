const {voiture}= require('../db/sequelize')
const {annonce}=require('../db/sequelize')
const {ville}=require('../db/sequelize')
const {Op}= require('sequelize')
const cors= require('cors')
const auth= require('../auth/isAuth')

tab=[]


module.exports= (server) => {
   server.get('/api/filtre/modele/voiture/:modele',/* auth,*/cors(),async(req,res,next)=>{
   
try {
  var annonces= await annonce.findAll({

    include: [{
        model: voiture,
        as:'annonce_voiture',
        where: {
          modele: req.params.modele
        }
      }]
  })
 

      res.json(annonces) }
      
       catch (error ){
        
           res.status(500).json({data: error}) 
           console.log(error)}
       
   }) 


   server.get('/api/filtre/marque/voiture/:marque',/* auth,*/cors(),async(req,res,next)=>{
   
    try {
      var annonces= await annonce.findAll({
    
        include: [{
            model: voiture,
            as:'annonce_voiture',
            where: {
              marque: req.params.marque
            }
          }]
      })
     
    
          res.json(annonces) }
          
           catch (error ){
            
               res.status(500).json({data: error}) 
               console.log(error)}
           
       }) 


       server.get('/api/filtre/categarie/voiture/:categorie',/* auth,*/cors(),async(req,res,next)=>{
   
        try {
          var annonces= await annonce.findAll({
        
            include: [{
                model: voiture,
                as:'annonce_voiture',
                where: {
                  categorie: req.params.categorie
                }
              }]
          })
         
        
              res.json(annonces) }
              
               catch (error ){
                
                   res.status(500).json({data: error}) 
                   console.log(error)}
               
           }) 


           server.get('/api/filtre/annee/voiture/:annee',/* auth,*/cors(),async(req,res,next)=>{
   
            try {
              var annonces= await annonce.findAll({
            
                include: [{
                    model: voiture,
                    as:'annonce_voiture',
                    where: {
                      anneeF: req.params.annee
                    }
                  }]
              })
             
            
                  res.json(annonces) }
                  
                   catch (error ){
                    
                       res.status(500).json({data: error}) 
                       console.log(error)}
                   
               }) 

               server.get('/api/filtre/transmission/voiture/:transmission',/* auth,*/cors(),async(req,res,next)=>{
   
                try {
                  var annonces= await annonce.findAll({
                
                    include: [{
                        model: voiture,
                        as:'annonce_voiture',
                        where: {
                          transmission: req.params.transmission
                        }
                      }]
                  })
                 
                
                      res.json(annonces) }
                      
                       catch (error ){
                        
                           res.status(500).json({data: error}) 
                           console.log(error)}
                       
                   }) 

                   server.get('/api/filtre/energie/voiture/:energie',/* auth,*/cors(),async(req,res,next)=>{
   
                    try {
                      var annonces= await annonce.findAll({
                    
                        include: [{
                            model: voiture,
                            as:'annonce_voiture',
                            where: {
                              energie: req.params.energie
                            }
                          }]
                      })
                     
                    
                          res.json(annonces) }
                          
                           catch (error ){
                            
                               res.status(500).json({data: error}) 
                               console.log(error)}
                           
                       }) 


}