const routes = require("express").Router();
const cors = require("cors");

routes.use(cors());
routes.get("/", (req, res)=> {
    res.send(" ok ");
});

module.exports = { routes };
