import React from "react";
import './App.css';

function App() {
  return (
    <>
     <h1>criando uma nota</h1>

     <form>
      <label>titulo:</label>
      <input type="text" name="titulo" placeholder="digite o titulo" />
      <label>Conteudo:</label>
      <textarea name="conteudo"></textarea>

      <button type="submit">Cadastrar postagem</button>
     </form>
    </>
  );
};

export default App;
