import React from "react";
import { VscMenu, VscAdd } from "react-icons/vsc";
import '../App.css';

export default function Header () {

    return (
        <div className="header">
         <div>
             <VscMenu />
         </div>
         <div>
            <h1>poster</h1>
         </div>
         <div>
            <VscAdd />
         </div>
        </div>
    )
}