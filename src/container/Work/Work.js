import React from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
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
          imgUrl: images.agency,
          title: "Agency",
          description: "Converted XD file into HTML.",
          ProjectLink: "https://heroagency.netlify.app/",
          codeLink: "https://github.com/ritik7905/firstWeb",
        },
        {
          imgUrl: images.auth_crud,
          title: "AUTH & CRUD",
          description: "Here, User can create and login accouunt and create blogs..",
          ProjectLink: "https://ononeclick-85d25.web.app/login",
          codeLink: "https://github.com/ritik7905/onOneClick",
        },
        {
          imgUrl: images.toddler,
          title: "Kids Toddler",
          description: "This is made for childrens, where childrens can learn alphabets & Counting..",
          ProjectLink: "https://kidstoddler.netlify.app",
          codeLink: "https://github.com/ritik7905/kids_toddler"
        },
        {
          imgUrl: images.calculator,
          title: "Tip Calculator",
          description: "This is being made for restaurants in order to give tips for waiters.",
          ProjectLink: "https://ritik7905.github.io/tip_calculator/",
          codeLink: "https://github.com/ritik7905/tip_calculator/tree/master"
        },
        {
          imgUrl: images.CRUD,
          title: "Employee CRUD",
          description: "Application to add new emloyees and delete existing employees.",
          ProjectLink: "https://ritik7905.github.io/Employee_crud/",
          codeLink: "https://github.com/ritik7905/Employee_crud"
        },
        {
          imgUrl: images.study_center ,
          title: "Study Center",
          description: "Made for students to study.",
          ProjectLink: "https://study-center-kappa.vercel.app/",
          codeLink: "https://github.com/ritik7905/study_center"
        },

      ],
      React_Js: [
        {
          imgUrl: images.agency,
          title: "Agency",
          description: "Converted XD file into HTML.",
          ProjectLink: "https://heroagency.netlify.app/",
          codeLink: "https://github.com/ritik7905/firstWeb",
        },
        {
          imgUrl: images.auth_crud,
          title: "AUTH & CRUD",
          description: "Here, User can create and login accouunt and create blogs..",
          ProjectLink: "https://ononeclick-85d25.web.app/login",
          codeLink: "https://github.com/ritik7905/onOneClick",
        },

      ],
      JavaScript: [
        {
          imgUrl: images.toddler,
          title: "Kids Toddler",
          description: "This is made for childrens, where childrens can learn alphabets & Counting..",
          ProjectLink: "https://kidstoddler.netlify.app",
          codeLink: "https://github.com/ritik7905/kids_toddler"
        },
        {
          imgUrl: images.calculator,
          title: "Tip Calculator",
          description: "This is being made for restaurants in order to give tips for waiters.",
          ProjectLink: "https://ritik7905.github.io/tip_calculator/",
          codeLink: "https://github.com/ritik7905/tip_calculator/tree/master"
        },
        {
          imgUrl: images.CRUD,
          title: "Employee CRUD",
          description: "Application to add new emloyees and delete existing employees.",
          ProjectLink: "https://ritik7905.github.io/Employee_crud/",
          codeLink: "https://github.com/ritik7905/Employee_crud"
        },
        {
          imgUrl: images.study_center ,
          title: "Study Center",
          description: "Made for students to study.",
          ProjectLink: "https://study-center-kappa.vercel.app/",
          codeLink: "https://github.com/ritik7905/study_center"
        },

      ],
    }
  ]
  console.log(work[0].ALL);
  return (
    <div id='work'>
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
      </Tabs>
    </div>
  )
}

export default Work




