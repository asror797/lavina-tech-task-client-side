import { useState } from "react"
import Header from "./components/header/Header"
import NewBook from "./components/newbook/NewBook"
import Shelf from "./components/shelf/Shelf"

function App() {

  const [isOpen , setModal ]= useState(false)

  return (
    <>
      <div className="container">
        <Header setModal = {setModal} isOpen = {isOpen}/>
        <Shelf/>
        { isOpen ? <NewBook setModal = {setModal} isOpen={isOpen}/> : null}
      </div>
    </>
  )
}

export default App
