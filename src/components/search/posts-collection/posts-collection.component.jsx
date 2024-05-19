import SearchItem from '../search-item/search-item.component';
import './posts-collection.styles.css';



const PostsCollection = () => {
	const elements = [];
	for (let i=0; i<5; i++) {
		elements.push(
			<div key={i} className='posts-collection__item'>
				<SearchItem />
			</div>
		);
	}
	return (
		<div className='posts-collection'>
			{elements}
		</div>
	);
}

export default PostsCollection;