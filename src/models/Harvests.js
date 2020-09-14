const { Model, DataTypes } = require('sequelize');

class Harvests extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.STRING,
            start_date_harvest: DataTypes.DATE,
            finish_date_harvest: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Mills, { foreignKey: 'mill_id', as: 'mills' });
        this.belongsToMany(models.Farms, {foreignKey: 'harvest_id', through: 'harvest_has_farm', as: 'farms'});
    }
}

module.exports = Harvests;