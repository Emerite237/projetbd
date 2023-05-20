
module.exports = (sequelize,DataTypes)=> {

    return sequelize.define('image',
    {
         
        
        id_img:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

   
           
    
      path:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique:{
           msg: 'ce texte est deja pris' 
        },
        validate:{
           // isUrl:{msg:" il s'sagit d'une chaine de charactere  obligatoire"},
            notNull:{msg: 'cette propriete est requise'}
        }
       
},

    id_posts:{
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
    createdAt:'date_img',
    updatedAt:false
})
}