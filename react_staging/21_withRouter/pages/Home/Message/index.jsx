import React, { Component } from 'react'
import {Link,Route}from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'message1'},
      {id:'02',title:'message2'},
      {id:'03',title:'message3'},
    ]
  }

  replaceShow = (id,title) =>{
    //replace + params 
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace + search
    //this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //replace + state
    //this.props.history.replace(`/home/message/detail/`,{id,title})
  }

  pushShow = (id,title) =>{
    //push + params
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push + search
    //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    //push + state
    //this.props.history.push(`/home/message/detail/`,{id,title})
  }

  back = () =>{
    this.props.history.goBack()
  }

  forward = () =>{
    this.props.history.goForward()
  }

  go = () =>{
    this.props.history.go(-2)
  }

    render() {
      const {messageArr} = this.state
        return (
                <div>
                  <ul>
                    {
                      messageArr.map((megObj)=>{
                        return (
                          <li key={megObj.id}>
                            {/* send params to route component*/}
                            <Link to={`/home/message/detail/${megObj.id}/${megObj.title}`}>{megObj.title}</Link>
                            &nbsp;<button onClick={()=> this.pushShow(megObj.id,megObj.title)}>Push</button>
                            &nbsp;<button onClick={()=> this.replaceShow(megObj.id,megObj.title)}>Replace</button>
                            {/* search */}
                            {/* <Link to={`/home/message/detail/?id=${megObj.id}&title=${megObj.title}`}>{megObj.title}</Link> */}

                            {/* state */}
                            {/* <Link to={{pathname:'/home/message/detail',state:{id:megObj.id,title:megObj.title}}}>{megObj.title}</Link> */}
                          </li>
                        )
                      })
                    }
                  </ul>
                  <hr/>
                  {/* receive params */}
                  <Route path="/home/message/detail/:id/:title" component={Detail}/>

                  {/* receive search */}
                  {/* <Route path="/home/message/detail" component={Detail}/> */}

                  {/* state */}
                  {/* <Route path="/home/message/detail" component={Detail}/> */}

                    <button onClick={this.back}>Back</button>&nbsp;
                    <button onClick={this.forward}>Forward</button>&nbsp;
                    <button onClick={this.go}>Go</button>
                </div>
        )
    }
}
