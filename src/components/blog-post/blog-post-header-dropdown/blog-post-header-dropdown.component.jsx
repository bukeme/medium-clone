import './blog-post-header-dropdown.styles.css';



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
				<button className='blog-post-header-dropdown__follow--follow-btn'>Follow</button>
			</div>
		</div>
	);
}

export default BlogPostHeaderDropdown;