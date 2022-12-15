import React from 'react'
import { useParams } from 'react-router-dom'

function Redirect() {
    const param = useParams();
  return (
    <div>Redirect</div>
  )
}

export default Redirect