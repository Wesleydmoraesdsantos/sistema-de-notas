import React from "react";
import '../App.css';

export default function Post (props) {

    return (
        <>
        <div>
          <section>
            <h2>{props.tit}</h2>
            <div>
                <p>{props.texto}</p>
            </div>
          </section>
        </div>
        </>
    )
};