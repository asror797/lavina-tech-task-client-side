import './edit.scss'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Edit = ({setEditModal , bookid , shelfBooks , setBooktoShelf}) => {

   const [status , setStatus ] = useState('3')
   const [editBook , setBook ] = useState({})

   useEffect(() => {
      fetch(`/book/${bookid}`)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setBook(data)
         })
         .catch(err => {
            console.log(err)
         })
   },[])
   

   const CancelHandler = () => {
      setEditModal(false)
   }

   const StatusHandler = e => {
      setStatus(parseInt(e.target.value))
   }

   const UpdateHandler = () => {
      if(status == editBook.status ||  status == '3' ) {
         setEditModal(false)
      }else {
         fetch('/update',{
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
            if(data.id) {
               for (let i = 0; i < shelfBooks.length; i++) {
                  if(shelfBooks[i].id == data.id) {
                     shelfBooks[i].status = data.status
                     setBooktoShelf(shelfBooks)
                  }
               }
               setEditModal(false)
               toast.success('Updated')
            }
         })
         .catch(err => {
            console.log(err)
            toast.warning('Error accoured')
         })
      }
   }

   
   return(
      <div className="modal">
         <div className="editmodal">
            <h1>Change Status</h1>
            <select
               onChange={StatusHandler}>
               <option selected={editBook.status == 0 ? true : false} value="0">New</option>
               <option selected={editBook.status == 1 ? true : false} value="1">Read</option>
               <option selected={editBook.status == 2 ? true : false}  value="2">Finished</option>
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