import React from 'react'

const Scroller = () => {
  return (
    <div className="scroll-to-top scroll-to-target" onClick={()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }}>
        <span className="fa fa-angle-double-up"></span>
    </div>
  )
}

export default Scroller