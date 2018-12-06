import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import {Route, Link, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
 
		<div>
			<nav>
					<ul>
						<li>
							<Link to="/about">about</Link>
						</li>
					</ul>
				</nav>
				<hr />
				<Switch>
					<Route path="/" exact component={() => <h1>home</h1>}/>
					<Route path="/about" component={AboutPage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		
	
    );
  }

}


export default App;
