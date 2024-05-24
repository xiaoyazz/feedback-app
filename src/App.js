import Header from "./components/Header"

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
        <>
            <Header></Header>
            <div className="container">
                <h1>My App</h1>
            </div>
        </>

    )
}

export default App