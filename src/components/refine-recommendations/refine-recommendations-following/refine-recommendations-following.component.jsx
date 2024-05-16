import SearchUsersItem from '../../search/search-users-item/search-users-item.component';
import './refine-recommendations-following.styles.css';



const RefineRecommendationsFollowing = () => {
	const elements = [];
	for (let i=0; i<5; i++) {
		elements.push(
			<div className='refine-recommendations-following__writer'>
				<SearchUsersItem className='test' otherPages />
			</div>
		)
	}
	return (
		<div className='refine-recommendations-following'>
			<h3 className='refine-recommendations-following__writers-count'>2 Writers</h3>
			<div className='refine-recommendations-following__writers-container'>
				{elements}
			</div>
		</div>
	);
}

export default RefineRecommendationsFollowing;