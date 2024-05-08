import PostsGridItem from '../posts-grid-item/posts-grid-item.component';
import './posts-grid.styles.css';



const PostsGrid = () => {
	let elements = [];
	for (let i=0; i<4; i++) {
		elements.push(<PostsGridItem />);
	}
	return (
		<div class='author-posts-grid'>
			{elements}
		</div>
	);
}

export default PostsGrid;