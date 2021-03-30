import React, { Component } from 'react'
import './index.css'


export default class Footer extends Component {
    
  //callbakc func, 
	handleCheckAll = (event)=>{
		this.props.checkAllTodo(event.target.checked)
	}
    
  //callbakc func, clear finsihed
	handleClearAllDone = ()=>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
      //finsihed count
      //const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
      const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
      //totoal count 
      //const total = todos.length
      const total = todos.length
      return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
          </label>
          <span>
                <span>Already finished{doneCount}</span> / {total}in total
              </span>
              <button onClick={this.handleCheckAll}className="btn btn-danger">Clean all finished</button>
            </div>
        )
    }
}
