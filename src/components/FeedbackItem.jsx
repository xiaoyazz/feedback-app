import React from 'react'
import { useState } from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7) // this hook gives default rating value
    const [text, setText] = useState('This is a default feedback item text.')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </div>
    )
}

export default FeedbackItem
