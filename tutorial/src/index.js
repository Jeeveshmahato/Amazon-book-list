import React from 'react';
import  ReactDOM   from 'react-dom';

import './index.css';
import {data} from './books'
import Book from './book'
// import SpecificBook from './book'
import{greeting} from './testing/testing'

function Booklist(){
  console.log(greeting);
  return( 
    <section className='booklist'>
      {data.map((book) => {
        // return <Book key ={book.id}  book ={book}></Book>;
        return<Book key ={book.id} {...book}></Book>;
        // return<SpecificBook key ={book.id} {...book}></SpecificBook>;
      })}
    </section>
  ); 
}


ReactDOM.render(<Booklist />, document.getElementById('root'));
