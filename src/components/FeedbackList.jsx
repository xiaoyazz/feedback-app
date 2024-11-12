import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
//import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() { // destructured

    const { feedback, isLoading } = useContext(FeedbackContext) // with this, the feedback is from the context instead of the data js file

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <Spinner /> : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        ></FeedbackItem>
                    </motion.div>
                ))} {/* feedback passed as a prop */}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
