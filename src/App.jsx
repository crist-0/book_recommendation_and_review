import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Review from './pages/Review'
import BookCard from './components/BookCard'

import UserCard from './components/UserCard'
import Paragraph from './components/Paragraph'
import CommentList from './components/CommentList'
function App() {

  return (
    <>
      <Home />
      <Signin />
      <Review />
      <BookCard
  book={{
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic Fiction",
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_hr.jpg",
    rating : 4
  }}
/>
    <UserCard /> 
    <Paragraph />
    <CommentList />
    </>
  )
}

export default App;
