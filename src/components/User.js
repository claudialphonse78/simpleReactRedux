import React, { Component } from 'react';
import '../App.css';


const User=(props)=>{
    return (
      <div className="user__desc">
        {props.username}
      </div>
    );
  }


export default User;