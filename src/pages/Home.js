import React from 'react';
import Content from '../components/Content';
import GetInTouch from '../components/GetInTouch';
import Header from '../components/Header';
import Media from '../components/Media';
import data from '../data/portfolio.json';

const Home = () => {
	return (
		<div className='App'>
			{/* <div className='mobile_nav_translate'> Mobile Menu </div> */}
			<Header className="App-header" welcome={data.welcome} name={data.name} />
			<Content profile={data.profile} content={data.content} quickWords={data.quick_words} />
			<GetInTouch email={data.email} getInTouchContent={data.getInTouchContent} contactMeButtonText={data.contactMeButtonText} />
			<Media mediaData={data.socailMedia} followMeContent={data.followMeContent} />
		</div>
	);
}
export default Home;
