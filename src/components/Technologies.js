import React from 'react'
import images from './images'

function Technologies() {
  return (
    <div>
        <div className='gallery'>
                {images.map((item)=>(
                    <div className='gallery-item'>
                        <img className='gallery-img' src={item} alt='logo-technologies'/>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Technologies