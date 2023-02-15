import './App.css';
import HelloWorld from './components/HelloWorld'
function App() {

  const name = 'Jânio'
  const newName = name.toUpperCase()
  function sum (a,b){
    return(a+b) 
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2,3)}</p>
      <img src={url} alt="Minha moto"/>
      <HelloWorld />
    </div>
  )
}

export default App;
