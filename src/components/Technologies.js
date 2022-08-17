import React from 'react'
import images from './images'

function Technologies() {
  return (
    <div className='ctn-tec'>
    <span className='tect-title'>Technologies and Tools</span>
      <div className='grid-container'>
        {images.map((item,index)=>(
          <div className='img-grid-ctn' key={index}>
            <img className='grid-item' src={item} alt="technologies"/>
          </div>
                ))}
      </div>
    </div>
  )
}

export default Technologies