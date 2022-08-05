import React from 'react'
import Card from './Card'

const Cards=({movies})=>{
  return (
    <div className='containerCards__container'>
        {
            movies.length>0&&movies.map((ele)=>(
                <Card ele={ele} key={ele.id}/>
            ))
        }
    </div>
  )
}

export default Cards