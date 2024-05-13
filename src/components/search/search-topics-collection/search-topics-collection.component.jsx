import Topics from '../../home/topics/topics.component';
import SearchShowMore from '../search-show-more/search-show-more.component';
import './search-topics-collection.styles.css';



const SearchTopicsCollection = () => {
	let topics = [];
	for (let i=0; i<20; i++) {
		topics.push('Django Middleware');
	}
	return (
		<div className='search-topics-collection'>
			<Topics topics={topics} />
			<SearchShowMore />
		</div>
	);
}

export default SearchTopicsCollection;