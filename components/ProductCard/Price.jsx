import React from 'react';

function Price({ price, discount = 0, PriceClass="", StrikeClass=""}) {
    // Calculate the original price by increasing it by 15%
    const originalPrice = (price * (1 + discount / 100)).toFixed(2);


    return (
        <div className="flex items-center gap-2 ">
            
                <span className={`${PriceClass !== "" ? PriceClass: "text-sm" }`}>₹{price}</span>
            
            {discount !== 0 && (
            <span className={`text-gray-500 line-through ${StrikeClass !== "" ? StrikeClass : "text-xs"}`} >₹{originalPrice}</span>
            )}
        </div>
    );
}

export default Price;
