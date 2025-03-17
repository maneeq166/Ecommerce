import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


function Header() {
    const user = {_id:"sadfasd",role:''}

    const [IsOpen,setIsOpen]=useState<boolean>(false);
  
    const falseHandler = () =>{
        setIsOpen(false);
    }

    const logoutHandler = () =>{
        setIsOpen(false);
    }

  return (
    <nav className="header">
        <Link onClick={falseHandler} to={"/"} className="">
            Home
        </Link>
        <Link onClick={falseHandler} to={"/cart"}>
            <FaShoppingBag/>
        </Link>
        <Link onClick={falseHandler} to={'/search'}>
            <FaSearch/>
        </Link>
        {
            user?._id?(<>
                <button  onClick={()=>setIsOpen((prev)=>!prev)}>
                    <FaUser/>
                </button>
                <dialog className=" " open={IsOpen}>
                <div >
                    {user.role==="admin" && (
                        <Link onClick={falseHandler} to={"/admin/dashboard"}>Admin</Link>
                    )}
                    <Link onClick={falseHandler} to={'/orders'}>Orders</Link>
                    <button onClick={logoutHandler}>
                        <FaSignOutAlt/>
                    </button>
                </div>
                </dialog>
            </>):(
                <Link to={'/login'}>
                    <FaSignInAlt/>
                </Link>
            )
        }
    </nav>
  )
}

export default Header;