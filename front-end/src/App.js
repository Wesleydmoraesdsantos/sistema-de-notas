import React, {useState} from "react";
import './App.css';

function App() {

const [text, setText] = useState("");
const [titulo, setTitulo] = useState("");
console.log(text, titulo);
const send_data = async (data) => {
  console.log(data);

  fetch("http://localhost:5000/cadastrar", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log);
}
  return (
    <div className="App">
     <h1>criando uma nota</h1>

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
    </div>
  );
};

export default App;
