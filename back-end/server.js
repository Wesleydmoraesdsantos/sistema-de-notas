const express = require("express");
const app = express();
const {routes} = require("./Routes");
const porta = process.env.PORT || 5000;
/*
const axios = require("axios");
axios({
    url:'http://api.ipify.org'
})
.then(res => console.log(res.data));
*/

app.use(routes);

app.listen( porta, () => console.log(`servidor rodando na porta ${porta}`));
