import Card from "./components/Card"
import Contador from "./components/Contador"
import Hello from "./components/Hello"
import ListaCards from "./components/ListaCards"

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Hello nome="Fulano"></Hello>
      <Contador></Contador>
      <Card titulo="Meu Produto">
        <h3>Nome: Meu Produto</h3>
        <p>Descrição: Meu Produto é bom!</p>
      </Card>
      <ListaCards></ListaCards>
    </>
  )
}

export default App
