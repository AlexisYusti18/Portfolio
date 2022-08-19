import React, { useState, useEffect } from "react";
import images from './images'

function Technologies() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(false);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return (
    <div className='ctn-tec'>
      {loading?
      <span className='tect-title'>Technologies and Tools</span>
      :
      <div className='grid-container'>
        {images.map((item,index)=>(
          <div className='img-grid-ctn' key={index}>
            <img className='grid-item' src={item} alt="technologies"/>
          </div>
                ))}
      </div>
      }
    </div>
  )
}

export default Technologies