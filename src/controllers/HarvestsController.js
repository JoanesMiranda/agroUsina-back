const Mills = require('../models/Mills');
const Harvests = require('../models/Harvests');

module.exports = {

    async index(req, res) {

        try {
            const { mill_id } = req.params;

            const mill = await Mills.findByPk(mill_id, {
                include: {
                    association: 'harvests'
                }
            });

            return res.json(mill);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async store(req, res) {

        try {
            const { mill_id } = req.params;
            const { code, start_date_harvest, finish_date_harvest } = req.body;

            const mill = await Mills.findByPk(mill_id);

            if (!mill) {
                throw new Error('Mills not found');
            }

            const harvests = await Harvests.create({
                code,
                start_date_harvest,
                finish_date_harvest,
                mill_id,
            });

            return res.json(harvests);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }

    },

    async delete(req, res) {

        try {
            const id = req.params.id;

            const harvest = await Harvests.findByPk(id);

            if (!harvest) {
                throw new Error("Harvests not found");
            }
            await harvest.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
}
