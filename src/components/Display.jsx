import React from 'react'

export const Display = ({displayValue}) => {
  return (
    <input className='display' type='text' value = {displayValue} readOnly/>
  )
}
