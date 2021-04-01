// reducer is a function 
import {INCREMENT, DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState = initState, action){
    //get type and date from action
    const {type, data} = action
    //how to factor data depends on type
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}