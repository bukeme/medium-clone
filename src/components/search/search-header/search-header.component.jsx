import {Link, useLocation} from 'react-router-dom';
import './search-header.styles.css';



const SearchHeader = () => {
	const {pathname} = useLocation();
	return (
		<div className='search-header'>
			<h1 className='search-header__title'><span>Results for</span> django middleware</h1>
			<div className='search-header__nav'>
				<div className={`search-header__nav--item ${pathname == '/search/posts' ? 'active' : ''}`}>
					<span>
						<Link to='/search/posts'>Stories</Link>
					</span>
				</div>
				<div className={`search-header__nav--item ${pathname == '/search/users' ? 'active' : ''}`}>
					<span>
						<Link to='/search/users'>People</Link>
					</span>
				</div>
				<div className={`search-header__nav--item ${pathname == '/search/tags' ? 'active' : ''}`}>
					<span>
						<Link to='/search/tags'>Topics</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default SearchHeader;