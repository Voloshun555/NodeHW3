const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
    name: String,
    phone: String,
    email: String
})
const Contact = model("contact", contactSchema)

module.exports = Contact