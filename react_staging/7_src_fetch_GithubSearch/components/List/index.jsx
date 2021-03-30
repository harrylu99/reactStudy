import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users:[], //initial users array
        isFirst: true, //if it is first time visit
        isLoading: false, //if it is loading
        err: '', //store related error message
    }

    componentDidMount(){
        this.token = PubSub.subscribe('topic',(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Welcome, Search keyword</h2> : 
                        isLoading ? <h2>Loading...</h2> :
                        err ? <h2 style={{color:'red'}}>{err}</h2> :
                        users.map((userObj)=>{
                            return (
                                <div key={userObj.id} className="card">
                                    <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="avatar" src={userObj.avatar_url} style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
