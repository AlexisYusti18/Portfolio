import photo from '../assets/photo.png'
import pdf from '../assets/docu.pdf'

export default function Home(){
  return (
    <div className="home">
      <div className='home-ctn'>
        <div>
          <h1>I'm Alexis Yusti</h1>
          <p>MERN Fullstack & Mobile Apps</p>
          <a className='btn-cv' href={pdf} download={' '}>Download CV</a>
        </div>
        <div>
          <img className="photo" src={photo} alt="Alexis"/>
        </div>
      </div>
    </div>
  )
}

