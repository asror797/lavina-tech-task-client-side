import { useState } from "react"
import Header from "./components/header/Header"
import NewBook from "./components/newbook/NewBook"
import Shelf from "./components/shelf/Shelf"
import {  ToastContainer } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style";

function App() {

  const [isOpen , setModal ]= useState(false)
  const [shelfBooks , setBooktoShelf] = useState([])
  if (typeof window !== "undefined") {
    injectStyle();
  }

  return (
    <>
      <div className="container">
        <Header shelfBooks = {shelfBooks} setBooktoShelf={setBooktoShelf} setModal = {setModal} isOpen = {isOpen}/>
        <Shelf shelfBooks = {shelfBooks} setBooktoShelf = {setBooktoShelf}/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        { isOpen ? <NewBook shelfBooks={shelfBooks} setBooktoShelf={setBooktoShelf}  setModal = {setModal} isOpen={isOpen}/> : null}
      </div>
    </>
  )
}

export default App
