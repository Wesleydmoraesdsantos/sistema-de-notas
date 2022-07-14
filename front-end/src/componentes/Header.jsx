import React from "react";
import { VscMenu } from "react-icons/vsc";
import '../App.css';

export default function Header (props) {
//console.log(props.children[1])
    return (
        <div className="header">
         <div onClick={() => window.document.querySelector(".barra").classList.toggle("on")}>
             <VscMenu />
         </div>
         <div>
            <h1>poster</h1>
         </div>
         {props.children}
        </div>
    )
}