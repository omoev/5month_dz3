import React, { useState } from 'react';

const NumberInput = ({ onAdd }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        if (value.trim() !== '') {
            onAdd(parseInt(value, 10));
            setValue('');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={value}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default NumberInput;
