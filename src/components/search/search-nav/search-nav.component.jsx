import {Link, useLocation} from 'react-router-dom';
import './search-nav.styles.css';



const SearchNav = ({links}) => {
	const {pathname} = useLocation();
	return (
		<div className='search-nav'>
			{
				links.map(({path, text}) => (
					<div className={`search-nav__item ${pathname === path ? 'active' : ''}`}>
						<span>
							<Link to={path}>{text}</Link>
						</span>
					</div>
				))
			}
		</div>
	);
}

export default SearchNav;