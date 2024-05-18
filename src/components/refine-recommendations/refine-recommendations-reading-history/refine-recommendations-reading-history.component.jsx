import SearchItem from '../../search/search-item/search-item.component';
import './refine-recommendations-reading-history.styles.css';



const RefineRecommendationsReadingHistory = () => {
	const elements = [];
	for (let i=0; i<5; i++) {
		elements.push(
			<div key={i} className='refine-recommendations-reading-history__history-item'>
				<SearchItem />
			</div>
		);
	}
	return (
		<div className='refine-recommendations-reading-history'>
			<div className='refine-recommendations-reading-history__clear-history'>
				<span>You can clear your reading history for a fresh start.</span>
				<button>Clear history</button>
			</div>
			{elements}
		</div>
	);
}

export default RefineRecommendationsReadingHistory;