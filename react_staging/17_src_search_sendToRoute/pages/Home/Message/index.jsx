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
                            {/* <Link to={`/home/message/detail/${megObj.id}/${megObj.title}`}>{megObj.title}</Link> */}

                            {/* search */}
                            <Link to={`/home/message/detail/?id=${megObj.id}&title=${megObj.title}`}>{megObj.title}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <hr/>
                  {/* receive params */}
                  {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                  {/* receive search */}
                  <Route path="/home/message/detail" component={Detail}/>

                </div>
        )
    }
}
