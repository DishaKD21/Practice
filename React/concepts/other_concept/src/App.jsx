import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import State_lifting from './components/State_lifting'
function App() {
  const [count, setCount] = useState(0)
 function handleClick(){
  setCount(count+1);
 }
 const [name,setName] = useState('');
  return (
    <div>
      <Card name="disha">
        <h1  className="bg-amber-300" >mmy full name is disha vadoliya</h1>
        <p>my age is 19</p>
      </Card>
     <Button handleClick={handleClick} name="click me" c={count}>    
     </Button>
     <State_lifting name={name} setName={setName}/>
     <p>this is chnages happening in child the value which we can access in perent too :{name}</p>
    </div>
  )
}

export default App
