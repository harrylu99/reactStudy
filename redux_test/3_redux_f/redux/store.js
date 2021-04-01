//import createStore, the core store object in redux
import {createStore} from 'redux'
//import the redcuer which serive Count component
import countReducer from './count_reducer'
//export store
export default createStore(countReducer)
