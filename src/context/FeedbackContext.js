import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    // state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 9
        }
    ])

    // another state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false // when click, it will become true (in edit mode)
    })

    // A function to add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]) // add new feedback into the feedback array for the ui
    }

    // A function to delete feedback
    const deleteFeedback = (id) => {
        // console.log('App', id)
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // A function to set feedback item to be update
    const updateFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // A function to edit the feedback item
    const editFeedbackItem = (id, updItem) => {
        //console.log(id, updItem)
        setFeedback(feedback.map((item) => (item.id === id ? {
            ...item, ...updItem
        } : item)))

        setFeedbackEdit({
            edit: false
        })
    }


    // pass functions in value
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit, // the actual state
        addFeedback,
        deleteFeedback,
        updateFeedback, // the updateFeedback function
        editFeedbackItem

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext