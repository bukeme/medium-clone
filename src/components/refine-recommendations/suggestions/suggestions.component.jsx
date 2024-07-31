import {Link} from 'react-router-dom';
import SearchUsersItem from '../../search/search-users-item/search-users-item.component';
import UsersCollection from '../../search/users-collection/users-collection.component';
import {SeeMore} from '../following/following.component';
import ExploreIcon from '../../../assets/explore-icon.svg?react';
import SlantArrowIcon from '../../../assets/slant-arrow-icon.svg?react';
import './suggestions.styles.css';



const RefineRecommendationsSuggetions = () => {
	const items1 = [];
	for (let i=0; i<5; i++) {
		items1.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		});
	}

	const items2 = [];
	for (let i=0; i<5; i++) {
		items2.push({
			name: 'Remote Work',
			storiesCount: '100K',
			writersCount: '47K'
		})
	}

	return (
		<div className='refine-recommendations-suggestions'>
			<div className='refine-recommendations-suggestions__section'>
				<h3 className='refine-recommendations-suggestions__section--title'>Who to follow</h3>
				<UsersCollection items={items1} otherPages={true} />
				<SeeMore>See more suggestions</SeeMore>
			</div>
			<div className='refine-recommendations-suggestions__section'>
				<h3 className='refine-recommendations-suggestions__section--title'>Topics to follow</h3>
				<div className='refine-recommendations-suggestions__section--people-container'>
					<Link to='/medium-clone/explore-topics' className='refine-recommendations-suggestions__explore-topics'>
						<div className='refine-recommendations-suggestions__explore-topics--icon'>
							<ExploreIcon />
						</div>
						<span className='refine-recommendations-suggestions__explore-topics--text'>Explore topics</span>
						<SlantArrowIcon />
					</Link>
					<UsersCollection items={items2} otherPages={true} />
				</div>
				<SeeMore>See more suggestions</SeeMore>
			</div>
		</div>
	);
}

export default RefineRecommendationsSuggetions;