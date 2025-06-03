import { useState } from "react";

function Add_Task({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Personal");

  const adding_Task = () => {
    if (inputValue.trim()) {
      onAddTask({
        title: inputValue,
        category: selectedCategory,
        completed: false
      });
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h2>Add New Task</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
      </select>
      <br />
      <button onClick={adding_Task}>+ Add Task</button>
    </div>
  );
}

export default Add_Task;
