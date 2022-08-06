import React from 'react'
import error from "../assets/page_not_found.svg"

const Error = () => {
  return (
    <div className='error'>
      <img src={error} alt="error" />
      <h2>Sorry , something wrong happen</h2>
      <a href="/">Get back to home page</a>
    </div>
  )
}

export default Error