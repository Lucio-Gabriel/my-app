import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
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
