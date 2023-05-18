const express = require('express')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const morgan =require('morgan')
const favicon=require('serve-favicon')
const bodyParser=require('body-parser')
const {sequelize} = require('./src/db/sequelize')
const sequelizeSession = require('connect-session-sequelize')(session.Store)

const cors =require('cors')


const app =express()
const port = 3000
const oneDay = 1000 * 60 * 60 * 24 
//synchronisation a la base de donnee embarque
sequelize.sync({force:false}).then( ()=>console.log('base de donnée pret'));

//session middleware
app
.use(cookiesParser())
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
method:"GET,POST,HEAD,PUSH,DELETE,PATH" }));

//ici, nous placerons nos futurs points de terminaison. 


// point de terminaison des publication

require('./src/routes/findall_post')(app)      /*   http://localhost:3000/api/findall/post   pour afficher toutes les publications 
                                                
                                                    http://localhost:3000/api/findall/post?titre=le titre du site rechercher    pour des recherches plus precise
                                               */
require('./src/routes/create_post')(app);    //    http://localhost:3000/api/post
require('./src/routes/update_post')(app);    //    http://localhost:3000/api/post/modifier/:id
require('./src/routes/supprimer_post')(app);    //    http://localhost:3000/api/post/supprimer/:id


// point de terminaison des images 


require('./src/routes/findall_image')(app)     //    http://localhost:3000/api/findall/img
require('./src/routes/create_image')(app);   //    http://localhost:3000/api/img

// point de terminaison des utilisateurs


require('./src/routes/connexion')(app)       //    http://localhost:3000/api/login
require('./src/routes/inscription')(app)     //    http://localhost:3000 /api/register
require('./src/routes/create_user')(app);
require('./src/routes/verification')(app)

//point de terminaisons sur les types,villes,regions et categorie
require('./src/routes/create_type')(app);       //    http://localhost:3000/api/type
require('./src/routes/create_ville')(app);      //   http://localhost:3000/api/ville

require('./src/routes/create_region')(app);  


app.get('/', (req, res) => {
   //  res.send(console.log(req.session.utilisateur.nom))
 })

//On ajoute la gestion des erreurs 404
app.use(({res})=>{
    const message ='Impossible de trouver la ressource demandée! vous pouvez essayer une autre URL.'
    res.status(404).json({message})
})

app.listen(port,()=>console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))