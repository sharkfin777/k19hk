import React from 'react';
import './cardstack.css';
const Card = () => (
    <div className="tariffCards">
        <div class="economy">
            <h3>Personal</h3>
            <span>Banking</span>
        </div>
        <div class="premiumeconomy">
            <h3>Business</h3>
            <span>Banking</span>
        </div>
        <div class="business">
            <h3>Mobile Banking</h3>
            <span>Make Payments</span>
        </div>
        <div class="first">
            <h3>Services</h3>
            <span>Full Insurance</span>
        </div>
    </div>
)
export default Card;