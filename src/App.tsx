import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import './App.css'

const App = () => {
  return (
    <main>
      <h1> TODO APPLICATION</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
