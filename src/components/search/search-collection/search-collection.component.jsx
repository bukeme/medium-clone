import {useLocation} from 'react-router-dom';
import SearchItem from '../search-item/search-item.component';
import SearchUsersItem from '../search-users-item/search-users-item.component';
import SearchShowMore from '../search-show-more/search-show-more.component';
import './search-collection.styles.css';



const SearchCollection = () => {
	const {pathname} = useLocation();
	const item = {
		img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
		name: 'Gajanan Rajput',
		text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
	}
	let component = pathname == '/search/posts' ? <SearchItem /> : <SearchUsersItem item={item} />;
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
			<SearchShowMore />
		</div>
	);
}

export default SearchCollection;