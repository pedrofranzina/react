import React from 'react';

function Slider({ value, onChange }) {
    return (

        <div>
            <input type="range" value={value} onChange={onChange} />
            <input className="inputNumber" type="number" value={value} onChange={onChange} />
        </div>
    );
}

export default Slider;