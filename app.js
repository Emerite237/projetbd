const express = require('express')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const morgan =require('morgan')
const favicon=require('serve-favicon')
const bodyParser=require('body-parser')
const {sequelize} = require('./src/db/sequelize')
const ejs = require("ejs")
const path= require("path")
const sequelizeSession = require('connect-session-sequelize')(session.Store)

const cors =require('cors')


const app =express()
const port = 3000
const oneDay = 1000 * 60 * 60 * 24 
//synchronisation a la base de donnee embarque
sequelize.sync({force:false}).then( ()=>console.log('base de donnée pret'));

//session middleware

app.use("/public/data/uploads",express.static(path.join(__dirname,"/public/data/uploads")))
app.use(cookiesParser())
.use(session({
    secret:'key that will be secret',
    resave:false,
    saveUninitialized: false,
    store:new sequelizeSession({
        db:sequelize
    })
}))
.use(express.static(__dirname))
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use(cors({ origin: '*',
methods:"GET,POST,HEAD,PUSH,DELETE,PATCH" }));

//ici, nous placerons nos futurs points de terminaison. 


// point de terminaison des publication
require("./src/routes/findbypk")(app)        /* q   a la place du 1 tu peux mettre n'importe quel id    */ 

                                               
require('./src/routes/create_annonce')(app);    //    http://localhost:3000/api/annonce/:id    id c'est  celui de utilisateur  cette route permet de cree une annoce de voiture

                                              
require('./src/routes/create_voiture')(app);    //    http://localhost:3000/api/voiture   permet de cree un modele de voiture 


require('./src/routes/findall_voiture')(app)    //      http://localhost:3000/api/findall/voiture   pour afficher toutes les voitures

require('./src/routes/update_annonce')(app);    //    http://localhost:3000/api/annonce/modifier/:id  pour modifier une annnonces


require('./src/routes/update_voiture')(app);       //    http://localhost:3000/api/voiture/modifier/:id  pour modifier les caracteristique d'une voiture


require('./src/routes/supprimer_annonce')(app);    //    http://localhost:3000/api/annonce/supprimer/:id   pour supprimer une annonce


require("./src/routes/uploade_image")(app);       //http://localhost:3000/api/upload   pour uploader des images

require('./src/routes/findall_image_imageuploads')(app);  /* afficher a la fois les images present dans le serveur et celle qui ont des url  http://localhost:3000/api/imagesuploads
                                                              afficher toute les images d'une annonce  http://localhost:3000/api/imagesuploads/:id */

require("./src/routes/findbypk_images_uploads")(app);  // http://localhost:3000/api/findbypk/image_imagesuploads/id    pour avoir une image d'un id de l'annonce




 
require('./src/routes/findone_image')(app)      // http://localhost:3000/api/findone/image_imagesuploads/id    pour avoir une image d'un id de l'annonce


require('./src/routes/findall_annonce_utilisateur')(app) //  http://localhost:3000/api/annonce/utilisateur/:id   pour avoir les annonces d'un utilisateur

  require('./src/routes/findall_annonce')(app)    /*   http://localhost:3000/api/findall/annonce   pour afficher toutes les annoces
                                                
                                                    http://localhost:3000/api/findall/post?titre=le titre du site rechercher    pour des recherches plus precise
 
*/

require('./src/routes/findall_utilisateur')(app)    /*   http://localhost:3000/api/findall/utilisateur   pour afficher toutes les annoces

*/

// point de terminaison pour les filtres

require('./src/routes/filtre_modele')(app)      //    http://localhost:3000/api/filtre/modele/voiture/:modele pour le filtre suivant les modeles de voiture

                                                  //    http://localhost:3000/api/filtre/categorie/voiture/:categorie pour le filtre suivant les categorie de voiture
                                                 //    http://localhost:3000/api/filtre/marque/voiture/:marque pour le filtre suivant les marques de voiture
                                              
                                                 //    http://localhost:3000/api/filtre/annee/voiture/:annee pour le filtre suivant l'annee de la voiture voiture

                                                 //    http://localhost:3000/api/filtre/transmission/voiture/:transmission pour le filtre suivant la transmission de voiture

                                                 //    http://localhost:3000/api/filtre/energie/voiture/:energie pour le filtre suivant l'energie de la  voiture


// point de terminaison des utilisateurs


// point de terminaison des utilisateurs


require('./src/routes/utilisateurs')(app)      
 //    http://localhost:3000/api/login pour la connexion d'un utilisateur
require('./src/routes/utilisateurs')(app)     
//    http://localhost:3000 /api/register pour l'inscription d'un utilisateur
require('./src/routes/utilisateurs')(app);    
//   http://localhost:3000     /api/validation/:id/:token  pour verifier le token d'un utilisateur 
require('./src/routes/utilisateurs')(app)    
 //     http://localhost:3000 /api/userexist/:email pour verifier l'existence d'une adresse mail
require('./src/routes/utilisateurs')(app)  
  //        http://localhost:3000/api/passrecup    pour la mise ajour du mot de passe apres qu'on l'ai  recupere 
require('./src/routes/utilisateurs')(app)     
  //     http://localhost:3000/api/passupdate   modification du mot de passe 
require('./src/routes/utilisateurs')(app)       
//     http://localhost:3000/api/userupdate   mise a jour de l'utilisateur




app.get('/', (req, res) => {
   //  res.send(console.log(req.session.utilisateur.nom))
 })

//On ajoute la gestion des erreurs 404
app.use(({res})=>{
    const message ='Impossible de trouver la ressource demandée! vous pouvez essayer une autre URL.'
    res.status(404).json({message})
})

app.listen(port,()=>console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))