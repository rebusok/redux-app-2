import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksReq} from '../../actions';
import { bindActionCreators} from 'redux';
import {compose} from '../../utils';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {
    componentDidMount(){
        const {bookstoreService, booksLoaded, booksReq} = this.props;
        booksReq();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
        
    }
    render(){
        const { books, loading } = this.props;

        if (loading){
            return <Spinner/>
        }
            
        

        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading}) => {
    return{books, loading}
}
const mapDispatchToPros = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
        booksReq
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToPros)
)(BookList);