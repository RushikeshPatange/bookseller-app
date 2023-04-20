import React from 'react'
import BookList from './BookList'
import Heading from './Heading'
import "../styles/Home.css"
const Home = () => {
  return (
    <div className='container'>
    <Heading />
    <BookList />
    </div>
  )
}

export default Home