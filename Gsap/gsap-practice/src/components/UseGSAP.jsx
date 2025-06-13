import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import '../css/UseGSAP.css';
function UseGSAP(){
    useGSAP(()=>{
   gsap.to(".box",{
    x:500,
    duration :2,
    delay:1
   })
  })
    return(
    <main>
    <div className="box">
    </div>
    </main>
    );
}
export default UseGSAP;