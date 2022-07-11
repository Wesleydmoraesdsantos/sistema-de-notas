const routes = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const {Post, insert, read} = require("./models/Post");
//const { application } = require("express");

//body parser
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

//cors
routes.use(cors());
//main
routes.get('/', async (req, res)=> {
    console.log("entrou aqui")
    await read()
    .then((data)=> {console.log("go inside", data); res.json(data)})
    .catch(()=>res.send("erro"));
});

//Inserir post
routes.post("/cadastrar", async (req, res) => {
    let dados = req.body;
    console.log(dados);
    await insert(dados).then(()=> res.send("sucesso")).catch(()=> res.send("erro"));
    //res.send("sucesso");
});

module.exports = { routes };
