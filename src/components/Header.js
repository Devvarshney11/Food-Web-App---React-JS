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
    return <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li><Link className = "links" to = "/">Home</Link></li>
                <li><Link className = "links" to = "/about">About</Link></li>
                <li><Link className = "links" to = "/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
        </div>
        {islogged?<button className="log-btn" onClick={()=> setIsLogged(false)}>Login</button>: 
        <button className="log-btn" onClick={()=> setIsLogged(true)}>Log Out</button>}
    </div> 
}
export default Header;