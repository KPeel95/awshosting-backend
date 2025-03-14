const mongoose = require("mongoose");

const schemalessSchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Todo", schemalessSchema);