import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

// use function to create react component
// return jsx
// use syntax sugar to put some html into js
function App() {

    //const [feedback, setFeedback] = useState(FeedbackData) // use hook to pass the FeedbackData value in the default state

    return (

        <FeedbackProvider>
            <Router>
                <Header></Header>

                <div className="container">
                    {/* <FeedbackItem></FeedbackItem> Instead of using feedback item, use a feedback list component to display feedback data dynamically */}
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm></FeedbackForm>
                                <FeedbackStats></FeedbackStats>
                                <FeedbackList></FeedbackList>
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
            </Router>
        </FeedbackProvider>

    )
}

export default App