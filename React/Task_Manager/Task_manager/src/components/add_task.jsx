import React, { useState } from 'react';

// Component 1: Add New Task
function Add_Task(props) {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('Personal');

  function handleAddTask() {
    if (taskTitle.trim()) {
      props.onAddTask({
        id: Date.now(),
        title: taskTitle,
        category: category,
        completed: false,
        createdAt: new Date()
      });
      setTaskTitle('');
    }
  }

  return (
    <div className="bg-white-50 p-6 rounded-lg border border-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Task</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter task title..."
          value={taskTitle}
          onChange={function (e) { setTaskTitle(e.target.value); }}
           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
        />
        <select
          value={category}
          onChange={function (e) { setCategory(e.target.value); }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent bg-white"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
        <button onClick={handleAddTask}
        className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}
export default Add_Task;