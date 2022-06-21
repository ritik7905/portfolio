import React from 'react'

const NavigationDot = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contacts'].map((item, index) => {
                return (
                    <a key={item + index} href={`#${item}`}
                        className="app__navigation-dot"
                        style={active === item ? { backgroundColor: "#313BAC" } : {}}
                    />
                )
            })}
        </div>
    )
}

export default NavigationDot