import React from 'react'
import data from './data'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects(){
  return (
    <div className='Projects-ctn'>
        <div className='card-ctn'>
            {data.map((item,index)=>(
                <div className='card' key={index}>
                    <div className='img-ctn'>
                        <img className='logos' src={item.image} alt='logo'/>
                    </div>
                    <div className='content'>
                            <div className='content-up'>
                                <div className='text-ctn'>
                                    <h2 className='card-name'>{item.name}</h2>
                                </div>
                                <p className='card-description'>{item.description}</p>
                            </div>
                            <div className='card-medium'>
                                <img className='image-large' src={item.image2} alt="web"/>
                            </div>
                            <div className='content-botton'>
                                <a className="btn-card" href={item.github}><GitHubIcon/></a>
                                <a className="btn-card" href={item.page}><LanguageIcon/></a>
                            </div>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}
export default Projects