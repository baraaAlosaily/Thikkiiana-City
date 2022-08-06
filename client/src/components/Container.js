import React from 'react'
import Cards from './Cards'
import { useAppContext } from "../context/appContext";
import { useEffect } from 'react';


const Container = () => {
    const {getMovies,movies,search}=useAppContext();

    useEffect(() => {
       getMovies();
    }, [search])

    const actionMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Action"));
    const crimeMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Crime"));
    const dramaMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Drama"));
    const biographyMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Biography"));
    const historyMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("History"));
    const mysteryMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Mystery"));
    const thrillerMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Thriller"));
    const adventureMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Adventure"));
    const warMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("War"));
    const sciFiMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Sci-Fi"));
    const familyMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Family"));
    const animationMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Animation"));
    const romanceMovies=movies.length>0&&movies.filter(ele=> ele.genres.includes("Romance"));


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
            <hr />
            <h2 className='containerCards--title'>Mystery</h2>
            {
            <Cards movies={mysteryMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Thriller</h2>
            {
            <Cards movies={thrillerMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Adventure</h2>
            {
            <Cards movies={adventureMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>War</h2>
            {
            <Cards movies={warMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Sci-Fi</h2>
            {
            <Cards movies={sciFiMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Family</h2>
            {
            <Cards movies={familyMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Animation</h2>
            {
            <Cards movies={animationMovies}/>
            }
            <hr />
            <h2 className='containerCards--title'>Romance</h2>
            {
            <Cards movies={romanceMovies}/>
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