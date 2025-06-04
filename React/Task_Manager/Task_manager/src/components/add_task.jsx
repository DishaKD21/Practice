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
    <div>
      <h2 className='text-red-500'>Add New Task</h2>
      <div>
        <input
          type="text"
          placeholder="Enter task title..."
          value={taskTitle}
          onChange={function (e) { setTaskTitle(e.target.value); }}
        />
        <select
          value={category}
          onChange={function (e) { setCategory(e.target.value); }}
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
        <button onClick={handleAddTask}>
          + Add Task
        </button>
      </div>
    </div>
  );
}
export default Add_Task;