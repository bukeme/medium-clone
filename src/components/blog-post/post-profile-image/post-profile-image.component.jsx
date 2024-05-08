import BlogPostHeaderDropdown from '../blog-post-header-dropdown/blog-post-header-dropdown.component';
import './post-profile-image.styles.css';



const PostProfileImage = ({length, img, showDropdown}) => {
	return (
		<div style={{width: `${length}px`, height: `${length}px`}} className='post-profile-image'>
			<img className='post-profile-image__img' alt='post author' src={img} />
			<div className='post-profile-image__overlay' />
			{showDropdown ? <BlogPostHeaderDropdown /> : null}
		</div>
	);
}

export default PostProfileImage;