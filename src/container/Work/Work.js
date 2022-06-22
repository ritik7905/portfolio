import React, { useState } from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { AppWrap } from "../../wrapper"
// styles
import "./style.scss"
import { images } from '../../constants'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Work = () => {
  const work = [
    {
      ALL: [
        {
          imgUrl: images.about01,
          title: "Frontend Development",
          description: "I am a good developer.",
          ProjectLink: "",
          codeLink: "",
          tags: ["Agency Website",]
        },
        {
          imgUrl: images.about02,
          title: "Web Designer",
          description: "I am a good designer.",
          ProjectLink: "",
          codeLink: ""
        },
        {
          imgUrl: images.about03,
          title: "UI/UX",
          description: "I am a good in UI/UX.",
          ProjectLink: "",
          codeLink: ""
        },
        {
          imgUrl: images.about04,
          title: "Web Animation",
          description: "I am a good in web-animation.",
          ProjectLink: "",
          codeLink: ""
        },
      ],
      React_Js: [
        {
          imgUrl: images.about03,
          title: "UI/UX",
          description: "I am a good in UI/UX.",
          ProjectLink: "",
          codeLink: ""
        },
        {
          imgUrl: images.about04,
          title: "Web Animation",
          description: "I am a good in web-animation.",
          ProjectLink: "",
          codeLink: ""
        },

      ],
      JavaScript: [
        {
          imgUrl: images.about03,
          title: "UI/UX",
          description: "I am a good in UI/UX.",
          ProjectLink: "",
          codeLink: ""
        },
        {
          imgUrl: images.about04,
          title: "Web Animation",
          description: "I am a good in web-animation.",
          ProjectLink: "",
          codeLink: ""
        },

      ],
      HTML_CSS: [
        {
          imgUrl: images.about03,
          title: "UI/UX",
          description: "I am a good in UI/UX.",
          ProjectLink: "",
          codeLink: ""
        },
        {
          imgUrl: images.about04,
          title: "Web Animation",
          description: "I am a good in web-animation.",
          ProjectLink: "",
          codeLink: ""
        },
      ],
    }
  ]
  console.log(work[0].ALL);
  const [activeFiilter, setActiveFilter] = useState("All")
  return (
    <>
      <h2 className='head-text'> My Creative<span> Portfolio</span> Section</h2>
      <Tabs defaultActiveKey="1" centered className='app__portfolio-filters'>
        <TabPane tab="All" key="1">
          <div className="app__work-portfolio">
            {work[0].ALL.map((works, index) => {
              return (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                    <img src={works.imgUrl} alt="Work__image.." />
                    <div className="app__work-overlay">
                      <div className="app__work-links app__flex">
                        <a href={works.ProjectLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillEye />
                          </div>
                        </a>
                        <a href={works.codeLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillGithub />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="app__work-content app__flex">
                    <h4 className='bold-text text'>{works.title}</h4>
                    <p className="p-text text">{works.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </TabPane>
        <TabPane tab="React JS" key="2">
          <div className="app__work-portfolio">
            {work[0].React_Js.map((works, index) => {
              return (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                    <img src={works.imgUrl} alt="Work__image.." />
                    <div className="app__work-overlay">
                      <div className="app__work-links app__flex">
                        <a href={works.ProjectLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillEye />
                          </div>
                        </a>
                        <a href={works.codeLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillGithub />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="app__work-content app__flex">
                    <h4 className='bold-text text'>{works.title}</h4>
                    <p className="p-text text">{works.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </TabPane>
        <TabPane tab="Javascript" key="3">
          <div className="app__work-portfolio">
            {work[0].JavaScript.map((works, index) => {
              return (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                    <img src={works.imgUrl} alt="Work__image.." />
                    <div className="app__work-overlay">
                      <div className="app__work-links app__flex">
                        <a href={works.ProjectLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillEye />
                          </div>
                        </a>
                        <a href={works.codeLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillGithub />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="app__work-content app__flex">
                    <h4 className='bold-text text'>{works.title}</h4>
                    <p className="p-text text">{works.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </TabPane>
        <TabPane tab="HTML/CSS" key="5">
          <div className="app__work-portfolio">
            {work[0].HTML_CSS.map((works, index) => {
              return (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                    <img src={works.imgUrl} alt="Work__image.." />
                    <div className="app__work-overlay">
                      <div className="app__work-links app__flex">
                        <a href={works.ProjectLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillEye />
                          </div>
                        </a>
                        <a href={works.codeLink} target="_blank" rel="noreferrer">
                          <div className="app__work-hover app__flex">
                            <AiFillGithub />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="app__work-content app__flex">
                    <h4 className='bold-text text'>{works.title}</h4>
                    <p className="p-text text">{works.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </TabPane>
      </Tabs>
    </>
  )
}

export default AppWrap(Work, 'work')




