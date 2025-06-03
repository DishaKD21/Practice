import { useState } from 'react'
import './App.css'
import Add_Task from './components/add_task';
import Fields from './components/Fields';
import Yourtask from './components/Yourtask';

function App() {
  const [tasks, setTasks] = useState([]);

  const new_task = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <>
      <h1>Simple Task Manager</h1>
      <Add_Task onAddTask={new_task} />
      <Fields tasks={tasks} />
      <Yourtask />
    </>
  )
}

export default App;
