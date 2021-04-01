## I. increment case redux mini

    	(1).Removes the state from the Count component
    	(2).create under src:
    					-redux
    						-store.js
    						-count_reducer.js

    	(3).store.js：
    				1).Create a store by introducing the createStore function in Redux
    				2).ReateStore is called with a reducer that is passed in to serve it
    				3).Remember to expose the Store object

    	(4).count_reducer.js：
    				1).The essence of reducer is a function that receives: preState, action, and returns the processed state
    				2).Reducer has two functions: initialization state, processing state
    				3).When the reducer is called for the first time, it is automatically triggered by the store.
    								The passed preState is undefined,
    								The passed action is: {type:'@@REDUX/INIT_a.2.b.4}

    	(5).Monitor the change of the state in the store in index.js, and re-render <App/> once the change occurs
    			PS: Redux is only responsible for managing the state. As for the change of state driving the display of the page, we have to write it ourselves.

## II. increment case redux full

    	Add file：
    		1.count_action.js Specially used to create action objects
    		2.constant.js Put the type value that is easy to type wrong
