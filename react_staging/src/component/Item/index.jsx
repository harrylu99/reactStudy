import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    

  state = {mouse: false} //judge mouse move 

  //mouse move and leave
  handleMouse =(flag) =>{
    return () =>{
      this.setState({mouse:flag})
    }
  }

  //callback fun, checked or unchecked
  handleCheck = (id) =>{
    return (event) =>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //callback fun, delete a todo
  handleDelete = (id) =>{
    if(window.confirm('Are you sure to delete it?')){
      this.props.deleteTodo(id)
    }
  }

  render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <div>
              <li style={{backgroundColor: mouse ?'#ddd' : 'white'}}onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                  <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                  <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)}className="btn btn-danger" style={{display:mouse?'block':'none'}}>Delete</button>
              </li>
            </div>
        )
    }
}
