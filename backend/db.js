require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const contactSchema=mongoose.Schema(
    {
        person_name:String,
        person_number:String
    }
)
const contact  = mongoose.model("contact_list", contactSchema);
module.exports=
{
    contact : contact
}