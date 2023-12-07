import { useState } from "react";
import { useSelector } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.user);
  const authorized = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === user.email && password === user.password) {
      localStorage.setItem("isAuth", "Dev");
      window.location.replace("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="flex flex-col w-72 mx-auto bg-gray-500 shadow-md shadow-black mt-28">
      <h1 className="text-center text-xl m-4">Login</h1> 
      <form>
        <div className="flex flex-col mx-auto bg-gray-400 items-center">
          <input
            className="py-2 px-4 m-2 rounded-xl focus:outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="py-2 px-4 m-2 rounded-xl focus:outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={authorized}
            className="bg-black p-3 m-3 inline text-white border border-gray-50 w-28 rounded-md"
            >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
