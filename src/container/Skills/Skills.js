import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
// styles
import "./style.scss"


const Skills = () => {
  const Skills = [
    {
      icons: images.html,
      name: "HTML"
    },
    {
      icons: images.css,
      name: "CSS"
    },
    {
      icons: images.javascript,
      name: "JAVASCRIPT"
    },
    {
      icons: images.sass,
      name: "SASS"
    },
    {
      icons: images.react,
      name: "REACT.JS"
    },
    {
      icons: images.git,
      name: "GIT"
    },
    {
      icons: images.redux,
      name: "REDUX.JS"
    },
    {
      icons: images.api,
      name: "API"
    },

  ]
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skill-lists'>
          {
            Skills.map((skills) => {
              return (
                <>
                  <motion.div className='app__skills-item app__flex'
                    whileInView={{ opacity: [0, 0.1, 1] }}
                    transition={{ duration: 0.8 }}
                    key={skills.name}
                  >
                    <div className='app__flex app__skills-icons'>
                      <img src={skills.icons} alt="Skills_icons" />
                    </div>
                    <p className="p-text">{skills.name}</p>
                  </motion.div>
                </>
              )
            })
          }
        </motion.div>
      </div>
    </>
  )
}

export default Skills
