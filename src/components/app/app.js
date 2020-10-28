<<<<<<< HEAD
import React, { Component } from 'react';


export default class App extends Component {
    render(){
        return(
            <h1>Hello world</h1>
        )
    }
}
=======
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {HomePage, CardPage} from '../pages';
import './app.css';

const App = ({bookstoreService}) => {
  // console.log(bookstoreService.getBooks());
  return(
    <Switch>
      <Route path="/"
              component={HomePage}
              exact />  
      <Route path="/card"
              component={CardPage}/>  
    </Switch>
  ) 
} 

export default App;
>>>>>>> cef7b874758f4fb5a15bf739a594bf2e2ea73d1c
