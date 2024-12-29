import React from "react";
import CommentForm from "./CommentFom";
import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "Michael Gough",
        date: "2022-02-08",
        text: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers.",
        profileImage: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
    {
        id: 2,
        name: "Jese Leos",
        date: "2022-02-12",
        text: "Much appreciated! Glad you liked it ☺️",
        profileImage: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
        id: 3,
        name: "Bonnie Green",
        date: "2022-03-12",
        text: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
        profileImage: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    {
        id: 4,
        name: "Helene Engels",
        date: "2022-06-23",
        text: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
        profileImage: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
];

const CommentList = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
                </div>
                <CommentForm />
                {comments.map((comment) => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </div>
        </section>
    );
};

export default CommentList;
