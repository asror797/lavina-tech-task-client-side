
import './edit.scss'

const Edit = ({setEditModal , editModal}) => {

   const CancelHandler = () => {
      setEditModal(!editModal)
   }


   return(
      <div className="modal">
         <div className="editmodal">
            <h1>Change Status</h1>
            <select>
               <option value="">New</option>
               <option value="">Read</option>
               <option value="">Finished</option>
            </select>
            <div className="editModalBtn">
               <button className='editcancelbnt' onClick={CancelHandler}>Cancel</button>
               <button className='editupdatebtn'>Update</button>
            </div>
         </div>
      </div>
   )
}

export default Edit;