import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import {Route, Link, Switch} from 'react-router-dom'
import homePage from './components/homePage'
class App extends Component {
  render() {
    return (
 
		<div>
			<nav>
					<ul>
						<li>
							<Link to = "/">Home</Link>
						</li>
						<li>
							<Link to="/users">users</Link>
						</li>
						<li>
							<Link to="/about">about</Link>
						</li>
					
					</ul>
				</nav>
				<hr />
				<Switch>
					<Route path="/" exact component={homePage}/>
					<Route path="/about" component={AboutPage}/>
					<Route path="/users" exact component= {()=><h1>Hi general user</h1>}/>
					<Route path="/users/:userid" component={({match})=> {
						return <h1>hello user {match.params.userid}</h1>
					}}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		
	
    );
  }

}


export default App;
