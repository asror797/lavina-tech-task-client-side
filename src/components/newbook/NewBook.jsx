import './newbook.scss'

const NewBook = () => {
   return(
      <div className="modal">
         <div className="modal-newBook">
            <h1>Add new book</h1>
            <div className="form">
               <input required type="text" placeholder='ISBN id' />
               <button>Add</button>
            </div>
         </div>
      </div>
   )
}


export default NewBook;