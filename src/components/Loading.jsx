import React from 'react'
import LoadingGif  from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className="loading-container">
        <img src={LoadingGif} alt="" />
    </div>
  )
}

export default Loading