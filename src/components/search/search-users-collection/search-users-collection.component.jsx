import UsersCollection from '../users-collection/users-collection.component';
import SearchShowMore from '../search-show-more/search-show-more.component';
import './search-users-collection.styles.css';



const SearchUsersCollection = () => {
	const items = [];
	for (let i=0; i<5; i++) {
		items.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		});
	}
	return (
		<div className='search-users-collection'>
			<UsersCollection items={items} underline={true} />
			<SearchShowMore />
		</div>
	);
}

export default SearchUsersCollection;