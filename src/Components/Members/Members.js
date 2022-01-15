import React, { useEffect, useState } from 'react';
import Member from '../Member';
import SelectedMembers from '../SelectedMembers/SelectedMembers';
import './Members.css'

const Members = () => {
    const [members, setMembers] = useState([]);
    // selected members state
    const [cart, setCart] = useState([]);

// button handeler function 
    const handleAddMembers = (member) => {
        // console.log(member)
        const newMember = [...cart, member]
        setCart(newMember)
        // console.log(newMember)
    }

    useEffect(() => {
        fetch('./members.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className="community-container container">
            <div className="members-container">
                {
                    members.map(member => <Member
                        key={member.id}
                        member={member}
                        handleAddMembers={handleAddMembers}
                    ></Member>)
                }
            </div>
            <div >

                <div className="cart-container">
                    <h4>Selected Members</h4>
                    <h5>Total Members :{cart.length} </h5>
                    <div className="cart-text">
                        <SelectedMembers
                            cart={cart}
                        ></SelectedMembers>

                        <button >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;