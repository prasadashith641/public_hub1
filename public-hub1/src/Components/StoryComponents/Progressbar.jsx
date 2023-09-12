import React, { useEffect, useState } from 'react'
import "./Progressbar.css"

const Progressbar = ({index,activeIndex,duration}) => {
    const [progress,setProgess]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
        setProgess((prevProgress)=>{
            if(prevProgress<100){
                return prevProgress+1;
            }
            clearInterval(interval)
            return prevProgress;
        })
    },duration/100);
     
    return ()=>{
        clearInterval(interval)
    }
      },[duration,activeIndex])


      useEffect(()=>{
        setProgess(0);
         },[activeIndex])





    const isActive = index === activeIndex;
  return (
    <div className={` progress-bar-container ${isActive? "active":""}`}>
        <div  
        className={`${isActive? "progress-bar":""}`}
         style={{width:`${progress}%`}}>

        </div>
    </div>
  )
}

export default Progressbar