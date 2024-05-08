import BlogPostHeaderDropdown from '../blog-post-header-dropdown/blog-post-header-dropdown.component';
import './post-author-name.styles.css';



const PostAuthorName = ({name, fs}) => {
	return (
		<span style={{fontSize: `${fs}px`}} className='post-author-name'>
			{name}
			<BlogPostHeaderDropdown />
		</span>
	);
}

export default PostAuthorName;