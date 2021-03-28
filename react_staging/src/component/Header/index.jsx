import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
    
    //carry out type, necessity limit
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}

    //callback func, keyboard 
    handleKeyup = (event) =>{
        //destructuring assignment, get keyCode and target 
        const {keyCode,target} = event
        //judge if it id enter key
        if(keyCode !== 13) return
        //todo should noe be empty
        if(target.value.trim() === ''){
            alert('Should not be empty')
            return
        }
        //prepare a todo obj
        const todoObj = {id:nanoid(),name:target.value,done:false}
        //bring todoObj to App
        this.props.addTodo(todoObj)
        //empty enter 
        target.value = ''
    }
    render() {
        return (
            <div>
              <input onKeyUp={this.handleKeyup} type="text" placeholder="Place your to-do stuff and enter"/>
            </div>
        )
    }
}
