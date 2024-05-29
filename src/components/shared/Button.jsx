import React, { version } from 'react'
import PropTypes from 'prop-types'
import { type } from '@testing-library/user-event/dist/type'
import { isDisabled } from '@testing-library/user-event/dist/utils'

function Button({
    children,
    version = 'primary',
    type = 'button',
    isDisabled = false }) {

    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
