import React from 'react'
import style from './landing.module.css'


// Landing Page - includes button to go to HOME
function LandingPage() {

  return (
    <>
      <div className={style.landing}>
        <div className={style.msgContainer}>
          <p className={style.title}>FOOD Application</p>
          <button className={style.button} onClick={() =>  (window.location.href = "/Home") }>
            Enter
          </button>
        </div>
      </div>
    </>
  )
}
export default LandingPage
