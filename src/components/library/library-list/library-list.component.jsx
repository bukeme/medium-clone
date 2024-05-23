import PostsCollection from '../../search/posts-collection/posts-collection.component';
import './library-list.styles.css';



const LibraryList = () => {
	return (
		<div className='library-main'>
			<PostsCollection />
		</div>
	);
}

export default LibraryList;