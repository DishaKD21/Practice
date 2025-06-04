import { useState } from 'react';
import Add_Task from './components/add_task';
import Fields from './components/Fields';
import Yourtask from './components/Yourtask';
import { Pagination } from '@mantine/core'; 
import { usePagination } from '@mantine/hooks';
import '@mantine/core/styles.css'; // Import Mantine styles first
function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const itemsPerPage = 3;

  const filteredTasks = getFilteredTasks(); 
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
  });

  function addTask(newTask) {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setActiveFilter('all');
  }

  function toggleTask(taskId) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  function getFilteredTasks() {
    switch (activeFilter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'work':
        return tasks.filter(task => task.category === 'Work');
      case 'personal':
        return tasks.filter(task => task.category === 'Personal');
      default:
        return tasks;
    }
  }

  
  const paginatedTasks = filteredTasks.slice(
    (pagination.active - 1) * itemsPerPage,
    pagination.active * itemsPerPage
  );

  return (
    <div className="max-w-2xl mx-auto pr-6 bg-white min-h-screen">
      <h1 className="font-bold text-3xl text-gray-800 text-center m-8">Simple Task Manager</h1>
     <div className="grid gap-8">
      <Add_Task onAddTask={addTask} />
      <Fields
        tasks={tasks}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <Yourtask
        tasks={paginatedTasks} 
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
      {totalPages > 1 && (
        <div className="flex justify-center mb-6">
        <Pagination
          total={totalPages}
          value={pagination.active}
          onChange={pagination.setPage}
           color="gray"
  
        />
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
