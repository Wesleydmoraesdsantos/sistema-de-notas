import React from "react";
import { VscAdd, VscChromeClose, VscMail } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Barra () {

    const close_or_open = () => {
        window.document.querySelector(".barra").classList.toggle("on");
    }
    return (
        <div className="barra">
        <div className="menu_elemento">
            <VscChromeClose className="image" onClick={()=> close_or_open()}/>
            <h1> Poster </h1>
        </div>
        <Link to="/cadastrar" className="no_underline">
            <div className="menu_elemento">
                <VscAdd className="image"/>
                <p>criar nova</p>
            </div>
        </Link>

        <Link to="/" className="no_underline">
            <div className="menu_elemento">
                <VscMail className="image"/>
                <p>home</p>
            </div>
        </Link>
        
        
        <p className="credits"><small>created by:</small> @king</p>
        </div>
    )
}