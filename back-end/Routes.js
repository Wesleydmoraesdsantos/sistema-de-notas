const routes = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
//const { application } = require("express");

//body parser
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

//cors
routes.use(cors());

routes.post("/cadastrar", (req, res) => {
    let dados = req.body;
    console.log(dados);

    res.json({teste: true, dados});
});

module.exports = { routes };
