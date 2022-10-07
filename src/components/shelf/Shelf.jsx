
import { useEffect, useState } from 'react'
import './shelf.scss'

const Shelf = () => {

   const [books , setBooks] = useState([])

   const statusChecker = (status) => {
      if(status == 1)
         return "Reading"
      if(status == 2) 
         return "Finished"
      if(status == 0) 
         return "New"
   }
   useEffect(()=> {
      fetch('http://localhost:9000/books')
         .then(res => res.json())
         .then(data => {
            setBooks(data)
         })
         .catch(err => {
            console.log(err)
         })
   })
   
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
               {books.map((book,index) => {
                  return(
                     <tr>
                        <td>{index+1}</td>
                        <td><a href="#">#{book.isbn}</a></td>
                        <td>{book.title}</td>
                        <td>{book.number_of_pages}</td>
                        <td>{book.publish_date}</td>
                        <td>{statusChecker(book.status)}</td>
                        <td>
                           <button className='editbtn'>Edit</button>
                           <button className='delbtn'>Delete</button>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </div>
   )
}

export default Shelf