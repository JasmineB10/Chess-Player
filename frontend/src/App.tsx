import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";

function App() {

  return (
    <div className="h-screen bg-slate-950 w-full">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/> 
        <Route path="/game" element={<Game />}></Route>
      </Routes>
      </BrowserRouter>

    </div>
    
  )
}

export default App
