const db = require("./db");
const Post = db.sequelize.define('postagem', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//inserir
const insert = async data => {
    Post.sync();

    const novo_post = await Post.create({
        titulo: data.tit,
        conteudo: data.texto
    });
};

const read = async () => {
    return await Post.findAll();
}


module.exports = {Post, insert, read};
