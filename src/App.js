import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <Frase />
      <SayMyName nome="Lucio" />
      <SayMyName nome="Gabriel" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="João"
        idade="28"
        profissao="Programador"
        foto="https://placehold.co/150"
      />
    </div>
  );
}

export default App;
