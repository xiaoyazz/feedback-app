import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)

    // state
    const [feedback, setFeedback] = useState([

    ])

    // another state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false // when click, it will become true (in edit mode)
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback from backend
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5001/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

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

    // reset
    // const resetFeedbackEdit = (item) => {
    //     setFeedbackEdit({
    //         item,
    //         edit: false
    //     });
    // };

    // A function to edit the feedback item
    const editFeedbackItem = (id, updItem) => {
        //console.log(id, updItem)
        setFeedback(feedback.map((item) => (item.id === id ? {
            ...item, ...updItem
        } : item)))
    }


    // pass functions in value
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit, // the actual state
        isLoading,
        addFeedback,
        deleteFeedback,
        updateFeedback, // the updateFeedback function
        editFeedbackItem,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext