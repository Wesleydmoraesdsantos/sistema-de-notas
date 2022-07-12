import React from "react";
import { VscMenu, VscAdd, VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";
import '../App.css';

export default function Header (props) {
//console.log(props.children[1])
    return (
        <div className="header">
         <div>
             <VscMenu />
         </div>
         <div>
            <h1>poster</h1>
         </div>
         {props.children}
        </div>
    )
}