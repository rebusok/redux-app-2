import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/erorr-bondry';
import BookstoreService from './services/bookstore-service';
import {BookstoreServiseProvider} from './components/bookstore-service-context';
import store from './store';




const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiseProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiseProvider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
  );
