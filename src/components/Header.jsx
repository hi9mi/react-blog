import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<div className='logo'>
						<h3>
							<Link to='/' className='a__logo'>
								Beauty Blog React
							</Link>
						</h3>
					</div>
					<Button requestCall>
						<Link to='/contact-us'>
							<div className='number'>
								<p>+7 777 719 28 86</p>
							</div>
							<span className='btn btn-request__call'>Заказать звонок</span>
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
