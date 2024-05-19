import SearchUsersItem from '../../search/search-users-item/search-users-item.component';
import UsersCollection from '../../search/users-collection/users-collection.component';
import './refine-recommendations-following.styles.css';



export const SeeMore = ({children}) => <span className='refine-recommendations-following__topics-see-all'>{children}</span>;

const RefineRecommendationsFollowing = () => {
	const items1 = [];
	for (let i=0; i<5; i++) {
		items1.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		})
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
		<div className='refine-recommendations-following'>
			<div className='refine-recommendations-following__section'>
				<h3 className='refine-recommendations-following__writers-count'>2 Writers</h3>
				<UsersCollection items={items1} otherPages={true} />
			</div>
			<div className='refine-recommendations-following__section'>
				<h3 className='refine-recommendations-following__topics-count'>79 Topics</h3>
				<UsersCollection items={items2} otherPages={true} />
				<SeeMore>See all(76)</SeeMore>
			</div>
		</div>
	);
}

export default RefineRecommendationsFollowing;