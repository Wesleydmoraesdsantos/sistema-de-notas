import React, {useState} from "react";
import Header from "./componentes/Header";
import Barra from "./componentes/Barra";
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeMessage, disableMessage } from "./store/message";

import './App.css';

function App() {

const [text, setText] = useState("");
const [titulo, setTitulo] = useState("");

const show = useSelector(state => state.message.showMessage);

console.log(show);

console.log(text, titulo);

const dispatch = useDispatch();

const send_data = async (data) => {
  console.log(data);

  fetch("http://localhost:5000/cadastrar", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(showMessage())
  .catch(console.log);
};

const showMessage = () => {
  console.log("enviado");

  dispatch(activeMessage());

  const time = setTimeout(() => {
    dispatch(disableMessage())
  }, 4000);
}
  return (
    <div className="App">
      <Barra />
     <Header>
     <Link to="/">
             <div>
                <VscArrowLeft />
             </div>
         </Link>
     </Header>

     <div className="space_nothing"></div>

     <form className="flex_form" action="send_data()" method="POST">
      <div className="space">
        <label>titulo:</label>
        <input type="text" className="tit_area" name="titulo" placeholder="digite o titulo" alue={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="space">
        <label>Conteudo:</label>
        <textarea className="txt_area" name="conteudo" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      </div>

      <div className="space"><button type="submit" className="black_txt" onClick={(e)=> {e.preventDefault(); send_data({texto: text, tit: titulo})}}>Cadastrar postagem</button></div>
     </form>
     
     <div className="space_nothing"></div>
      <div class="space">
        
              {show ? <p className="menssagem"> cadastrado</p> : <></>}
      </div>
    </div>
  );
};

export default App;
