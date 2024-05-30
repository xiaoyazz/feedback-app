import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

// use function to create react component
// return jsx
// use syntax sugar to put some html into js
function App() {

    // const title = 'Blog Post'
    // const body = 'This is my blog post'
    // const comments = [
    //     { id: 1, text: 'Comment1' },
    //     { id: 2, text: 'Comment2' },
    //     { id: 3, text: 'Comment3' }
    // ]

    // const loading = false
    // const showComments = true

    // const commentBlock = (
    //     <div className="comments">
    //         <h3>Comments({comments.length})</h3>
    //         <ul>
    //             {comments.map((comment, index) => (
    //                 <li key={index}>{comment.text}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    // if (loading) return <h1>Loading...</h1>

    const [feedback, setFeedback] = useState(FeedbackData) // use hook to pass the FeedbackData value in the default state

    const deleteFeedback = (id) => {
        // console.log('App', id)
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]) // add new feedback into the feedback array for the ui
    }

    return (
        // <div className="container"> {/*if I use class attribute instead of className, it will cause issue because jsx doesn't supoort all html attributes*/}
        //     <h1>{title.toUpperCase()}</h1> {/*it looks like html but it's actually jsx*/}
        //     <p>{body}</p>

        //     {showComments ? (
        //         <div className="comments">
        //             <h3>Comments({comments.length})</h3>
        //             <ul>
        //                 {comments.map((comment, index) => (
        //                     <li key={index}>{comment.text}</li>
        //                 ))}
        //             </ul>
        //         </div>) : null}

        //     {/* It is equivalent to the code below (without using ternary) */}
        //     {showComments && commentBlock}

        //     <p></p>
        //     {Math.random() * (5 + 5)} {/* it will display math calculation result on the index page*/}



        // </div> // must be wrapped up with a fragment or an html element
        <Router>
            <Header></Header>

            <div className="container">
                {/* <FeedbackItem></FeedbackItem> Instead of using feedback item, use a feedback list component to display feedback data dynamically */}
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                            <FeedbackStats feedback={feedback}></FeedbackStats>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
                        </>
                    }>
                        {/* <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                        <FeedbackStats feedback={feedback}></FeedbackStats>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList> */}
                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink></AboutIconLink>
            </div>
            <Footer></Footer>
        </Router>

    )
}

export default App