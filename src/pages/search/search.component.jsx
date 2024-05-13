import {Routes, Route} from 'react-router-dom';
import SearchHeader from '../../components/search/search-header/search-header.component';
import SearchCollection from '../../components/search/search-collection/search-collection.component';
import SearchTopicsCollection from '../../components/search/search-topics-collection/search-topics-collection.component';
import './search.styles.css';



const Search = () => {
	return (
		<div className='search'>
			<SearchHeader />
			<Routes>
				<Route exact path='posts' element={<SearchCollection />} />
				<Route exact path='users' element={<SearchCollection />} />
				<Route exact path='tags' element={<SearchTopicsCollection />} />
			</Routes>
		</div>
	);
}

export default Search;