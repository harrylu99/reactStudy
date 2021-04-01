// reducer is a function 

const initState = 0
export default function countReducer(preState = initState, action){
    //get type and date from action
    const {type, data} = action
    //how to factor data depends on type
    switch(type){
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}