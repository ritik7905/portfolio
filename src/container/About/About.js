import React from 'react'

import { motion } from 'framer-motion'
import { images } from "../../constants"
// styles
import "./style.scss"
import { AppWrap } from '../../wrapper'

const About = () => {
  const abouts = [
    {
      imgUrl: images.about01,
      title: "Frontend Development",
      description: "I am a good developer."
    },
    {
      imgUrl: images.about02,
      title: "Web Designer",
      description: "I am a good designer."
    },
    {
      imgUrl: images.about03,
      title: "UI/UX",
      description: "I am a good in UI/UX."
    },
    {
      imgUrl: images.about04,
      title: "Web Animation",
      description: "I am a good in web-animation."
    },

  ]

  return (
    <div>
      <h2 className='head-text'>
        I know that
        <span> Good Development</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          )
        })}

      </div>
    </div>
  )
}

export default AppWrap(About, 'about')