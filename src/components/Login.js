import {useState} from "react";
import { useSelector } from "react-redux";
const Login = () => {
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const user = useSelector(state=>state.user.user);
        const authorized = (e) => {
            e.preventDefault();
            if(email.toLowerCase() === user.email && password === user.password){
                localStorage.setItem("isAuth","Dev");
                window.location.replace("/");
            }else{
                alert("Invalid Credentials");
            }
        }
        return (
            <div className="login">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" onClick={authorized}>Login</button>
                </form>
            </div>
        )
}
export default Login;
