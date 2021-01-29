import React from 'react';
import { Route } from 'react-router-dom';
import './assets/scss/app.scss';
import { Footer, Header, Menu, Subscribe } from './components';
import { AboutUs, Article, ContactUs, Home, Rubrics } from './pages';

function App() {
	return (
		<div>
			<Header />
			<Menu />
			<main>
				<Route path='/' component={Home} exact />
				<Route path='/rubrics' component={Rubrics} exact />
				<Route path='/about-us' component={AboutUs} exact />
				<Route path='/contact-us' component={ContactUs} exact />
				<Route path='/article' component={Article} exact />
			</main>
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
