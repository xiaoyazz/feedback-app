import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>

                <p>
                    This is a React app designed for users to provide feedback on products or services.
                </p>

                <p>
                    <b>Developer: </b>Xiaoya Zou
                </p>
                <p>
                    <b>Purpose: </b>Created as a study project to enhance understanding of React development and user interaction.
                </p>

                <p>
                    <b>Version: </b>1.0.0
                </p>

                <p>
                    <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
