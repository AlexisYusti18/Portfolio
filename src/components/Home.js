import photo from '../assets/photo.png'
import pdf from '../assets/docu.pdf'
import logoLinkedin from '../assets/logoLinkedin.png'

export default function Home(){
  return (
    <div className="home">
      <div className='home-ctn'>
        <div className='about-ctn'>
          <h1>I'm Alexis Yusti</h1>
          <p>MERN Fullstack & Mobile Apps</p>
          <a className='btn-cv' href={pdf} download={' '}>Download CV</a>
          <a href="https://www.linkedin.com/in/alexisyusti" className='linkedin-btn'>
            Linkedin
          </a>
        </div>
        <div>
          <img className="photo" src={photo} alt="Alexis"/>
        </div>
      </div>
    </div>
  )
}

