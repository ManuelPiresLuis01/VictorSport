import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "../pages/index/Index"
import Dashboard from "../pages/dashboard/Dashboard"
import Login from "../pages/login/Login"

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
          path="/login"
          element={<Login/>}
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
