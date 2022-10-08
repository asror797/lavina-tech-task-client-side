
import { useEffect, useState } from 'react'
import './edit.scss'
import { toast } from 'react-toastify'

const Edit = ({setEditModal , editModal , bookid , shelfBooks , setBooktoShelf}) => {


   const [status , setStatus ] = useState('')
   const [editBook , setBook ] = useState({})

   const CancelHandler = () => {
      setEditModal(!editModal)
   }

   const StatusHandler = e => {
      setStatus(e.target.value)
   }

   useEffect(() => {
      fetch(`http://localhost:9000/book/${bookid}`)
         .then(res => res.json())
         .then(data => {
            setBook(data)
         })
         .catch(err => {
            console.log(err)
         })
   })

   const UpdateHandler = () => {
      fetch('http://localhost:9000/update',{
         method:"PUT",
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            id:bookid,
            status:status
         })
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.id) {
               for (let i = 0; i < data.length; i++) {
                  if(data[i].id == bookid) {
                     return shelfBooks[i].status = data[i].status
                  }
                  setBooktoShelf(shelfBooks)
               }

               setEditModal(false)
               toast.dark('Updated')

            }
         })
         .catch(err => {
            console.log(err)
            toast.dark('Error accoured')
         })
   }


   return(
      <div className="modal">
         <div className="editmodal">
            <h1>Change Status</h1>
            <select
               defaultValue={editBook.status}
               onChange={StatusHandler}>
               <option value="0">New</option>
               <option value="1">Read</option>
               <option value="2">Finished</option>
            </select>
            <div className="editModalBtn">
               <button 
                  className='editcancelbnt' 
                  onClick={CancelHandler}>
                  Cancel
               </button>
               <button 
                  onClick={UpdateHandler}
                  className='editupdatebtn'>
                  Update
               </button>
            </div>
         </div>
      </div>
   )
}

export default Edit;