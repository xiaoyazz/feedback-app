import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) { // after added the handleDelete prop in FeedbackList, it should be passed here as well

    // // We don't need the hard coded item once we pass item from prop
    // const [rating, setRating] = useState(7) // this hook gives default rating value
    // const [text, setText] = useState('This is a default feedback item text.')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

    const { deleteFeedback, updateFeedback } = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes color='black'></FaTimes></button> {/* close button using react icon and props */}
            <button onClick={() => updateFeedback(item)} className="edit"><FaEdit color='black'></FaEdit></button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
