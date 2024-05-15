import SearchIcon from '../../../assets/search-icon.svg?react';
import './explore-topics-page.styles.css';



const ExploreTopicsPage = () => {
	return (
		<div className='explore-topics-page'>
			<h1 className='explore-topics-page__title'>Explore topics</h1>
			<div className='nav__left--input explore-topics-page__input'>
				<input type='text' placeholder='Search all topics' />
				<SearchIcon className='nav__left--input__search-icon explore-topics-page__search-icon' />
			</div>
			<hr />
		</div>
	);
}

export default ExploreTopicsPage;