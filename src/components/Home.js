import photo from '../assets/photo.png'
import pdf from '../assets/docu.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Home(){
  return (
    <div className="home">
      <div className='home-ctn'>
        <div className='about-ctn'>
          <h1>I'm <span style={{color:'#0a66c2'}}>Alexis Yusti</span></h1>
          <p>MERNN Fullstack & Mobile Apps</p>
          <a className='btn-cv' href={pdf} download={' '}>
            Download CV <DownloadIcon/>
          </a>
          <a href="https://www.linkedin.com/in/alexisyusti" className='linkedin-btn'>
            Linked<LinkedInIcon/>
          </a>
          <a href='https://github.com/AlexisYusti18' className='github-btn'>
            GitHub <GitHubIcon/>
          </a>
        </div>
        <div>
          <img className="photo" src={photo} alt="Alexis"/>
        </div>
      </div>
    </div>
  )
}

