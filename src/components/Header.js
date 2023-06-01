import React from 'react';
import './Header.css';
import MobileNav from './MobileNav';
import icon from '../images/profile.png';
import {useState} from 'react';

const Header = (props) => {

	const {open, doOpen} = useState(false);

	const mobileMenuClickHandler = (data) => {
		doOpen(!open);
		console.log(open);
	}
	return (
		<div>
			<MobileNav onClickHandler={mobileMenuClickHandler}/>
			<div className='header'>
				<h2> {props.welcome} {props.name}</h2>
				<img src={icon} alt='icon' />
			</div>
		</div>
	);
}
export default Header;
