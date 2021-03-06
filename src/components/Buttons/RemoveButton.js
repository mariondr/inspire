import React from 'react'
import { remove } from './RemoveButton.css'

const RemoveButton = ({ text, action, style }) => {
  return <button className={`${remove} ${style}`} onClick={() => action()}><i className="trash icon"></i>{text}</button>
}

export default RemoveButton
