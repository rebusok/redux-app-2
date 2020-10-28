import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {HomePage, CardPage} from '../pages';
import ShopHeader from '../shop-header';
import './app.css';

const App = () => {
  // console.log(bookstoreService.getBooks());
  return(
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={20}/>
      <Switch>
        <Route path="/"
                component={HomePage}
                exact />  
        <Route path="/card"
                component={CardPage}/>  
      </Switch>
    </main>
  ) 
} 

export default App;
