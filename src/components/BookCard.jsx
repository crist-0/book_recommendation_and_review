import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4">
      <div className="p-5 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row md:flex-row">
          {/* Image Section */}
          <img
            src={book.coverImage}
            alt={`${book.name} cover`}
            className="w-full md:w-1/2 lg:w-1/3 h-48 md:h-auto lg:h-auto object-cover"
          />
          {/* Details Section */}
          <div className="p-5 flex-1">
            <h2 className="text-lg lg:p-3 font-bold text-gray-800 dark:text-white mb-2">
              {book.name}
            </h2>
            <p className="text-sm lg:p-3 text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p className="text-sm lg:p-3 text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-semibold">Year:</span> {book.year}
            </p>
            <p className="text-sm lg:p-3 text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-semibold">Genre:</span> {book.genre}
            </p>
            <div className="flex lg:p-3 items-center mt-3">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2 font-semibold">
                Rating:
              </span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < book.rating ? "gold" : "gray"}
                    className="w-5 h-5 transition-transform transform hover:scale-125"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <button className="mt-4 w-full py-2 px-4 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-900 focus:ring-opacity-75">
              Write Reviews
            </button>
            <button className="mt-4 w-full py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-900 focus:ring-opacity-75">
              Read Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
