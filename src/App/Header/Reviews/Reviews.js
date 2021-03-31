import React from 'react'
import {Link} from 'react-router-dom'
import './Reviews.css'

const Reviews = () => {
   return (
      <div className='reviews-wrapper'>
         <div className="link-reviews">
            <Link to='/reviews'>Reviews</Link>
         </div>
      </div>
   )
}

export default Reviews