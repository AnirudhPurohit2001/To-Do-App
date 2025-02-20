import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import './App.css'
import './index.css'

const App = () => {
  return (
    <main>
      <h1 className="text-6xl p-3 text-center"> TODO APPLICATION</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
