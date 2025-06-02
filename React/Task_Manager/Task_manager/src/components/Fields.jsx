import { useState } from "react";
import All from "./All";
import Pending from "./Pending"
import Completed from "./Completed";
import Work from "./Work";
import Personal from "./Peronal";

function Fields() {
  const [page, setpage] = useState("All");

  function changeComponent(value) {
    setpage(value);
  }

  let CurrentComponent;
  switch (page) {
    case "All":
      CurrentComponent = <All />;
      break;
    case "Pending":
      CurrentComponent = <Pending />;
      break;
    case "Completed":
      CurrentComponent = <Completed />;
      break;
    case "Work":
      CurrentComponent = <Work />;
      break;
    case "Personal":
      CurrentComponent = <Personal />;
      break;
    default:
      CurrentComponent = <All />;
  }

  return (
    <div className="container">
      <ul>
        <li>
          <button value="All" onClick={(e) => changeComponent(e.target.value)}>All</button>
        </li>
        <li>
          <button value="Pending" onClick={(e) => changeComponent(e.target.value)}>Pending</button>
        </li>
        <li>
          <button value="Completed" onClick={(e) => changeComponent(e.target.value)}>Completed</button>
        </li>
        <li>
          <button value="Work" onClick={(e) => changeComponent(e.target.value)}>Work</button>
        </li>
        <li>
          <button value="Personal" onClick={(e) => changeComponent(e.target.value)}>Personal</button>
        </li>
      </ul>
      <div>{CurrentComponent}</div>
    </div>
  );
}

export default Fields;
