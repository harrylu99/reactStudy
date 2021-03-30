import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    
    search = () =>{
        //get user's input
        const {keywordElement:{value}} = this
        //notify app to update state
        this.props.updateAppState({isFirst:false,isLoading:true})
        //send request
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //notify app to update state
                this.props.saveUsers({isLoading:false, users:response.data.items})
            },
            error => {
                //notify app to update state
                this.props.saveUsers({isLoading:false, err:error.message})}
        )
    }
    render() {
        return (
            <div>
                    <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keywordElement = c }type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                    </section>
            </div>
        )
    }
}
