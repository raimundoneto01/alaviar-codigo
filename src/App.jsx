
// import './App.css'

import Input from "./Components/Input/Input"
import Modal from "./Components/Modal/Modal"
import Testando from "./Components/Testando"
import ReactRouter from './Components/ReactRouter';
import NavPaginas from './Components/NavPaginas'
import { Outlet } from "react-router-dom";

function App() {
 

  return (
    <>
    <NavPaginas/>
    <h1>React-Router</h1>
    <Outlet/>
    <h3>footer</h3>
    </>
  )
}

export default App
