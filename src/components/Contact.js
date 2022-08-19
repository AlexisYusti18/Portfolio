import React from 'react'

const Contact = () => {
  return (
    <div className='contact-ctn'>
      <div>
        {/* <h1 className='tect-title'>Contact</h1> */}
        <form action='https://getform.io/f/e0eb8c90-f059-49fb-ac05-b8eace2529b4' method='POST'>
          <input name='name' type='text' placeholder='Enter your name'/>
          <input name='email' type='email' placeholder='Enter your email'/>
          <textarea name='message'></textarea>
          <div className='btn-ctn'>
            <button className='btn-form'>Let's talk</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact