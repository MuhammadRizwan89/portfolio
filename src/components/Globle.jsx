import React from 'react'

function Globle() {
  return (
    <div>Globle</div>
  )
}
function SectionHding(prop) {
  return (
    <>
     <div className={`${prop.newclass} main_heading`}>
      <span className={`${prop.extr} hdingbtn`}>{prop.btntext}</span>
      <h2>{prop.sechdingtext}</h2>
     </div>
    </>
  )
}
function Regularbtn() {
  return (
    <div>Regularbtn</div>
  )
}
function Themebtn() {
  return (
    <div>Themebtn</div>
  )
}

export  {Globle,Regularbtn,Themebtn,SectionHding}