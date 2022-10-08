import { useState } from 'react'
import './newbook.scss'
// import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";
const NewBook = ({setModal  , shelfBooks , setBooktoShelf}) => {


   const [ISBN , setISBN ] = useState()

   const addNewBook = async() => {
      try {
         let response = await fetch(`http://localhost:9000/add/${ISBN}`)

         response = await response.json()
         setModal(false)
         if(response.isbn ) {
            toast.success("Book Added")
            setBooktoShelf([...shelfBooks , response])
         }else if (response.message == "NotFoundBook") {
            toast.error("Not Found book")
            setModal(false)
         }

      } catch (error) {
         console.log(error)
      }
   }

   const inputHandler = e => {
      setISBN(e.target.value)
   }

   const modalHandler = () => {
      console.log('Close modal ')
   }


   return(
      <div className="modal" 
         onClick={modalHandler}>
         <div className="modal-newBook">
            <h1>Add new book</h1>
            <div className="form">
               <input 
                  onChange={inputHandler}
                  required 
                  type="text" 
                  placeholder='OpenLibrary.org  Book id' />
               <a className='link' target={'_blank'} href="https://openlibrary.org/dev/docs/api/books">OpenLibrary.org book id doc.</a>
               <div className="addbtns">
                  <button
                     className='cancelBtn'
                     onClick={() => {
                        setModal(false)
                     }}>
                     Cancel
                  </button>
                  <button
                     className='deleteBtn'
                     onClick={addNewBook}>
                     Add
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}


export default NewBook;