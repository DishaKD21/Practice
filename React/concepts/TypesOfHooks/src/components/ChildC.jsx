import { useContext } from "react";
import { UserContext } from "./UseContext";

function ChildC() {
  const user = useContext(UserContext); 

  return (
    <>
      <p>hi</p>
      <div>{user.name}</div>
    </>
  );
}

export default ChildC;
