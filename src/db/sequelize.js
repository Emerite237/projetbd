
const userModel = require('../models/utilisateur')
const annnoceModel = require('../models/annoce_voiture')
const modeleModel = require('../models/modele')

const verificationmodel=require('../models/verification')
var imageuploadsmodels=require('../models/imagesuploads')


const { Sequelize, DataTypes } = require('sequelize')

  
const sequelize = new Sequelize('bd', 'root', '', {
  host: 'bd.sqlite',
  dialect: 'sqlite',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const imagesuploads=imageuploadsmodels(sequelize,DataTypes)

const annonce=annnoceModel(sequelize,DataTypes)

const utilisateur = userModel(sequelize, DataTypes)
const modele = modeleModel(sequelize, DataTypes)

const verification=verificationmodel(sequelize,DataTypes)  
/*

annonce.hasOne(modele);
modele.belongsTo(annonce);

*/
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')
  })
}
  

module.exports = { 
 sequelize,utilisateur,annonce,verification,imagesuploads,modele
}