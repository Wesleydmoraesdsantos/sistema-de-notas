const Sequelize = require("sequelize");
const sequelize = new Sequelize('notas', 'root', 'root', {host: "127.0.0.1", dialect: 'mysql'});

sequelize.authenticate()
.then(()=> console.log("conectado com sucesso!"))
.catch(console.log);

// Model postagem (criando tabelas)

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

});

const usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//para rodar use: nome_do_model.sync({force: true});
//postagem.sync({force: true});
//usuarios.sync({force: true});

//insrirndo dados nas tabelas nome_do_model.create({colum: value});
postagem.create({
    titulo: "um titulo qualquer 2",
    conteudo: "lorem ipsun fate grand order mahou shoujo black clover"
});