import './blog-post-header-dropdown.styles.css';



export const FollowBtn = ({action, outline, children}) => {
	const handleClick = (event) => {
		event.preventDefault();
		if (action) action();
	}
	return (
		<button onClick={handleClick} className={`blog-post-header-dropdown__follow--follow-btn ${outline ? 'outline' : ''}`}>{children}</button>
	);
}

const BlogPostHeaderDropdown = () => {
	return (
		<div className='blog-post-header-dropdown'>
			<div className='blog-post-header-dropdown__header'>
				<img className='blog-post-header-dropdown__header--img' alt='Dropdown' src='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' />
				<h4 className='blog-post-header-dropdown__header--title'>Gajanan Rajput</h4>
			</div>
			<p className='blog-post-header-dropdown__text'>Coding in python one line at a time</p>
			<div className='blog-post-header-dropdown__follow'>
				<span className='blog-post-header-dropdown__follow--followers-count'>370 followers</span>
				<FollowBtn>Follow</FollowBtn>
			</div>
		</div>
	);
}

export default BlogPostHeaderDropdown;