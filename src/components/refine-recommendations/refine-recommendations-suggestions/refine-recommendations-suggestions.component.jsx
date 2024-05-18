import {Link} from 'react-router-dom';
import SearchUsersItem from '../../search/search-users-item/search-users-item.component';
import {SeeMore} from '../refine-recommendations-following/refine-recommendations-following.component';
import ExploreIcon from '../../../assets/explore-icon.svg?react';
import SlantArrowIcon from '../../../assets/slant-arrow-icon.svg?react';
import './refine-recommendations-suggestions.styles.css';



const RefineRecommendationsSuggetions = () => {
	const item1 = {
		img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
		name: 'Gajanan Rajput',
		text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
	}

	const item2 = {
		name: 'Remote Work',
		storiesCount: '100K',
		writersCount: '47K'
	}
	const firstElements = [];
	for (let i=0; i<5; i++) {
		firstElements.push(
			<div className='refine-recommendations-suggestions__section--item'>
				<SearchUsersItem item={item1} otherPages />
			</div>
		)
	}
	const secondElements = [];
	for (let i=0; i<5; i++) {
		secondElements.push(
			<div className='refine-recommendations-suggestions__section--item'>
				<SearchUsersItem item={item2} otherPages />
			</div>
		)
	}

	return (
		<div className='refine-recommendations-suggestions'>
			<div className='refine-recommendations-suggestions__section'>
				<h3 className='refine-recommendations-suggestions__section--title'>Who to follow</h3>
				<div className='refine-recommendations-suggestions__section--people-container'>
					{firstElements}
				</div>
				<SeeMore>See more suggestions</SeeMore>
			</div>
			<div className='refine-recommendations-suggestions__section'>
				<h3 className='refine-recommendations-suggestions__section--title'>Topics to follow</h3>
				<div className='refine-recommendations-suggestions__section--people-container'>
					<Link to='/explore-topics' className='refine-recommendations-suggestions__explore-topics'>
						<div className='refine-recommendations-suggestions__explore-topics--icon'>
							<ExploreIcon />
						</div>
						<span className='refine-recommendations-suggestions__explore-topics--text'>Explore topics</span>
						<SlantArrowIcon />
					</Link>
					{secondElements}
				</div>
				<SeeMore>See more suggestions</SeeMore>
			</div>
		</div>
	);
}

export default RefineRecommendationsSuggetions;