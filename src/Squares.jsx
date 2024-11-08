import React from 'react';
import './App';

const Square = ({label, type }) => {
    return (
       <>
        <span className={`square square-${type}`}>
        {label}
        </span>
       </>
    )
}

export default Square;