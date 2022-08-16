import photo from '../assets/descarga.png'

export default function Home(){
  return (
    <div className="home">
      <div className='home-ctn'>
        <div>
          <h1>I'm Alexis Yusti</h1>
          <p>MERN Fullstack & Mobile Apps</p>
        </div>
        <div>
          <img className="photo" src={photo}/>
        </div>
      </div>
    </div>
  )
}

