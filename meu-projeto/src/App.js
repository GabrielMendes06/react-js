import './App.css';

function App() {
  const name = 'Matheus'
  function soma(a, b) {
    return a + b
  }

const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {soma(1, 2)}</p>
      <img src ={url} alt="" />
    </div>
  );
}

export default App;
