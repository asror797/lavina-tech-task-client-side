import './delete.scss'

const Delete = ({setDelModal , delModal , ISBN}) => {



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
            console.log(data)
         })
         .catch(err => {
            console.log(err)
         })
   }

   const CancelHandler = () => {
      setDelModal(!delModal)
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