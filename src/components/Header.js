import { useState } from "react";
import { LOGO_URL } from "../config";
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {islogged?<button className="log-btn" onClick={()=> setIsLogged(false)}>Login</button>: 
        <button className="log-btn" onClick={()=> setIsLogged(true)}>Log Out</button>}
    </div> 
}
export default Header;