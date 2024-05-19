import SearchShowMore from '../search-show-more/search-show-more.component';
import PostsCollection from '../posts-collection/posts-collection.component';
import './search-collection.styles.css';



const SearchCollection = () => {
	return (
		<div className='search-collection'>
			<PostsCollection />
			<SearchShowMore />
		</div>
	);
}

export default SearchCollection;