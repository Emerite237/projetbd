module.exports = (sequelize, DataTypes) => {
    return sequelize.define('verification', {
      id_verification: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_utilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {msg: ''},
          notNull: {msg: ''}
        }
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'Erreur de token'},
          notNull: {msg: 'Erreur le token ne doit pas être vide'}
        }
      },
      date_expiration: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {msg: ``},
          notNull: {msg: ``}
        }
      }
    }, {
      timestamps: true,
      createdAt: 'date_creation',
      updatedAt: false
    })
  }