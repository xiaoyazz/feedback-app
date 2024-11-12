// import React from "react";
import PropTypes from 'prop-types'
import { TbTextSize } from 'react-icons/tb'

function Footer({
    text = '© 2024 Created by Xiaoya Zou. This project is for study purposes only.',
    bgColor = 'rgba(255, 255, 255, 1)',
    textColor = '#333',
    textSize = 10
}) {

    const footerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        fontSize: textSize
    }

    return (
        <footer style={footerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>

        </footer>
    )
}

Footer.protoTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    // textColor: PropTypes.number,
}

export default Footer