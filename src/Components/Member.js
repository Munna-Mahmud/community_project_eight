import React from 'react';
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Member = (props) => {
  // console.log(props)

  // desstructing for member information 
  const { picture, name, location, balance, phone, email } = props.member;
  // font FontAwesomeIcon 
  const icon = <FontAwesomeIcon icon={faUser} />

  return (
    <div className="members container">
      <div>
        <img src={picture} alt="" />
        <h5 className="text-center">  {name} </h5>
      </div>
      <div className="members-details">
        <p>Adress: {location} </p>
        <p>Balance : ${balance}</p>
        <p>Phone : {phone}</p>
        <p>Email : {email}</p>
        <div className="action-btn">
          <button
            onClick={() => props.handleAddMembers(props.member)}
            className="add-btn"> {icon} Add Member</button>
        </div>

      </div>
    </div>
  );
};

export default Member;