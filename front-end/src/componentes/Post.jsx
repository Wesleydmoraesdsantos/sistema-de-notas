import React from "react";
import '../App.css';

export default function Post (props) {

    return (
        <>
        <div className="post_div">
          <section className="post_section">
            <h2 className="titulo">{props.titulo}</h2>
            <div>
                <p className="conteudo">{props.conteudo}</p>
            </div>
          </section>
        </div>
        </>
    )
};