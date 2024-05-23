import {Routes, Route} from 'react-router-dom';
import LibraryHeader from '../../components/library/library-header/library-header.component';
import LibraryList from '../../components/library/library-list/library-list.component';
import RefineRecommendationsReadingHistory from '../../components/refine-recommendations/refine-recommendations-reading-history/refine-recommendations-reading-history.component';
import './library.styles.css';



const Library = () => {
	return (
		<div className='library'>
			<LibraryHeader />
			<Routes>
				<Route path='' element={<LibraryList />} />
				<Route path='reading-history' element={<RefineRecommendationsReadingHistory />} />
			</Routes>
		</div>
	);
}

export default Library;