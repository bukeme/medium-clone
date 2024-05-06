import './blog-post-header.styles.css';



const BlogPostHeader = () => {
	return (
		<div className='blog-post-header adjust-width'>
			<h1 className='blog-post-header__title'>Top 7 Django Commands Every Developer Needs to Know</h1>
			<div className='blog-post-header__author'>
				<div className='blog-post-header__author--img-container'>
					<img className='blog-post-header__author--img' alt='post author' src='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' />
					<div className='blog-post-header__author--overlay' />
				</div>
				<div className='blog-post-header__author--text'>
					<div className='blog-post-header__author--text__name--follow'>
						<span className='blog-post-header__author--text__name'>Gajanan Rajput</span>
						<span className='article__author--dot' />
						<span className='blog-post-header__author--text__follow'>Follow</span>
					</div>
					<p className='blog-post-header__author--text__date'>Apr 2, 2024</p>
				</div>
			</div>
		</div>
	);
}

export default BlogPostHeader;