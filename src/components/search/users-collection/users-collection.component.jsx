import SearchUsersItem from '../search-users-item/search-users-item.component';
import './users-collection.styles.css';



const UsersCollection = ({items, underline, otherPages}) => {
	return (
		<div className='users-collection'>
			{
				items.map((item, i) => (
					<div key={i} className={`users-collection__item ${underline ? 'underline' : ''}`}>
						<SearchUsersItem otherPages={!!otherPages} item={item} />
					</div>
				))
			}
		</div>
	);
}

export default UsersCollection;