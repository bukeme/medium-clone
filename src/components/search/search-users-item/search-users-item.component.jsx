import './search-users-item.styles.css';
import '../../blog-post/blog-post-author-section/blog-post-author-section.styles.css';
import '../../blog-post/blog-post-header-dropdown/blog-post-header-dropdown.styles.css';



const SearchUsersItem = () => {
	return (
		<div className='search-users-item'>
			<img className='search-users-item__img' alt='User' src='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' />
			<div className='search-users-item__user'>
				<h5 className='search-users-item__user--name'>Gajanan Rajput</h5>
				<p className='search-users-item__user--overview'>Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.</p>
			</div>
			<button className='blog-post-author-section__author-text--btn blog-post-header-dropdown__follow--follow-btn'>Follow</button>
		</div>
	);
}

export default SearchUsersItem;