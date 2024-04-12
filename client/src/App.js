import {useState } from "react"
//import './App.css';
import Home from "./pages/home"



function App() {
  const [page, setPage] = useState()
  return (
      page || <Home setPage={setPage}/>
  );
}

export default App;
