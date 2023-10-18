import { LOGO_URL } from "../config";
const Title = () => (
    <a>
        <img className="logo" src={LOGO_URL}/>
    </a>
)
const Header = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
export default Header;