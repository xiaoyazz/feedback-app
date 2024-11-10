import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
//import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() { // destructured

    const { feedback } = useContext(FeedbackContext) // with this, the feedback is from the context instead of the data js file

    if (!feedback || feedback.length === 0) {
        return <p>No Available Feedback Yet</p>
    }

    return (
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


    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
    //         ))} {/* feedback passed as a prop */}
    //     </div>
    // )
}

// FeedbackList.protoTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList
