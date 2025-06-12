import './App.css';
import UseEffect from './components/Useeffect';
import LoggerComponent from './components/LoggerComponent'
import UseContext from './components/UseContext'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
const router = createBrowserRouter(
  [
    {
     path: "/",
     element : <div><Navbar/><Home/></div>
    },
    
    {
     path: "/about",
     element :  <div><Navbar/><About/></div>
    },

    {
     path: "/dashboard",
     element : <div><Navbar/><Dashboard/></div>
    }
  ]
);
function App() {
  return (
    <>
    <UseEffect></UseEffect>
    <LoggerComponent></LoggerComponent>
    <UseContext></UseContext>
    < RouterProvider router={router} />
 
    </>
  )
}
export default App;
