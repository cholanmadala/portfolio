import React from "react";
import Navigation from "../components/Navigation";
import Media from "../components/Media";

import data from '../data/portfolio.json';

const Contact = () => {
	return (
		<React.Fragment>
			<Navigation />
			<h3>Contact Me!</h3>
			<Media mediaData={data.socailMedia} followMeContent={data.followMeContent} />
		</React.Fragment>
	)
}
export default Contact;
