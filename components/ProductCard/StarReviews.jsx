import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

function StarReviews({ rating = 5, reviewsCount = 0 }) {
    const totalStars = 5;
    const fullStars = Math.floor(rating);  // Full stars count
    const hasHalfStar = rating % 1 !== 0;  // Check if half-star is needed
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
        <div className="flex items-center gap-1 text-orange-500">
            {/* Full Stars */}
            {[...Array(fullStars)].map((_, index) => (
                <Star key={index} fill="currentColor" stroke="none" className="w-4 h-4" />
            ))}

            {/* Half Star (if applicable) */}
            {hasHalfStar && <StarHalf fill="currentColor" stroke="none" className="w-4 h-4" />}

            {/* Empty Stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <StarOutline key={index} className="w-5 h-5 text-gray-400" />
            ))}
            <span className="text-black text-xs">
                ({reviewsCount})
            </span>
        </div>
    );
}

export default StarReviews;
