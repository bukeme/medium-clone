import PostsCollection from '../../search/posts-collection/posts-collection.component';
import './user-home.styles.css';



const UserHome = () => {
	return (
		<div className='user-home'>
			<PostsCollection />
		</div>
	);
}

export default UserHome;