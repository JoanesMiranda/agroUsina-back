const { Model, DataTypes } = require('sequelize');

class Mills extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Harvests, { foreignKey: 'mill_id', as: 'harvests' });
    }

}

module.exports = Mills;