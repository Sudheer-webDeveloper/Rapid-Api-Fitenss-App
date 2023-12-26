import React from 'react'
import loader from '../../assets/images/Loader.mp4'

const Loader = () => {
  return (
    <div className='loader'>
    <video src={loader} loop autoPlay></video>
    </div>
  )
}

export default Loader
