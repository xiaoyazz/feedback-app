import { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    // state
    const [text, setText] = useState('') // for the form input
    const [rating, setRating] = useState('') // for the form rating
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('') // empty by default

    const { addFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text != '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault() // prevent from submitting an empty form

        if (text.trim().length > 10) {
            const newFeedback = {

                // here use a shorthand
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')// clear the input after submit
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}> {/* add an event handler to handle form submit */}
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>

                <div className='input-group'>
                    <input onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
