import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = () =>{
        axios.get('').then(
            response => {console.log('Success',response.data)},
            error => {console.log('Failed',error)}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>Click me for data</button>
            </div>
        )
    }
}
