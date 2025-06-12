import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import ChildA from "./ChildA";
//step1: create context
const UserContext = createContext();
//step2: wrap all the child inside the provider
//step:3 pass value
//step:4 consumer k andr jake consume krlo
function UseContext(){
    const [user,setUser] = useState({name:"Disha"})
   return(
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
    </>
   );
}
export default UseContext;
export {UserContext};