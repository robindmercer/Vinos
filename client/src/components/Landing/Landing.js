import React from 'react'
import style from './landing.module.css'
import { useHistory } from 'react-router'

// Landing Page - includes button to go to HOME
function LandingPage() {
  const history = useHistory()
  return (
    <>
      <div className={style.landing}>
        <div className={style.msgContainer}>
          <p className={style.title}>FOOD Application</p>
          <button className={style.button} onClick={() => history.push('/home')}>
            Enter
          </button>
        </div>
      </div>
    </>
  )
}
export default LandingPage
