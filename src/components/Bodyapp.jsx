import React from 'react'
import './BodyApp.css'
import Carrousel from './Carrousel';
import Bodyappsection from './Bodyappsection';
import Bodyappsection2 from './Bodyappsection2';
import Bodyappsection3 from './Bodyappsection3';

function Bodyapp() {
  return (
    <>
      <Carrousel/>
      <Bodyappsection dataSection={"1"}/>
      <Bodyappsection2/>
      <Bodyappsection dataSection={"3"}/>
    </>
  )
}

export default Bodyapp