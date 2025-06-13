import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import '../css/UseRef.css';
import { useRef } from 'react';
import '../css/UseGSAP.css';
function UseRef(){

const gsapRef = useRef();
 useGSAP(()=>{
    gsap.to(gsapRef.current,{
        x:0,
        y:-100,
        duration:2,
        delay:1,
        rotate:720
    });
 });

  
    return(
    <main>
    <div className="box2" ref={gsapRef}>
    </div>
    </main>
    );
}
export default UseRef;