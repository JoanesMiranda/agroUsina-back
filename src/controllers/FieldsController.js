const Farms = require('../models/Farms');
const Fields = require('../models/Fields');

module.exports = {

    async index(req, res) {

        const { farm_id } = req.params;

        const farm = await Farms.findByPk(farm_id, {
            include: { association: 'fields' }
        });

        return res.json(farm);
    },

    async store(req, res) {
        const { farm_id } = req.params;
        const { code, longitude, latitude } = req.body;

        const farm = await Farms.findByPk(farm_id);

        if (!farm) {
            return res.status(400).json({ error: 'Farm not found' });
        }

        const fields = await Fields.create({
            code,
            longitude,
            latitude,
            farm_id,
        });
        return res.json(fields);
    },
    async delete(req, res) {

        const { farm_id } = req.params;
        const { code } = req.body;

        const farm = await Farms.findByPk(farm_id);

        if (!farm) {
            return res.status(400).json({ error: "Farm not found" });
        }

        const field = await Fields.findOne({
            where: { code }
        });

        await farm.removeFields(field);

        return res.json();
    }
}
