import React from 'react'
import './Slider.css'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'


export default function Button({direction, moveSlide}) {
  
   return (
      <>
         <button onClick={moveSlide} className={direction === 'gauche' ? 'btn-slide prev' : 'btn-slide next' }>
            <img src={direction === 'gauche' ? leftArrow : rightArrow} alt={`sens du slide vers la ${direction}`} />
         </button>         
      </>
   )
}
