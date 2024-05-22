const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

const MySchema = new mongoose.Schema({
    title: String,
    img: String,
    oldPrice: Number,
    newPrice: Number,
    desc: String,
    disPer: Number,
});
const MyModel = mongoose.model("MyModel", MySchema);

app.get("/", async (req, res) => {
    const found = await MyModel.find();
    try {
        res.send(found);
    } catch {
        res.send("cant get");
    }
});
app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const found = await MyModel.findById(id);
    try {
        res.send(found);
    } catch {
        res.send("cant get");
    }
});

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const found = await MyModel.findByIdAndDelete(id);
    try {
        res.send(found);
    } catch {
        res.send("cant del");
    }
});

app.post("/", async (req, res) => {
    const payl = new MyModel(req.body);
    await payl.save();
    try {
        res.send(payl);
    } catch {
        res.send("cant get");
    }
});

const CONNECTION = "mongodb+srv://Rena:Rena123@coloshop.rnijhri.mongodb.net/";
mongoose.connect(CONNECTION).then(() => {
    console.log("connected");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
