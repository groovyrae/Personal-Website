import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import HowTo from "./components/HowTo"
import PastRecipes from "./components/PastRecipes"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/past-recipes" element={<PastRecipes />} />
      </Routes>
    </>
  )
}

export default App
