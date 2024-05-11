import PostProfileImage from '../../blog-post/post-profile-image/post-profile-image.component';
import PostAuthorName from '../../blog-post/post-author-name/post-author-name.component';
import BlogPostEngagementSummary from '../../blog-post/blog-post-engagement-summary/blog-post-engagement-summary.component';
import './search-item.styles.css';



const SearchItem = () => {
	return (
		<div className='search-item'>
			<div className='search-item__author'>
				<div className='search-item__author--img'>
					<PostProfileImage length={20} img='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' showDropdown={true} />
				</div>
				<PostAuthorName name='Gajanan Rajput' fs={13} />
			</div>
			<div className='search-item__content'>
				<div className='search-item__content--text'>
					<h2 className='search-item__content--text__title'>How to write Django middleware in 10 minutes</h2>
					<p className='search-item__content--text__para'>What are middleware</p>
					<p className='search-item__content--text__date'>Oct 15, 2019</p>
					<BlogPostEngagementSummary />
				</div>
				<img className='search-item__content--img' alt='Post' src='https://miro.medium.com/v2/resize:fit:679/1*QCQqlZr6doDP-cszzpaSpw.png' />
			</div>
		</div>
	);
}

export default SearchItem;