import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "../pages/index/Index"
import Dashboard from "../pages/dashboard/Dashboard"
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastro/cadastro"
import Confirmar from "../pages/confirmar/confirmar"
import Passo1 from "../pages/criarEvento/passo1"
import Passo2 from "../pages/criarEvento/passo2"
import Passo3 from "../pages/criarEvento/passo3"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index/>}
        />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
        <Route
          path="/dashboard/adicionar/passo1"
          element={<Passo1/>}
        />
        <Route
          path="/dashboard/adicionar/passo2"
          element={<Passo2/>}
        />
        <Route
          path="/dashboard/adicionar/passo3"
          element={<Passo3/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/login/cadastrar"
          element={<Cadastro/>}
        />
         <Route
          path="/login/cadastrar/confirmar"
          element={<Confirmar/>}
        />
        <Route
          path="*"
          element={<h1>444 <br /> Page not found</h1>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
