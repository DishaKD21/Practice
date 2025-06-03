import { useState } from 'react'
import Add_Task from './components/add_task';
import Fields from './components/Fields';
import Yourtask from './components/Yourtask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  function addTask(newTask) {
    setTasks(function (prevTasks) {
      return [...prevTasks, newTask];
    });
  }

  function toggleTask(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.map(function (task) {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  function deleteTask(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.filter(function (task) {
        return task.id !== taskId;
      });
    });
  }

  function getFilteredTasks() {
    switch (activeFilter) {
      case 'pending':
        return tasks.filter(function (task) { return !task.completed; });
      case 'completed':
        return tasks.filter(function (task) { return task.completed; });
      case 'work':
        return tasks.filter(function (task) { return task.category === 'Work'; });
      case 'personal':
        return tasks.filter(function (task) { return task.category === 'Personal'; });
      default:
        return tasks;
    }
  }

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <h1>Simple Task Manager</h1>
      <Add_Task onAddTask={addTask} />
      <Fields
        tasks={tasks}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <Yourtask
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}
export default App;