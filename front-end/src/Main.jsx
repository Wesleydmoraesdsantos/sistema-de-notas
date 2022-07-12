import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { add_post } from "./store/posts/post";
import Header from "./componentes/Header";
import Post from "./componentes/Post";
import axios from "axios";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";
import './App.css'

export default function Main () {

    const [ready, setReady] = useState(false);

    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts);

    const buscar = async () => {
        axios({
            url: "http://127.0.0.1:5000",
            method: "GET"
        })
        .then(data => {
            console.log(data);
            for(let i in data.data){
                dispatch(add_post(data.data[i]));
            };

            setReady(true);
        })
    }
    const falseBuild = () => {
        buscar();
        return <div>
            <p>fazendo o fetch</p>
        </div>
    }
    const build = () => {
        return <>
             <div className="align_posts">{posts.map(obj => <Post id={obj.id} titulo={obj.titulo} conteudo={obj.conteudo}/>)}</div>
            </>
    }
    return (
        <>
        <Header>
            <Link to="/cadastrar">
                <div>
                    <VscAdd />
                </div>
            </Link>
        </Header>
        <div className="space_nothing"></div>
        {ready ? build() : falseBuild()}
        <div className="space_nothing"></div>
        </>
    )
}