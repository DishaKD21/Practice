import { useState } from "react";
import All from "./All";
import Pending from "./Pending";
import Completed from "./Completed";
import Work from "./Work";
import Personal from "./Peronal";

function Fields({ tasks }) {
  const [page, setpage] = useState("All");

  let CurrentComponent;
  switch (page) {
    case "All":
      CurrentComponent = <All tasks={tasks} />;
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
      CurrentComponent = <All tasks={tasks} />;
  }

  return (
    <div className="container">
      <ul>
        <li><button onClick={() => setpage("All")}>All</button></li>
        <li><button onClick={() => setpage("Pending")}>Pending</button></li>
        <li><button onClick={() => setpage("Completed")}>Completed</button></li>
        <li><button onClick={() => setpage("Work")}>Work</button></li>
        <li><button onClick={() => setpage("Personal")}>Personal</button></li>
      </ul>
      <div>{CurrentComponent}</div>
    </div>
  );
}

export default Fields;
