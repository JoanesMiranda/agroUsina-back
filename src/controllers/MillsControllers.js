const Mills = require('../models/Mills');

module.exports = {

    async index(req, res) {

        try {
            const mills = await Mills.findAll({

                order: [
                    ['created_at', 'DESC']
                ]
            });

            return res.json(mills);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async getById(req, res) {

        const id = req.params.id;

        try {
            const mill = await Mills.findByPk(id);
            if (!mill) {
                throw new Error("mill not found");
            }

            return res.json(mill);
        } catch (error) {
            return res.status(406).send(error);
        }
    },

    async store(req, res) {

        try {
            const { name } = req.body;

            const mill = await Mills.create({ name });

            return res.json(mill);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    

    async delete(req, res) {

        try {
            const id = req.params.id;

            const mill = await Mills.findByPk(id);

            if (!mill) {
                throw new Error("Mill not found");
            }
            await mill.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }

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