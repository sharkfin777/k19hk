import React from 'react'
import './header.css'
import Button from '../button/button';





const Header = () => (
    <header>
        <i class="fa fa-university" aria-hidden="true"></i>
        <h1>Wells Fargo Bank</h1>
        <div>
            <Button name='Login' href='/' />
            <Button name='Sign up' href='/' />
        </div>
    </header>
)

export default Header;