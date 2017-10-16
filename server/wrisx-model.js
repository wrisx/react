const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wrisxSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: String,
    details: String
});

const Wrisx = mongoose.model('Wrisx', wrisxSchema);
module.exports = Wrisx;