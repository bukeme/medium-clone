import BlogPostHeader from '../../components/blog-post/blog-post-header/blog-post-header.component';
import BlogPostContent from '../../components/blog-post/blog-post-content/blog-post-content.component';
import './blog-post.styles.css';



const BlogPost = () => {
	return (
		<div className='blog-post'>
			<BlogPostHeader />
			<BlogPostContent />
		</div>
	);
}

export default BlogPost;