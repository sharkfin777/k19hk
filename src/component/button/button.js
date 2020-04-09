import React from 'react'

import './button.css'

const Button = (prop) => {
    
    const { href, name } = prop;

    return (
        <a className='alink' href={href}>{name}</a>
    )
}
export default Button;