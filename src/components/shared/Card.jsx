import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse = false }) {
    return (
        // set the className with a condition class name
        // if reverse is true, use 'card reverse' classname with .card reverse css style
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>

        // another way is to use conditional style
        // <div className='card' style={{
        //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        //     color: reverse ? '#fff' : '000'
        // }}>{children}</div>

    )
}

// Card.defaultProps = {
//     reverse: false,
// }

Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
