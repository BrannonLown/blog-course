import React from 'react'
import style from './IndividualComment.module.css'

function IndividualComment({ value }) {
  return (
    <div className = {style.commentElem}>
        <p className = {style.commentHeader}>By User: {value.name}</p>
        <p className = {style.commentBody}>{value.content}</p>
    </div>
  )
}

export default IndividualComment