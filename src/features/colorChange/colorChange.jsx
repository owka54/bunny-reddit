import React from "react"
import { useDispatch } from 'react-redux'
import { colorChanged } from "./colorChangeSlice"


export default function ColorChange() {
  const dispatch = useDispatch()

  const changeColor = (e) => {
    const color = e.target.value
    dispatch(colorChanged(color))
  }

  return (
    <div>
        <h3>Select a theme</h3>

        <button id='blueviolet'
          value='blueviolet'
          onClick={changeColor}>
          BlueViolet
        </button>

        <button id='cornflowerblue'
          value='cornflowerblue'
          onClick={changeColor}>

          CornflowerBlue
        </button>

        <button id='crimson'
          value='crimson'
          onClick={changeColor}>

          Crimson
        </button>
      </div>
  )
}



