import React, { Component } from 'react';
import ErrorIndicate from '../error-indicate';
import './error-boundry.css'
export default class Errorboundry extends Component {

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