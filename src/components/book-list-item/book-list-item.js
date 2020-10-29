import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const {title, autor, price, coverImage} = book;
    return (
        <div className='book-list-item'>
            <div className ='book-cover'>
                <img src={coverImage} alt='cover'/>
            </div>
            <div className ='book-details'>
                <span  className='book-title'>{title}</span>
                <div className='book-autor'>{autor}</div>
                <div className='book-price'>{price}</div>
                <button className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
            
        </div>
    );
};

export default BookListItem;