import React from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import ReplyButton from "./ReplyButton";

const Comment = ({ name, date, text, profileImage }) => {
    return (
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <img className="mr-2 w-6 h-6 rounded-full" src={profileImage} alt={name} />
                        {name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
                    </p>
                </div>
                <DropdownMenu />
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{text}</p>
            <div className="flex items-center mt-4 space-x-4">
                <ReplyButton />
            </div>
        </article>
    );
};

export default Comment;
