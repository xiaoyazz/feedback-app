import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) { // destructured
    if (!feedback || feedback.length === 0) {
        return <p>No Available Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}></FeedbackItem>
            ))} {/* feedback passed as a prop */}
        </div>
    )
}

export default FeedbackList
