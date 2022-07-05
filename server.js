const app = require("express")();
const {routes} = require("./Routes");
const porta = process.env.PORT || 5000;

app.use(routes);

app.listen( porta, () => console.log(`servidor rodando na porta ${porta}`));
