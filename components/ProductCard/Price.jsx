import React from 'react';

function Price({ price, discount = 15 }) {
    // Calculate the original price by increasing it by 15%
    const originalPrice = (price * (1 + discount / 100)).toFixed(2);


    return (
        <div className="flex items-center gap-2 ">
            <span className="text-gray-500 line-through text-xs">₹{originalPrice}</span>
            <span className="text-green-700 font-bold text-lg">₹{price}</span>
        </div>
    );
}

export default Price;
