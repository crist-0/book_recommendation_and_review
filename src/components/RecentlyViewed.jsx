import React from "react";

const RecentlyViewed = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recently Viewed</h2>
            <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">Book 1</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Book 2</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Book 3</li>
            </ul>
        </div>
    );
};

export default RecentlyViewed;
