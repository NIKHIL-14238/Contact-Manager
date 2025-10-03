const express = require("express");
const app = express();
const cors = require("cors");
const {contact} = require("./db.js");
const {createContact} = require("./types")
const port  =3000;
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));
app.post('/posting',async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createContact.safeParse(createPayLoad);
    if(!parsedPayLoad.success)
     {
         res.status(411).json({mssg:"the data is out of bounds"});
         return ;
     }
    await contact.create(
        {
                person_name : parsedPayLoad.data.person_name,
                person_number : parsedPayLoad.data.person_number

        }
    )
    res.json({mssg : "hi the person no. is saved successfully"});

});
app.get('/geting',async function(req,res){
            const ans =await contact.find({});
            res.json({
                ans 
            })

});

app.listen(port,()=>{console.log(`the port is runnig on http://localhost:${port}`)});