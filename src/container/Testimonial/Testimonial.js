import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss"

// import required modules
import { Navigation, Pagination } from "swiper";

const Testimonial = () => {
  const slideData = [
    {
      id: "1",
      image: "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665__340.jpg",
      title: "hdh"
    },
    {
      id: "2",
      image: "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665__340.jpg",
      title: "dhd"
    },
    {
      id: "3",
      image: "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665__340.jpg",
      title: "hfdh"
    },
    {
      id: "4",
      image: "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665__340.jpg",
      title: "wtrt"
    },
    {
      id: "5",
      image: "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665__340.jpg",
      title: "reey"
    },
  ]



  return (
    <div className="app__testimonials" >
      <h2 className='head-text'>Testimonials</h2>
      <div className="app__testimonial-content app__flex">
        <Swiper navigation={true} pagination={{
          dynamicBullets: true,
        }} modules={[Navigation, Pagination]} className="mySwiper">
          {slideData.map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <div className="slide-img">
                    <h2 className="head-text">{item.title}</h2>
                    {/* <img src= {item.image} alt="gdddf" /> */}
                  </div>
                </SwiperSlide>
              </>
            )
          })}

        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial