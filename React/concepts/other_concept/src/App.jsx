import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)
 function handleClick(){
  setCount(count+1);
 }
  return (
    <div>
      <Card name="disha">
        <h1  className="bg-amber-300" >mmy full name is disha vadoliya</h1>
        <p>my age is 19</p>
      </Card>
     <Button handleClick={handleClick} name="click me" c={count}>
    
     </Button>

    </div>
  )
}

export default App
