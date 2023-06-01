import React from "react";
import './MobileNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNav = ({onClickHandler}) => {
	const toggleMenu = (ev) => {
		onClickHandler(ev.target);
	}
	return (
		<div className='mobile_nav_bar'>
			<div onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</div>
	)
};

export default MobileNav;
