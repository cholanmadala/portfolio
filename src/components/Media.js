import React from 'react';
import './Media.css';

const Media = ({ mediaData, followMeContent }) => {
	const getMedia = mediaData.map(element => {
		return (
			<li key={element[0]}><a href={element[1]} >{element[0]}</a></li>
		)
	});
	return (
		<div className='media_content'>
			<p className='light_text'>{followMeContent}</p>
			<ul className='media_list'>
				{getMedia}
			</ul>
		</div>
	)
}

export default Media;
