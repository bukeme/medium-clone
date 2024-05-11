import {useLocation} from 'react-router-dom';
import SearchItem from '../search-item/search-item.component';
import SearchUsersItem from '../search-users-item/search-users-item.component';
import ArrowDownIcon from '../../../assets/arrow-down.svg?react';
import './search-collection.styles.css';



const SearchCollection = () => {
	const {pathname} = useLocation();
	let component = pathname == '/search/posts' ? <SearchItem /> : <SearchUsersItem />;
	const elements = [];
	for (let i=0; i<5; i++) {
		elements.push(
			<div key={i} className='search-collection__item'>
				{component}
			</div>
		);
	}
	return (
		<div className='search-collection'>
			{elements}
			<div className='search-collection__show-more-container'>
				<div className='search-collection__show-more-text'>
					<span>Show more</span>
					<ArrowDownIcon className='icon' />
				</div>
			</div>
		</div>
	);
}

export default SearchCollection;