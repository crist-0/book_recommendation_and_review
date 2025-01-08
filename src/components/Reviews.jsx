import React from "react";

const Reviews = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Your Reviews</h2>
            <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">Review for Book X</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Review for Book Y</li>
            </ul>
        </div>
    );
};

export default Reviews;
