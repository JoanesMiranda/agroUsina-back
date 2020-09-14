const Mills = require('../models/Mills');
const Harvests = require('../models/Harvests');

module.exports = {

    async index(req, res) {

        const { mill_id } = req.params;

        const mill = await Mills.findByPk(mill_id, {
            include: {
                association: 'harvests'
            }
        });

        return res.json(mill);
    },

    async store(req, res) {
        const { mill_id } = req.params;
        const { code, start_date_harvest, finish_date_harvest } = req.body;

        const mill = await Mills.findByPk(mill_id);

        if (!mill) {
            return res.status(400).json({ error: 'Mills not found' });
        }

        const harvests = await Harvests.create({
            code,
            start_date_harvest,
            finish_date_harvest,
            mill_id,
        });
        return res.json(harvests);
    },

    async delete(req, res) {

        const id = req.params.id;

        const harvest = await Harvests.findByPk(id);

        if (!harvest) {
            return res.status(400).json({ error: "Harvests not found" });
        }
        await harvest.destroy();

        return res.json();
    },
}
