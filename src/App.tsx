import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Cotiza, Contact, Home, About } from "./components/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <>
      <div className="App">
        <header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotiza" element={<Cotiza />} />
        <Route path="/sobrenosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      </header>
      <ToastContainer theme="dark"/>
    </div>
    </>
  )
}

export default App
