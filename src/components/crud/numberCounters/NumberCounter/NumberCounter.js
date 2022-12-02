import React from "react";
import './NumberCounter.css'

function NumberCounter({ identifiers, count, minQuantity, maxQuantity, updateFunction }) {

    let updateCount = (direction) => {
        if (direction == 'down') {
            if (count > minQuantity) updateFunction(...identifiers, count - 1);
        } else if (count < maxQuantity) updateFunction(...identifiers, count + 1);
    }
    return (
        <div className='numberCounter'>
            <button onClick={() => updateCount('down')} style={{ zIndex: '2' }}>-</button>
            <p>{count}</p>
            <button onClick={() => updateCount('up')} style={{ zIndex: '2' }}>+</button>
        </div>
    );
}

export default NumberCounter;