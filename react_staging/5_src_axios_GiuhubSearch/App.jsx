import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    
    state = {
        users:[], //initial users array
        isFirst: true, //if it is first time visit
        isLoading: false, //if it is loading
        err: '', //store related error message
    }

    //update App state
    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }

    render() {
        return (
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
                </div>
        )
    }
}
