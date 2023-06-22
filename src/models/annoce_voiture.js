

module.exports = (sequelize,DataTypes)=> {

    return sequelize.define('annonce',
    {
        id_annonces:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
     description:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'le contenu est obligatoire'},
                notNull:{msg: 'cette propriete est requise'}
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
       
      

        prix:{
            type: DataTypes.DOUBLE,
            allowNull:false,
            validate: {
                isFloat: {msg:'le prix  est un reel'},
                notNull:{msg:'cette propriete est requise '},
              
            }

        },
      
        kilometrage:{
            type: DataTypes.DOUBLE,
            allowNull:false,
            validate: {
                isFloat: {msg:'le kilometrage est un reel'},
                notNull:{msg:'cette propriete est requise '},
              
            }

        },
      
       
        modele: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty:{msg:'le modele est obligatoire'},
                notNull:{msg:'le modele  propriete est requise '}, 
                  
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
        
        id_utilisateur:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                isInt: {msg:'id  est un  entier'},
                notNull:{msg:'cette propriete est requise '}
            }

        },
      
    },
    {
        timestamps:true,
        createdAt:'date_A',
        updatedAt: false
    }
    )
   
}