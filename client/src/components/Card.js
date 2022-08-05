import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ele}) => {
  return (
    <div className='containerCards__container__singleContainer'>
        <img className='containerCards__container__singleContainer--image' src={ele.poster} alt="" />
        <section className='containerCards__container__singleContainer--details'>
         <h1>Title : {ele.title}</h1>
         <p>Director : {ele.director}</p>
         <p>Classification : {ele.classification?ele.classification:"Unknown"}</p>
         <p>IMDB Rating : {ele.imdb_rating}</p>
         <p>Length : {ele.length}</p>
         <NavLink to={`/details/${ele.id}`}>Show more...</NavLink>
        </section>
    </div>
  )
}

export default Card