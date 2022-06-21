import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from 'framer-motion'
import { AppWrap } from "../../wrapper"
// styles
import "./style.scss"
import { images } from '../../constants'

const Work = () => {

  const work = [
    {
      imgUrl: images.about01,
      title: "Frontend Development",
      description: "I am a good developer.",
      ProjectLink: ""
    },
    {
      imgUrl: images.about02,
      title: "Web Designer",
      description: "I am a good designer.",
      ProjectLink: ""
    },
    {
      imgUrl: images.about03,
      title: "UI/UX",
      description: "I am a good in UI/UX.",
      ProjectLink: ""
    },
    {
      imgUrl: images.about04,
      title: "Web Animation",
      description: "I am a good in web-animation.",
      ProjectLink: ""
    },

  ]

  console.log(work);
  const [activeFiilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const handleWorkFilter = (work) => {
    setActiveFilter(work)

  }
  return (
    <>
      <h2 className='head-text'> My Creative<span> Portfolio</span> Section</h2>
      <div className="app__work-filter app__flex">
        {['HTML/CSS', 'React JS', 'Javascript', 'Web Design', 'All'].reverse().map((work, index) => {
          return (
            <>
              <div key={index} style={{ margin: 20, cursor: "pointer" }}
                className={`app__work-filter-item app__flex p-text ${activeFiilter === work ? 'item-active' : ''}`}
                onClick={() => { handleWorkFilter(work) }}>{work}</div>
            </>
          )
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {work.map((item) => {
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={item.imgUrl} alt="Work__image.." />
              <p>{item.title}</p>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", delayChildren: 0 }}
              >
                <a href={item.ProjectLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [0, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'Work')