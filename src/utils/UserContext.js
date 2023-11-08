import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dev Varshney",
        email:"devvarshney11@gmai.com",
        phone:"9368015704",
        address:"Bahjoi, Uttar Pradesh, India"
    },
});
export default UserContext;