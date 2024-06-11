import SearchNav from '../../search/search-nav/search-nav.component';
import './header.styles.css';



const RefineRecommendationsHeader = () => {
	const links = [
		{
			path: '/me/following',
			text: 'Following'
		},
		{
			path: '/me/readinghistory',
			text: 'Reading History'
		},
		{
			path: '/me/following/suggestions',
			text: 'Suggestions'
		},
	]
	return (
		<div className='refine-recommendations-header'>
			<h1 className='refine-recommendations-header__title'>Refine recommendations</h1>
			<p className='refine-recommendations-header__para'>Adjust recommendations by updating what you’re following, your reading history, and who you’ve muted.</p>
			<SearchNav links={links} />
		</div>
	);
}

export default RefineRecommendationsHeader;