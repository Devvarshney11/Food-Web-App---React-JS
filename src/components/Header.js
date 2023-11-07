import { useState } from "react";
import { LOGO_URL } from "../config";
import { Link } from "react-router-dom";
const Title = () => (
    <a>
        <img className="logo" src={LOGO_URL}/>
    </a>
)
const Header = () => {
    const [islogged,setIsLogged] = useState(false);
    return <div className="flex items-center justify-between bg-black">
        <Title />
        <div className="nav-items">
            <ul className="list-none flex pr-3 text-white">
                <li className="p-3"><Link className = "text-white" to = "/">Home</Link></li>
                <li className="p-3"><Link className = "text-white" to = "/about">About</Link></li>
                <li className="p-3"><Link className = "text-white" to = "/contact">Contact</Link></li>
                <li className="p-3">Cart</li>
            </ul>
        </div>
        {islogged?<button className="bg-black p-3 m-3 inline-block text-white border border-gray-50 w-28 rounded-md" onClick={()=> setIsLogged(false)}>Login</button>: 
        <button className="bg-black p-3 m-3 inline text-white border border-gray-50 w-28 rounded-md" onClick={()=> setIsLogged(true)}>Log Out</button>}
    </div> 
}
export default Header;