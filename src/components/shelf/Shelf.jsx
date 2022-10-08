
import { useEffect, useState } from 'react'
import './shelf.scss'
import Delete from '../delete/Delete'
import Edit from '../edit/Edit'

const Shelf = ({setBooktoShelf ,shelfBooks }) => {

   const [delModal , setDelModal ] = useState(false)
   const [editModal , setEditModal ] = useState(false)
   const [ISBN,setIsbn] = useState('')

   const statusChecker = (status) => {
      if(status == 1)
         return "Reading"
      if(status == 2) 
         return "Finished 🏁"
      if(status == 0) 
         return "New 🔥"
   }

   const deleteBtnHandler = e => {
      setDelModal(true)
      setIsbn(e.target.dataset.isbn)
   }
   useEffect(()=> {
      fetch('http://localhost:9000/books')
         .then(res => res.json())
         .then(data => {
            setBooktoShelf(data)
         })
         .catch(err => {
            console.log(err)
         })
   },[])
   
   return(
      <div className='shelf'>
         <table>
            <thead>
               <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Pages</th>
                  <th>Pubdlished Date</th>
                  <th>Status</th>
                  <th>Settings</th>
               </tr>
            </thead>
            <tbody>
               {shelfBooks.map((book,index) => {
                  return(
                     <tr key={index}>
                        <td>{index+1}</td>
                        <td><a target={'_blank'} className='link-isbn' href={`https://openlibrary.org/books/${book.isbn}`}>#{book.isbn}</a></td>
                        <td className='titleBook'>{book.title}</td>
                        <td>{book.number_of_pages}</td>
                        <td>{book.publish_date}</td>
                        <td>{statusChecker(book.status)}</td>
                        <td>
                           <button 
                              onClick={() => setEditModal(true)}
                              className='editbtn'>Edit</button>
                           <button 
                              data-isbn = {book.isbn}
                              onClick={deleteBtnHandler}
                              className='delbtn'>
                              Delete
                           </button>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
         { delModal ? <Delete shelfBooks = {shelfBooks} setBooktoShelf={setBooktoShelf} ISBN = {ISBN}  setDelModal = {setDelModal}  delModal = {delModal}/> : null}
         { editModal ? <Edit setEditModal = {setEditModal} editModal = {editModal}/> : null}
      </div>
   )
}

export default Shelf