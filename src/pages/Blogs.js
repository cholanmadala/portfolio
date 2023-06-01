import React from "react";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
	return (
		<div>
			<Navigation />
			<h3>Blogs Me!</h3>
			<FontAwesomeIcon icon={faCoffee} />
			<FontAwesomeIcon icon={faBars} />
		</div>
	)
}
export default Blogs;
