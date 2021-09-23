import React, { useState } from 'react'

export default function Reviews({ reviews }) {
    // const [Allreviews, setReviews] = useState([])
    // reviews.map(item=>(
    //     setReviews(reviews)
    // ))
    console.log(reviews)
    return (
        <div>
            <p>{reviews.name}: {reviews.rating} Star</p>
            <p>{reviews.comments}</p>
        </div>
    )
}
