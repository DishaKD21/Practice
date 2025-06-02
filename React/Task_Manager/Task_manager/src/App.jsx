import { useState } from 'react'
import './App.css'
import Add_Task from './components/add_task';
import Fields from './components/Fields';
function App() {
 
  return (
   <>
   <h1>Simple Task Manager</h1>
    <Add_Task></Add_Task>
    <Fields></Fields>
   </>
  )
}

export default App;
