'use client';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
function InfScroll(){
    useEffect(()=>{
       const lenis = new Lenis({
       smoothWheel:true,
       infinite:true,
       orientation:'horizontal' ,
       gestureOrientation:'both',
    });
    function raf(time:number){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}); 
    return(
    <div>
        <h1 className="fixed flex justify-center w-[100%] h-[100%] top-[100%]">HORIZONTAL INFINITE SCROLLING</h1>
        <div className="w-min">
            <div className="wrap">
             <img src="../midas-hofstra-P3nbeMnXkrM-unsplash.jpg" className=" transition-transform duration-300 hover:scale-110 h-full bg-over bg-[50% 50%] rounded-[2rem]"/>
              <img src="../mj-tangonan-OE6qLhRHhhs-unsplash.jpg" className="transition-transform duration-300 hover:scale-110 h-full bg-over bg-[50% 50%] rounded-[2rem]"/>
               <img src="../midas-hofstra-P3nbeMnXkrM-unsplash.jpg" className="transition-transform duration-300 hover:scale-110 h-full bg-over bg-[50% 50%] rounded-[2rem]"/>
                <img src="../mj-tangonan-OE6qLhRHhhs-unsplash.jpg" className="transition-transform duration-300 hover:scale-110 h-full bg-over bg-[50% 50%] rounded-[2rem]"/>
            <img src="../midas-hofstra-P3nbeMnXkrM-unsplash.jpg" className="transition-transform duration-300 hover:scale-110 h-full bg-over bg-[50% 50%] rounded-[2rem]"/>
            </div>
        </div>
    </div>
);
}
export default InfScroll;