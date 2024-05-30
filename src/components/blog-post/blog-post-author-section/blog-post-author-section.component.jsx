import PostProfileImage from '../post-profile-image/post-profile-image.component';
import PostsGrid from '../posts-grid/posts-grid.component';
import {FollowBtn} from '../blog-post-header-dropdown/blog-post-header-dropdown.component';
import './blog-post-author-section.styles.css';


export const AuthorPostFollowBtn =(props) => (
	<div className='blog-post-author-section__author-text--btn'>
		<FollowBtn {...props} />
	</div>
);


const BlogPostAuthorSection = () => {
	return (
		<div className='blog-post-author-section'>
			<div className='adjust-width'>
				<div className='blog-post-author-section__author-text'>
					<div className='blog-post-author-section__author-text--left'>
						<PostProfileImage length={70} img='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' />
						<h3>Written by Gajanan Rajput</h3>
						<span>370 followers</span>
						<p>Coding in Python, one line at a time</p>
					</div>
					<AuthorPostFollowBtn>Follow</AuthorPostFollowBtn>
				</div>
				<div className='blog-post-author-section__author-posts'>
					<h4 className='blog-post-author-section__author-posts--header'>More from Gajanan Rajput</h4>
					<PostsGrid />
					<hr className='blog-post-author-section__author-posts--line' />
					<button className='blog-post-author-section__author-posts--see-all'>See all from Gajanan Rajput</button> 
				</div>
			</div>
			<hr className='blog-post-author-section__author-posts--line author-posts-underline' />
			<div className='adjust-width'>
				<div className='blog-post-author-section__recommendations'>
					<h4 className='blog-post-author-section__author-posts--header recommendations-header'>Recommended from Medium</h4>
					<PostsGrid />
					<hr className='blog-post-author-section__author-posts--line' />
					<button className='blog-post-author-section__author-posts--see-all'>See more recommendations</button> 
				</div>
			</div>
		</div>
	);
}

export default BlogPostAuthorSection;