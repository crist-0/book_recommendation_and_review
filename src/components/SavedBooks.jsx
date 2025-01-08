import React from "react";

const SavedBooks = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Saved Books</h2>
            <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">Book A</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Book B</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">Book C</li>
            </ul>
        </div>
    );
};

export default SavedBooks;
