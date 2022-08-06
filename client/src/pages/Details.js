/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import { useParams } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent';
import stars from "../assets/icons8-star-48.png"
import { Navigate } from 'react-router-dom';

const Details = () => {
  const {id} =useParams();
  const {getMovies,movies,user}=useAppContext();

  useEffect(() => {
     getMovies();
  }, [])
  
  const movieData=movies.filter(ele=> ele.id===id)

  const renderRating=()=>{
    let newArray=[]
    if(movieData.length>0){
      for (let i = 0; i < movieData[0].imdb_rating; i++) {
        newArray.push(i);
      }
    }
    return newArray;
  }

  return (
    <>
    {
      !user&&<Navigate to="/landing" />
    }
     <NavbarComponent/>
     <section className='details'>
     <section className='details__container'>
      <section className='details__container--image'>
        <img src={movieData.length>0&&movieData[0].poster} alt={movieData.length>0&&movieData[0].title} />
      </section>
      <section className='details__container--details'>
       <section  className='details__container--details--title'>
        <h2>{movieData.length>0&&movieData[0].title} <span>{movieData.length>0&&movieData[0].imdb_rating}</span></h2>
        <section>
        {
         renderRating().map((ele)=>(
          <img src={stars} alt="stars"/>
         ))
        }
        </section>
        </section>
        <p><span>{movieData.length>0&&movieData[0].released_on.slice(0,10)}</span>&nbsp;|&nbsp;<span>{movieData.length>0&&movieData[0].length}</span>&nbsp;|&nbsp;<span>{movieData.length>0&&movieData[0].director}</span></p>
        <p>Cast : <span>{movieData.length>0&&movieData[0].cast}</span></p>
        <p>Movie Description {" "} {movieData.length>0&&movieData[0].overview}</p>
      </section>
     </section>
     </section>
    </>
  )
}

export default Details