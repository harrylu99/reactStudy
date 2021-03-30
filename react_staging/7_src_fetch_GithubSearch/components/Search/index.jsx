import React, { Component } from 'react'
import PubSub from 'pubsub-js'
//import axios from 'axios'

export default class Search extends Component {
    
    search = () =>{
        PubSub.publish('topic',{})
        //get user's input
        const {keywordElement:{value}} = this
        //notify list to update state
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('topic',{isFirst:false,isLoading:true})
        
        /* //using axios send request
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //notify app to update state
                // this.props.saveUsers({isLoading:false, users:response.data.items})
                PubSub.publish('topic',{isLoading:false, users:response.data.items})
            },
            error => {
                //notify app to update state
                // this.props.saveUsers({isLoading:false, err:error.message})
                PubSub.publish('topic',{isLoading:false, err:error.message})
            }
        ) */

        //use fetch send request (Not optimized)
        /* fetch(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                return response.json()
            },
            error => {
                console.log(error);
                return new Promise(()=>{})
            }
        ).then(
            response => {console.log(response);},
            error => {console.log(error);}
        ) */

        //use fetch send request (optimized)
        try{
        const response = await fetch(`https://api.github.com/search/users?q=${value}`)
        const data = await response.json()
        console.log(data);
        PubSub.publish('topic',{isLoading:false, users:data.items})
    }catch (error){
        console.log(error);
        PubSub.publish('topic',{isLoading:false, err:error.message})
    }
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
