import './delete.scss'
import { toast } from "react-toastify";

const Delete = ({setDelModal , delModal , ISBN , shelfBooks , setBooktoShelf}) => {

   const deleteBook = () => {
      fetch(`http://localhost:9000/delete/${ISBN}`,{
         method:"DELETE",
         headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
         }
      })
         .then(res => res.json())
         .then(data => {
            toast.success('Deleted');
            for (let i = 0; i < shelfBooks.length; i++) {
               if(shelfBooks[i].isbn == data.isbn) {
                  shelfBooks.splice(i,1)
                  setBooktoShelf(shelfBooks)
               }
            }
            
            setDelModal(false)
         })
         .catch(err => {
            console.log(err)
         })
   }

   const CancelHandler = () => {
      setDelModal(false)
   }

   return(
      <div className="modal">
         <div className="delmodal">
            <h1>Are you sure ?</h1>
            <div className="delmodalbtns">
               <button 
                  className='delmodalcancel'
                  onClick={CancelHandler}>
                  Cancel
               </button>
               <button 
                  className='delmodalbtn'
                  onClick={deleteBook}>
                  Delete
               </button>
            </div>
         </div>
      </div>
   )
}

export default Delete