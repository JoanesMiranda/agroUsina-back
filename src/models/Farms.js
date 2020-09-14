const { Model, DataTypes } = require('sequelize');

class Farms extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.STRING,
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Harvests, { foreignKey: 'farm_id', through: 'harvest_has_farm', as: 'harvests' });
        this.hasMany(models.Fields, { foreignKey: 'farm_id', as: 'fields' });
    }
}

module.exports = Farms;