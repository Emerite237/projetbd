
const userModel = require('../models/utilisateur')
const annnoceModel = require('../models/annoce_voiture')
const voitureModel = require('../models/voiture')

const verificationmodel=require('../models/verification')
var imageuploadsmodels=require('../models/imagesuploads')


const { Sequelize, DataTypes } = require('sequelize')

  
const sequelize = new Sequelize('bd', 'root', '', {
  host: 'bd.sqlite',
  dialect: 'sqlite',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging:true
})

const imagesuploads=imageuploadsmodels(sequelize,DataTypes)

const annonce=annnoceModel(sequelize,DataTypes)

const utilisateur = userModel(sequelize, DataTypes)
const voiture = voitureModel(sequelize, DataTypes)

const verification=verificationmodel(sequelize,DataTypes)  

voiture.hasOne(annonce,{
  foreignKey:'id_voiture',
  as: 'annonce_voiture',
  onDelete:'CASCADE',
 
})
annonce.belongsTo(voiture,{
  foreignKey: 'id_voiture',
  as: 'annonce_voiture',
  onDelete: 'CASCADE',
  hooks:true
})


annonce.hasMany(imagesuploads,{
  foreignKey:'id_annonce',
  as: 'annonce_image',
  onDelete:'CASCADE',
 
})
imagesuploads.belongsTo(annonce,{
  foreignKey: 'id_annonce',
  as: 'annonce_image',
  onDelete: 'CASCADE',
  hooks:true
})
/*


// Type foreign Key to posts table
voiture.hasOne(annonce,{
  foreignKey:'voiture',
  as: 'annonce_voiture'
})
annonce.belongsTo(voiture,{
  foreignKey: 'voiture',
  as: ''
})

annonce.hasOne(voiture);
voiture.belongsTo(annonce);

*/
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')
  })
}
  

module.exports = { 
 sequelize,utilisateur,annonce,verification,imagesuploads,voiture
}