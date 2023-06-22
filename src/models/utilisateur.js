module.exports = (sequelize, DataTypes) => {
  return sequelize.define('utilisateur', {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Le nom ne doit pas être vide'},
        notNull: {msg: 'Le nom est une propriété requise'}
      }
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Le prénom ne doit pas être vide'},
        notNull: {msg: 'Le prénom est une propriété requise'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: `Email ne doit pas être vide`},
        notNull: {msg: `Votre email est obligatoire merci de le renseigner`}
      }
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: `Le mot de passe ne doit pas être vide`},
        notNull: {msg: `Merci de proposer un mot de passe valide`}
      }
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: `vous n'avez pas renseigner le numero de telehone`},
        notNull: {msg: `le numero de telephone est obligatoire`}
      }
    },
    verifier: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {msg: `Erreur de génération d'un token`},
        notNull: {msg: 'Erreur token non valide'}
      }
    }
  }, {
    timestamps: true,
    createdAt: 'date_creation',
    updatedAt: false
  })
}