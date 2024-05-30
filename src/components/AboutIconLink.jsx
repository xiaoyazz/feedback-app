import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AboutIconLink() {
    return (
        <div className='about-link'>
            <Link to={{
                pathname: '/about',
                search: '?sort=name',
                // hash: '#hello', // to have a special hash
            }}> {/* or just use a simple <Link to='/about'> */}
                <FaQuestion size={30}></FaQuestion>
            </Link>
        </div>
    )
}
