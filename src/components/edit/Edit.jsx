
const Edit = ({setEditModal , editModal}) => {

   const CancelHandler = () => {
      setEditModal(!editModal)
   }


   return(
      <div className="modal">
         <div className="editmodal">
            <h1>Change Status</h1>
            select option
            <div className="editModalBtn">
               <button onClick={CancelHandler}>Cancel</button>
               <button>Update</button>
            </div>
         </div>
      </div>
   )
}

export default Edit;