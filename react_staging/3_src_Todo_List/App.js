import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
  //workshop place of state depends on the state

  //initial state
  state = {todos: [
    {id:'001', name:'Breakfast', done:true},
    {id:'002', name:'Sleep', done:true},
    {id:'003', name:'Study', done:false},
  ]}

  //addTodo for add a new todo, para that recived is todo object
  addTodo = (todoObj) =>{
    //get orginal todo
    const {todos} = this.state
    //new a todo
    const newTodos = [todoObj,...todos]
    //update
    this.setState({todos:newTodos})
  }

  //for update a todo object 
  updateTodo = (id, done) =>{
    //get todos from state
    const {todos} = this.state
    //match data
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

  //for delete a todo obj
  deleteTodo = (id) =>{
    //get origin
    const{todos} = this.state
    //delete todo obj
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //update state
    this.setState({todos:newTodos})
  }

  //for select all
	checkAllTodo = (done)=>{
    //get origin
		const {todos} = this.state
    //factor data
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
    //update
		this.setState({todos:newTodos})
	}


  render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}