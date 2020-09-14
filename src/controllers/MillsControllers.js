const Mills = require('../models/Mills');

module.exports = {

    async index(req, res) {

        const mills = await Mills.findAll({

            order: [
                ['created_at', 'DESC']
            ]
        });

        return res.json(mills);
    },

    async store(req, res) {

        const { name } = req.body

        const mills = await Mills.create({ name });

        return res.json(mills);
    },

    async delete(req, res) {

        const id = req.params.id;

        const mill = await Mills.findByPk(id);

        if (!mill) {
            return res.status(400).json({ error: "Mill not found" });
        }
        await mill.destroy();

        return res.json();
    },

    paginate(req, res) {

        let page = req.params.num;

        let offset = 0;

        if (isNaN(page) || page == 1) {
            offset = 0;
        } else {
            offset: parseInt(page) = 4;
        }

        Mills.findAndCountAll({
            limit: 6,
            offset: offset
        }).then(mill => {

            let next;
            if (offset + 4 >= mill.count) {
                next = false;
            } else {
                next = true;
            }

            let result = {
                next,
                mill
            }
            res.render('/mills/pages/', { result });
        });
    }

};