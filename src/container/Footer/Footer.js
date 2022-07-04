import React from 'react'
import { useState } from 'react'
import { images } from '../../constants'
// styles
import "./style.scss"

const Footer = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    msg: ""
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const changeHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
  }
  return (
    <div className='app__footer' id='contacts'>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email..." />
          <a href="mailto:ritik.trilok7905@gmail.com" className='p-text'>ritik.trilok7905@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile..." />
          <a href="tel:(+91) 9599567905" className='p-text'>(+91) 9599567905</a>
        </div>
      </div>
      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className='p-text' placeholder='Your Name' name='name' value={input.name} onChange={changeHandler} />
          </div>
          <div className="app__flex">
            <input type="text" className='p-text' placeholder='Your Email' name="email" value={input.email} onChange={changeHandler} />
          </div>

          <div className='app__flex'>
            <textarea value={input.msg} className='p-text' name="msg" placeholder='Your Message....' cols="30" rows="10" onChange={changeHandler} ></textarea>
          </div>

          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>

        </div>
        : <div className='p-text'>Thank you</div>}

    </div>
  )
}

export default Footer