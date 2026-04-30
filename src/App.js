import "./App.css";

function App() {
  const name = "Gabriel";

  const newName = name.toUpperCase();

  function sumNumber(a, b) {
    return a + b;
  }

  const urlImage = 'https://placehold.co/400'

  return (
    <div className="App">
      <h1>Olá react</h1> 
      <p>Olá, {newName}</p>
      <p>Somador: {sumNumber(1, 5)}</p>
      <img src={urlImage} alt="minha image" />
    </div>
  );
}

export default App;
