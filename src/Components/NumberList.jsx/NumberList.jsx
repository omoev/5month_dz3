import React from 'react';

const NumberList = ({ numbers }) => (
    <ul>
        {numbers.map((number, index) => (
            <li key={index}>{number}</li>
        ))}
    </ul>
);

export default NumberList;
