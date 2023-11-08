import { useState, useContext } from "react";
import { LOGO_URL } from "../config";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a>
    <img className="logo" src={LOGO_URL} />
  </a>
);
const Header = () => {

  const [islogged, setIsLogged] = useState(false);
  const {user} = useContext(UserContext);
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
        </ul>
      </div>
      {islogged ? (
        <div className="w-1/5 flex justify-end">
          <button
          className="bg-black p-3 m-3 inline-block text-white border border-gray-50 w-28 rounded-md"
          onClick={() => {
            return setIsLogged(false);
          }}
        >
          Login
        </button>
        </div>
      ) : (
        <div className="flex w-1/5">
          <div className="text-white">
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
          </div>
          <button
            className="bg-black p-3 m-3 inline text-white border border-gray-50 w-28 rounded-md"
            onClick={() => setIsLogged(true)}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
