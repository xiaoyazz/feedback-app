// import React from "react";
import PropTypes from 'prop-types'

function Header({
    text = 'Share Your Feedback',
    bgColor = 'rgba(0,0,0,0.4)',
    textColor = '#ff6a95'
}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>

        </header>
    )
}

// Header.defaultProps = {
//     text: 'Feedback Zone',
//     bgColor: 'rgba(0,0,0,0.4)',
//     textColor: '#ff6a95',
// }

Header.protoTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header