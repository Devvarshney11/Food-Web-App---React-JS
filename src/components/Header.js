import { useState, useContext } from "react";
import { LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
  <a>
    <img className="logo" src={LOGO_URL} />
  </a>
);
const Header = () => {

  const [islogged, setIsLogged] = useState(localStorage.getItem("isAuth"));
  const {user} = useContext(UserContext);
  const cart = useSelector(store => store.cart.items);
  return (
    <div className="flex items-center justify-between bg-black">
      <Title />
      <div className="nav-items">
        <ul className="list-none flex pr-3 text-white">
          <li className="p-3">
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link className="text-white" to="/about">
              About
            </Link>
          </li>
          <li className="p-3">
            <Link className="text-white" to="/contact">
              Contact
            </Link>
          </li>
          <li className="p-3">
            <Link className="text-white" to="/mart">
              Mart
            </Link>
          </li>
          <li className="p-3">
            <Link className="text-white" to="/cart">
              Cart-{cart.length}items
            </Link>
          </li>
        </ul>
      </div>
      {islogged === "Dev" ? (
        <div className="flex w-1/5">
          <div className="text-white">
            <h3>Welcome {user.name}</h3>
          </div>
          <button
            className="bg-black p-3 m-3 inline text-white border border-gray-50 w-28 rounded-md"
            onClick={() => {
              localStorage.removeItem("isAuth");
              localStorage.setItem("isAuth", "temp");
              setIsLogged(localStorage.getItem("isAuth"));
              window.location.replace("/login");
            }}
          >
            Log Out
          </button>
        </div>
      ):(
        <div className="w-1/5 flex justify-end">
          <button
          className="bg-black p-3 m-3 inline-block text-white border border-gray-50 w-28 rounded-md"
          onClick={() => {
            window.location.replace("/login");
          }}
        >
          Login
        </button>
        </div>
      )}
    </div>
  );
};
export default Header;
