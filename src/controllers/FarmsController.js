const Harvests = require('../models/Harvests');
const Farms = require('../models/Farms');

module.exports = {

    async index(req, res) {

        try {
            const harvest_id  = req.params;

            const harvest = await Harvests.findByPk(harvest_id, {
                include: { association: 'farms', through: { attributes: [] } }
            });
            return res.json(harvest);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async store(req, res) {

        try {

            const harvest_id = req.params;

            const { code, name } = req.body;

            const harvest = await Harvests.findByPk(harvest_id);

            if (!harvest) {
                throw new Error('Harvests no found');
            }

            const [farm] = await Farms.findOrCreate({
                where: { code, name }
            });

            await harvest.addFarm(farm);

            return res.json({ farm });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    // async delete(req, res) {

    //     try {
    //         const { harvest_id } = req.params;

    //         const { code } = req.body;

    //         const harvest = await Harvests.findByPk(harvest_id);

    //         if (!harvest) {
    //             throw new Error("Harvest not found");
    //         }

    //         const farm = await Farms.findOne({
    //             where: { code }
    //         });

    //         await harvest.removeFarm(farm);

    //         return res.json();

    //     } catch (err) {
    //         return res.status(400).json({ error: err.message });
    //     }
    // }

    async delete(req, res) {

        try {
            const id = req.params.id;

            const farms = await Farms.findByPk(id);

            if (!farms) {
                throw new Error("Farms not found");
            }
            await farms.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },







}
