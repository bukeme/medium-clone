import BlogPostHeaderDropdown from '../blog-post-header-dropdown/blog-post-header-dropdown.component';
import BlogPostEngagementSummary from '../blog-post-engagement-summary/blog-post-engagement-summary.component';
import PostProfileImage from '../post-profile-image/post-profile-image.component';
import PostAuthorName from '../post-author-name/post-author-name.component';
import './blog-post-header.styles.css';



const BlogPostHeader = () => {
	return (
		<div className='blog-post-header'>
			<div className='adjust-width'>
				<h1 className='blog-post-header__title'>Top 7 Django Commands Every Developer Needs to Know</h1>
				<div className='blog-post-header__author'>
					<div className='blog-post-header__author--img-container'>
						<PostProfileImage length={45} img='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' showDropdown={true} />
					</div>
					<div className='blog-post-header__author--text'>
						<div className='blog-post-header__author--text__name--follow'>
							<PostAuthorName name='Gajanan Rajput' fs={14} />
							<span className='article__author--dot' />
							<span className='blog-post-header__author--text__follow'>Follow</span>
						</div>
						<p className='blog-post-header__author--text__date'>Apr 2, 2024</p>
					</div>
				</div>
				<div className='blog-post-header__engagement-container'>
					<BlogPostEngagementSummary />
				</div>
			</div>
		</div>
	);
}

export default BlogPostHeader;