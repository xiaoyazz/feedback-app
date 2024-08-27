import React from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() { // no need to pass the prop because we get it from the context now

    const { feedback } = useContext(FeedbackContext) // now the number of reviews can be updated dynamiclly with context

    // calculate reading avrage
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '') // set it with 1 decimal place. if it is 0 after the decimal, replace it with ''

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
