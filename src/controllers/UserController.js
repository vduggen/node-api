const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async list(req, res) {
        const { page = 1 } = req.query;
        const user = await User.paginate({}, { page, limit: 3 });

        return res.json( user );
    },

    async create(req, res) {
        const user = await User.create(req.body);

        return res.json( user );
    },

    async filter(req, res) {
        const user = await User.findById(req.params);

        return res.json( user );
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:true });
        
        return res.json( user );
    },

    async delete(req, res) {
        await User.findByIdAndRemove(req.params.id)

        return res.send();
    }
};