const Harvests = require('../models/Harvests');
const Farms = require('../models/Farms');

module.exports = {

    async index(req, res) {

        const { harvest_id } = req.params;

        const harvest = await Harvests.findByPk(harvest_id, {
            include: { association: 'farms', through: {attributes: []} }
        });

        return res.json(harvest);
    },

    async store(req, res) {

        const { harvest_id } = req.params;

        const { code, name } = req.body;

        const harvest = await Harvests.findByPk(harvest_id);

        if (!harvest) {
            return res.status(400).json({ error: 'Harvests no found' });
        }

        const [farm] = await Farms.findOrCreate({
            where: { code, name }
        });

        await harvest.addFarm(farm);

        return res.json({ farm });

    },

    async delete(req, res) {

        const { harvest_id } = req.params;

        const { code } = req.body;

        const harvest = await Harvests.findByPk(harvest_id);

        if (!harvest) {
            return res.status(400).json({ error: "Harvest not found" });
        }

        const farm = await Farms.findOne({
            where: { code }
        });

        await harvest.removeFarm(farm);

        return res.json();
    }
}
