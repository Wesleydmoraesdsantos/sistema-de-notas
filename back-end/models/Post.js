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

//ler
const read = async () => {
    let res = await Post.findAll({order: [['id', 'DESC']]});
    console.log("dados", res);
    return res;
};

//deletar um post
const deletar = async (ident)=> {
    console.log(ident, typeof ident)
   let sucess =  await Post.destroy({
        where: {
            'id': ident
        }
    }).then(()=> true).catch((e)=> e);
    console.log("sucess : ", sucess)
    return sucess;
};


module.exports = {Post, insert, read, deletar};
