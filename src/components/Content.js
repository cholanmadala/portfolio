import React from 'react';
import './Content.css';

export const Profile = React.memo(({profile, content}) => {
	return (
		<h2>
			A <span className='profile'>{profile}</span> {content}
		</h2>
	)
});

const Content = React.memo((props) => {

	return (
		<div className="content">
			<Profile profile={props.profile} content={props.content}/>
			<p>
				{props.quickWords}
			</p>
		</div>
	)
});

export default Content;
