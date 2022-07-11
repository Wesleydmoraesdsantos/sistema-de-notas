import React, {useState} from "react";
import Header from "./componentes/Header";
import Post from "./componentes/Post";
import axios from "axios";
import './App.css'

export default function Main () {

    const [ready, setReady] = useState(false);

    const buscar = async () => {
        axios({
            url: "http://127.0.0.1:5000",
            method: "GET"
        })
        .then(data => {
            console.log(data);
        })
    }
    const falseBuild = () => {
        buscar();
        return <div>

        </div>
    }
    const build = () => {
        return <>

            </>
    }
    return (
        <>
        <Header />
        {ready ? build() : falseBuild()}
        </>
    )
}