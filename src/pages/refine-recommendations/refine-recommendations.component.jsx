import {Routes, Route} from 'react-router-dom';
import RefineRecommendationsHeader from '../../components/refine-recommendations/refine-recommendations-header/refine-recommendations-header.component';
import RefineRecommendationsFollowing from '../../components/refine-recommendations/refine-recommendations-following/refine-recommendations-following.component';
import RefineRecommendationsReadingHistory from '../../components/refine-recommendations/refine-recommendations-reading-history/refine-recommendations-reading-history.component';
import './refine-recommendations.styles.css';



const RefineRecommendations = () => {
	return (
		<div className='refine-recommendations'>
			<RefineRecommendationsHeader />
			<Routes>
				<Route path='following' element={<RefineRecommendationsFollowing />} />
				<Route path='readinghistory' element={<RefineRecommendationsReadingHistory />} />
			</Routes>
		</div>
	);
}

export default RefineRecommendations;