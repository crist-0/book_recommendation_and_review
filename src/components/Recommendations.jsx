import React from "react";

const Recommendations = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recommendations</h2>
            <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">Recommended Book 1</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Recommended Book 2</li>
            </ul>
        </div>
    );
};

export default Recommendations;
