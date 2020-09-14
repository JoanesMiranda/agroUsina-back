const { Model, DataTypes } = require('sequelize');

class Fields extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.STRING,
            longitude: DataTypes.STRING,
            latitude: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Farms, { foreignKey: 'farm_id', as: 'farms' });
    }
}

module.exports = Fields;