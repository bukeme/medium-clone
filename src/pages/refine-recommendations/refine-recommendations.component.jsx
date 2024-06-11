import {Routes, Route} from 'react-router-dom';
import RefineRecommendationsHeader from '../../components/refine-recommendations/header/header.component';
import RefineRecommendationsFollowing from '../../components/refine-recommendations/following/following.component';
import RefineRecommendationsReadingHistory from '../../components/refine-recommendations/reading-history/reading-history.component';
import RefineRecommendationsSuggetions from '../../components/refine-recommendations/suggestions/suggestions.component';
import './refine-recommendations.styles.css';



const RefineRecommendations = () => {
	return (
		<div className='refine-recommendations'>
			<RefineRecommendationsHeader />
			<Routes>
				<Route exact path='following' element={<RefineRecommendationsFollowing />} />
				<Route exact path='readinghistory' element={<RefineRecommendationsReadingHistory />} />
				<Route exact path='following/suggestions' element={<RefineRecommendationsSuggetions />} />
			</Routes>
		</div>
	);
}

export default RefineRecommendations;