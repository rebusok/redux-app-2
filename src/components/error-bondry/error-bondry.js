import React, { Component } from 'react';
import ErrorIndicate from '../error-indicate';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({ error: true });
    }


    render(){

        if (this.state.error){
            return <ErrorIndicate/>
        }
        return this.props.children;
    }
}