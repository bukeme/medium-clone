import SearchUsersItem from '../../search/search-users-item/search-users-item.component';
import './refine-recommendations-following.styles.css';



const RefineRecommendationsFollowing = () => {
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
			<div className='refine-recommendations-following__writer'>
				<SearchUsersItem item={item1} otherPages />
			</div>
		)
	}
	const secondElements = [];
	for (let i=0; i<5; i++) {
		secondElements.push(
			<div className='refine-recommendations-following__writer'>
				<SearchUsersItem item={item2} otherPages />
			</div>
		)
	}
	return (
		<div className='refine-recommendations-following'>
			<div className='refine-recommendations-following__section'>
				<h3 className='refine-recommendations-following__writers-count'>2 Writers</h3>
				<div className='refine-recommendations-following__writers-container'>
					{firstElements}
				</div>
			</div>
			<div className='refine-recommendations-following__section'>
				<h3 className='refine-recommendations-following__topics-count'>79 Topics</h3>
				<div className='refine-recommendations-following__topics-container'>
					{secondElements}
				</div>
				<span className='refine-recommendations-following__topics-see-all'>See all(76)</span>
			</div>
		</div>
	);
}

export default RefineRecommendationsFollowing;