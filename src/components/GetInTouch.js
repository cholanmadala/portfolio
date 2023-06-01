import React from 'react';
import { Link } from "react-router-dom";
import './GetInTouch.css';

const GetInTouch = ({email, getInTouchContent, contactMeButtonText}) => {
	return (
		<div className='get_in_touch'>
			<button className='contact_button'>
				<Link to="/contact">{contactMeButtonText}</Link>
				</button>
			<p className='light_text'>{getInTouchContent}</p>
			<h4>{email}</h4>
		</div>
	)
}

export default GetInTouch;
