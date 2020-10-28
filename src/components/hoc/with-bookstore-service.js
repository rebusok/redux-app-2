import React from 'react';
import {BookstoreServiseConsumer} from '../bookstore-service-context';


const withBookstoreService = () => (Wrapper) => {
    return (props) => {
        return(
            <BookstoreServiseConsumer>
                {
                    (bookstoreService) => {
                       return <Wrapper {...props} 
                                bookstoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiseConsumer>
        )
    }
}

export {
    withBookstoreService
} ;