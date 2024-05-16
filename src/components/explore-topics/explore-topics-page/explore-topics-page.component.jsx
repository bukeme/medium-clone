import SearchIcon from '../../../assets/search-icon.svg?react';
import './explore-topics-page.styles.css';
import '../../home/recommended-topics/recommended-topics.styles.css';



const ExploreTopicsPage = () => {
	const topics = [];
	for (let i=0; i<20; i++) {
		topics.push('Content Marketing');
	}
	return (
		<div className='explore-topics-page'>
			<h1 className='explore-topics-page__title'>Explore topics</h1>
			<div className='nav__left--input explore-topics-page__input'>
				<input type='text' placeholder='Search all topics' />
				<SearchIcon className='nav__left--input__search-icon explore-topics-page__search-icon' />
			</div>
			<hr className='explore-topics-page__horizontal-line' />
			<h2 className='explore-topics-page__all-topics-title'>All topics</h2>
			<div className='explore-topics-page__topics-container'>
				{
					topics.map(topic => <span className='explore-topics-page__topic'>{topic}</span>)
				}
			</div>
			<div className='explore-topics-page__see-more-container'>
				<span className='explore-topics-page__see-more recommended-topics__see-more'>See more</span>
			</div>
		</div>
	);
}

export default ExploreTopicsPage;