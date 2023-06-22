

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('voitures', {
    
      id_voiture:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


      modele: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'Le libélé du modele ne doit pas être vide'},
          notNull: {msg: 'Le libelé du modele est une propriété requise'}
        }
      },
      couleur: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:{msg:'la couleur est obligatoire'},
            notNull:{msg:'cette propriete est requise '}, 
              
        }
    },

    anneeF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {msg:'id  est un  entier'},
          notEmpty:{msg:`annee est obligatoire'`},
          notNull:{msg: 'cette annee est requise'}
      }
    },

      marque: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty:{msg:'la marque est obligatoire'},
            notNull:{msg:'la marque  propriete est requise '}, 
              
        }
    },
    
    capacite: {
      type: DataTypes.FLOAT,
      allowNull:false,
      validate: {
          notEmpty:{msg:'la capacite est obligatoire'},
          notNull:{msg:'la capacite  propriete est requise '}, 
            
      }
  },
    nb_place:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        isInt: {msg:'id  est un  entier'},
          notNull:{msg:'cette propriete est requise '}
      }

  },
  energie: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty:{msg:`la source d'energie est obligatoire'`},
        notNull:{msg: 'cette propriete est requise'}
    }
},



marque: {
  type: DataTypes.STRING,
  allowNull: false,
 
  validate:{

      notEmpty:{msg:'la marque est obligatoire'},
      notNull:{msg: 'cette marque propriete est requise'},

  }
},

categorie: {
  type: DataTypes.STRING,
  allowNull:false,
  validate: {
      notEmpty:{msg:'la categorie est obligatoire'},
      notNull:{msg:'la categorie propriete est requise '}, 
        
  }
},

transmission:{
  type: DataTypes.STRING,
  allowNull:false,
  validate: {
      
      notNull:{msg:'cette propriete est requise '},
    
  }

},

  

      

    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
  }