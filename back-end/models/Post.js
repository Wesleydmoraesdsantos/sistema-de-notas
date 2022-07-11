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

    await Post.create({
        titulo: data.tit,
        conteudo: data.texto
    });
};

const read = async () => {
    let res = await Post.findAll({order: [['id', 'DESC']]});
    console.log("dados", res);
    return res;
}


module.exports = {Post, insert, read};
