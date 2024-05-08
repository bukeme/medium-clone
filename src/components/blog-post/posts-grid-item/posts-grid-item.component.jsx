import PostProfileImage from '../post-profile-image/post-profile-image.component';
import PostAuthorName from '../post-author-name/post-author-name.component';
import BlogPostEngagementSummary from '../blog-post-engagement-summary/blog-post-engagement-summary.component';
import './posts-grid-item.styles.css';



const PostsGridItem = () => {
	return (
		<div className='posts-grid-item'>
			<img className='posts-grid-item__post-img' alt='Post' src='https://miro.medium.com/v2/resize:fit:679/1*QCQqlZr6doDP-cszzpaSpw.png' />
			<div className='posts-grid-item__author'>
				<div className='posts-grid-item__author--img'>
					<PostProfileImage length={22} img='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' showDropdown />
				</div>
				<PostAuthorName fs={12} name='Gajanan Rajput' />
			</div>
			<h4 className='posts-grid-item__post-title'>TypeError: string argument without an encoding in Python</h4>
			<p className='posts-grid-item__post-content'>Python is a powerful and flexible programming language, used widely for web development, data analysis, artificial intelligence, and many other applications.</p>
			<p className='posts-grid-item__date'>Apr 6, 2023</p>
			<BlogPostEngagementSummary />
		</div>
	);
}

export default PostsGridItem;