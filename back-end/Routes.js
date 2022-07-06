const routes = require("express").Router();
const cors = require("cors");
const db = require("./db");
//const { application } = require("express");

routes.use(cors());

routes.get("/cad", () => {
    
});

module.exports = { routes };
