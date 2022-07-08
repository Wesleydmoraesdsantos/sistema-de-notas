import React, {useState} from "react";
import './App.css';

function App() {

const [text, setText] = useState("");
const [titulo, setTitulo] = useState("");
console.log(text, titulo);
  return (
    <div className="App">
     <h1>criando uma nota</h1>

     <form className="flex_form">
      <div className="space">
        <label>titulo:</label>
        <input type="text" className="tit_area" name="titulo" placeholder="digite o titulo" alue={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="space">
        <label>Conteudo:</label>
        <textarea className="txt_area" name="conteudo" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      </div>

      <div className="space"><button type="submit" className="black_txt" onClick={(e)=> e.preventDefault()}>Cadastrar postagem</button></div>
     </form>
    </div>
  );
};

export default App;
