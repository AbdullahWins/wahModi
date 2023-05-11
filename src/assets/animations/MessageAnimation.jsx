import React from 'react'
import { sender } from '../images/getImages'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function MessageAnimation() {
    const scrollRef = useRef();

    // on element increase it's autometically scroll down
  
    useEffect(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });
    
  return (
    <div className={`message d-flex align-items-start`} ref={scrollRef}>
                <div className="user-img d-flex align-items-center justify-content-center"> 
                    <img src={sender} alt="user-image" className="img-fluid" />
                </div>
                <div className="bouncing-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
        </div>
  )
}
