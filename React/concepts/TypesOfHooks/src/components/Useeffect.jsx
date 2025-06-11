import React, {useState, useEffect} from "react";
function UseEffect(){
   const [count,setCount] = useState(0);
  //first -> side-effect function
  //second -> clean-up funnction
  //third -> comma separated dependency list
  //,whatever you specifies here suppose count everytime count changes whatever written in the effect it will run

 /*  useEffect(()=>{
    //first
   return ()=>{
   //second
   }
   },[//third] ) */

   //variation:1
   //runs on every render
   //    useEffect(()=>{
   //     alert("i will run on each render");
   //    })
   
   //variation:2
   //that runs on only first render
    //  useEffect(()=>{
   //     alert("i will run on only 1st render");
   //    },[])

   //variation :3
   // useEffect(()=>{
   //     alert("i will run everytime when count is updated");
   //    },[count])

   //variation:4
//      useEffect(()=>{
//     alert("i will run every time when count/total is updated")
//    },[Count, total] ) 

  //variation:5
     useEffect(()=>{
        alert("count is updated");
        return () =>{
            alert("count is unmounted from ui");
        }
       },[count])

       function handleClick(){
        setCount(count+1);
       }

    return(
        <>
        <p>count is :{count}</p>
        <button onClick={handleClick}>click Me</button>
        </>
    );
}
export default UseEffect;