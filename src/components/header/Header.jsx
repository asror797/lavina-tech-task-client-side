import './header.scss'

const Header = ({isOpen , setModal}) => {


   const ClickHandler = ()=> {
      setModal(!isOpen)
   }
   return(
      <div className='header'>
         <h1>Book Shelf</h1>
         <button
            onClick={ClickHandler}>Add Book</button>
      </div>
   )
}

export default Header;