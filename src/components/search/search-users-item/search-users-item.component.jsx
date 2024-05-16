import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import './search-users-item.styles.css';



const SearchUsersItem = ({otherPages}) => {
	return (
		<div className={`search-users-item ${otherPages ? 'other-pages' : ''}`}>
			<img className='search-users-item__img' alt='User' src='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' />
			<div className='search-users-item__user'>
				<h5 className={`search-users-item__user--name ${otherPages ? 'other-pages' : ''}`}>Gajanan Rajput</h5>
				<p className={`search-users-item__user--overview ${otherPages ? 'other-pages' : ''}`}>Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.</p>
			</div>
			<span className={`search-users-item__follow-btn ${otherPages ? 'other-pages' : ''}`}>
				<AuthorPostFollowBtn>Following</AuthorPostFollowBtn>
			</span>
		</div>
	);
}

export default SearchUsersItem;