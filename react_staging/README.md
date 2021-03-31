## I. todoList

    	1.Split components, implement static components, Be careful：className、style
    	2.Dynamically initialize the list, define that should be in the state？
    				——for a individual component: code in its own state
    				——for dome components：code in their parent compoent's state (state Upgrade)
    	3.About the parent and child component：
    			1.【parent component】to【child com】：use props
    			2.【child com】to【parent com】：use props，required parent pass a function to the child ahead of time
    	4.Be care of the diffence defaultChecked and checked，defaultValue and value
    	5.ethods of manipulating state depends on the state

## II. github search

    	1.Consider the state of the design, such as a component with a network request, and what to do if the request fails.
    	2.ES6：Deconstruct assignment + rename
    				let obj = {a:{b:1}}
    				const {a} = obj; //traditional deconstruct assignment
    				const {a:{b}} = obj; //continue deconstruct assignment
    				const {a:{b:value}} = obj; //continue deconstruct assignment + rename
    	3.Pub and Sub
    				1.Subscribe first and then pubish
    				2.Applicable to any communication between components
    				3.unsubscribe in componentWillUnmount
    	4.fetch
    				try {
    					const response= await fetch(`/api1/search/users2?q=${keyWord}`)
    					const data = await response.json()
    					console.log(data);
    				} catch (error) {
    					console.log('error',error);
    				}

## III. Router basic use

    		1.Clear the navigation area and display area in the web
    		2.use Link tag instead a tag in the navigation area
    					<Link to="/xxxxx">Demo</Link>
    		3.use Route tag code the path
    					<Route path='/xxxx' component={Demo}/>
    		4.Outside of <App> is wrapped by <BrowserRouter> or <HashRouter>

## IV. Route components and normal component

    		1.different syntax：
    					normal component：<Demo/>
    					route compoennt：<Route path="/demo" component={Demo}/>
    		2.different store location：
    					normal component：components
    					route component：pages
    		3.porps：
    					normal compoennt：depends on what have been code when coding in component
    					route component：three attributes are received
    										history:
    													go: ƒ go(n)
    													goBack: ƒ goBack()
    													goForward: ƒ goForward()
    													push: ƒ push(path, state)
    													replace: ƒ replace(path, state)
    										location:
    													pathname: "/about"
    													search: ""
    													state: undefined
    										match:
    													params: {}
    													path: "/about"
    													url: "/about"

## V. NavLink and packing NavLink

    		NavLink can be used to highlight routing links and specify the style name via ActiveClassName

## VI. Switch

    	1. In general, Path and Component are one-to-one.
    	2.Switch can improve routing matching efficiency (single matching).

## VII. Solution for missing page styles for multilevel path refresh

    	1.public/index.html dont use ./ use  /
    	2.public/index.html dont use ./ use  %PUBLIC_URL%
    	3.Use HashRouter

## VIII. Strict matching and fuzzy matching

    	1.The default is fuzzy matching
    	2.use srtict：<Route exact={true} path="/about" component={About}/>
    	3.Do not turn on strict matching casually.

## IX. Redirect

    	1.It is usually written at the bottom of all route registrations, and when all routes fail to match, it redirects to the route specified by Redirect
    	2.syntax：
    					<Switch>
    						<Route path="/about" component={About}/>
    						<Route path="/home" component={Home}/>
    						<Redirect to="/about"/>
    					</Switch>

## X. Nest route

    			1.When registering a child route, write the parent route's PATH value
    			2.Routs are matched in the order in which they are registered

## XI. Passing parameters to the routing component

    			1.params
    					*//Routing link(bing parameters)：<Link to='/demo/test/tom/18'}>详情</Link>
    					*//Register route：<Route path="/demo/test/:name/:age" component={Test}/>
    					*//Receive：this.props.match.params
    			2.search
    					*//Routing link(bing parameters)：<Link to='/demo/test?name=tom&age=18'}>Infor</Link>
    					*//Register route(Normal registration is required without declaration)：<Route path="/demo/test" component={Test}/>
    					*//Receive：this.props.location.search
    					*//ps：The search obtained is a urlencoded string that needs to be parsed with queryString
    			3.state
    					*//Routing link(bing parameters)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>Infor</Link>
    					*//Register route(Normal registration is required without declaration)：<Route path="/demo/test" component={Test}/>
    					*//Receive：this.props.location.state
    					*//ps：Refresh can also preserve parameters
