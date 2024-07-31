import {Link, useLocation} from 'react-router-dom';
import SearchNav from '../search-nav/search-nav.component';
import './search-header.styles.css';



const SearchHeader = () => {
	const {pathname} = useLocation();
	const links = [
		{
			path: '/medium-clone/search/posts',
			text: 'Stories'
		},
		{
			path: '/medium-clone/search/users',
			text: 'People'
		},
		{
			path: '/medium-clone/search/tags',
			text: 'Topics'
		},
	]
	return (
		<div className='search-header'>
			<h1 className='search-header__title'><span>Results for</span> django middleware</h1>
			<SearchNav links={links} />
		</div>
	);
}

export default SearchHeader;