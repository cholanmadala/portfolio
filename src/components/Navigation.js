import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className='navigation_class'>
			<Link to="/home">Home</Link>
			<Link to="/blogs">Blogs</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/projects">Projects</Link>
		</div>
	)
};

export default Navigation;
