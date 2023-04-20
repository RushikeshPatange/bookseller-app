import React from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'
import "../styles/Book.css"

const Book = () => {
  const book1 = {
    img : "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg",
    title : "Psychology of Money",
    author : "Morgan Housel"
  }
  const book2 = {
    img : "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg",
    title : "Atomic Habits",
    author : "James Clear"
  }
  const book3 = {
    img : "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL900_SR900,600_.jpg",
    title : "IKIGAI",
    author : "Francesc Miralles"
  }
  const BookArray = [book1,book2,book3]
  return (
    BookArray.map(i=>
    <div className='book'>
    <Image value={i.img} alt = {i.title}className="image"/>
    <Title title={i.title} />
    <Author author={i.author}/>
    </div>)
  )
}

export default Book