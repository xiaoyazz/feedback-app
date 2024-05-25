import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item }) {

    // // We don't need the hard coded item once we pass item from prop
    // const [rating, setRating] = useState(7) // this hook gives default rating value
    // const [text, setText] = useState('This is a default feedback item text.')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
