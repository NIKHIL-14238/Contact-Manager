/*
const  zod = require("zod")
const createContact = {
    person_name : zod.string,
    person_number : zod.number().max(10).min(10)
};

module.exports = {
    createContact : createContact
}
*/
const zod = require("zod");

const createContact = zod.object({
  person_name: zod.string().min(1, "Name is required"),
  person_number: zod
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

module.exports = {
  createContact,
};
