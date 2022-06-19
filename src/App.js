import React from 'react'
// styles
import "./styles/App.scss";

// Pages
import { About, Header, Footer, Testimonial, Work, Skills } from "./container"
import { Navbar } from "./components"


const App = () => {
  return (
    <div className='main-app-container'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App