import React from 'react'
import Cards from './Cards'
import { useAppContext } from "../context/appContext";
import { useEffect } from 'react';


const Container = () => {
    const {getMovies,movies,search}=useAppContext();

    useEffect(() => {
       getMovies();
    }, [search])
    console.log(movies);

    const actionMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Action"));
    const crimeMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Crime"));
    const dramaMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Drama"));
    const biographyMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Biography"));
    const historyMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("History"));


  return (
    <div className='containerCards'>
        {
           !search&&
            <>
            <h2 className='containerCards--title'>Action</h2>
            {
            <Cards movies={actionMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Crime</h2>
            {
            <Cards movies={crimeMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Drama</h2>
            {
            <Cards movies={dramaMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Biography</h2>
            {
            <Cards movies={biographyMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>History</h2>
            {
            <Cards movies={historyMovies}/>
            }
           </>
        }

        {
            search&&movies.length>0&&
            <>
            <h2 className='containerCards--title'>Search Results {movies.length} Movies</h2>
            {
            <Cards movies={movies}/>
            }
            </>
          
        }
        {
            search&&movies.length===0&&
              <>
              <h2 className='containerCards--title'>No Results Available</h2>
              </>
        }
    </div>
  )
}

export default Container