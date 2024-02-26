import React from "react"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"

function App() {
  return (
    <>
      {/* <h2>Olá, sou o app.jsx. E sou o componente principal que faz renderizar na tela.Todo mundo tem que passar por mim.</h2> */}
      <Header />
      <Main/>
    </>

  )
}

export default App