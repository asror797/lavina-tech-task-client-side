import { useState } from 'react'
import './newbook.scss'

const NewBook = () => {


   const [ISBN , setISBN ] = useState()

   const addNewBook = async() => {
      try {
         let response = await fetch(`http://localhost:9000/add/${ISBN}`)

         response = await response.json()

         console.log(response)

      } catch (error) {
         console.log(response)
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
                  placeholder='ISBN id' />
               <button
                  onClick={addNewBook}>
                  Add
               </button>
            </div>
         </div>
      </div>
   )
}


export default NewBook;