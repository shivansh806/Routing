import React from 'react'
import { useParams } from 'react-router-dom'

const RandomPage = () => {
    const data =  useParams()
  return (
    <div>
        <h1>This is {data.id} Page</h1>
    </div>
  )
}

export default RandomPage