import React from 'react'
import { useLocation } from 'react-router-dom'
import Clouds from '../Clouds/Clouds';

const Back = ({title}) => {
    const location = useLocation();
  return (
  
    <>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
        <Clouds/>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Back
