import React from 'react';
import './SelectedMembers.css'

const SelectedMembers = (props) => {
    const { cart } = props || {};

    // reducer for amount
    const totalReducer = (previous, currentValue) => previous + currentValue.balance
    const total = cart.reduce(totalReducer, 0).toFixed(2);
    return (
        <div>
            <h5 className="text-center">ToTal Investment: ${total}</h5>
            <div className="cart-img">
                {
                    cart.map(member => <p>
                        <p> <img src={member.picture} alt="" /> {member.name}</p>
                    </p>)
                }
            </div>

        </div>
    );
};

export default SelectedMembers;