import SearchItem from '../../search/search-item/search-item.component';
import PostsCollection from '../../search/posts-collection/posts-collection.component';
import './reading-history.styles.css';



const RefineRecommendationsReadingHistory = () => {
	return (
		<div className='refine-recommendations-reading-history'>
			<div className='refine-recommendations-reading-history__clear-history'>
				<span>You can clear your reading history for a fresh start.</span>
				<button>Clear history</button>
			</div>
			<PostsCollection />
		</div>
	);
}

export default RefineRecommendationsReadingHistory;