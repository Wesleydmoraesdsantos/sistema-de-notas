import React from "react";
import { VscTrash } from "react-icons/vsc";
import axios from "axios";
import '../App.css'; // VscTrash

export default function Post (props) {

  const deletar = (ident) => {
    console.log(ident)
    axios({
      method: 'GET',
      
      url: `http://127.0.0.1:5000/delete/${ident}`,
     // body: JSON.stringify({id: ident})
    })
    .then((res)=> window.alert(`o post ${res ? "foi deletado!" : "não foi deletado!"}`))
    .catch((e)=> window.alert("ERRO ao deletar o post", e));
  }
    return (
        <>
        <div className="post_div">
          <section className="post_section">
            <div className="align_title">
              <h2 className="titulo">{props.titulo}</h2>
              <div className="trash" onClick={()=> deletar(props.id)}>
                <VscTrash />
              </div>
            </div>
            <div>
                <p className="conteudo">{props.conteudo}</p>
            </div>
          </section>
        </div>
        </>
    )
};