import React from 'react';
import '../App.css';

 const Main = (props) => {
    return (
      <div>
        <button 
        className="button__user"
        onClick={() => props.changeUsername('Anna')}
        >Change Username</button>
      </div>
    );
  };
export default Main;