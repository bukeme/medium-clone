import ClapIcon from '../../../assets/clap.svg?react';
import RespondIcon from '../../../assets/respond.svg?react';
import SaveIcon from '../../../assets/save.svg?react';
import './blog-post-engagement-summary.styles.css';



const BlogPostEngagementSummary = () => {
	return (
		<div className='blog-post-engagement-summary'>
			<div className='blog-post-engagement-summary__item summary-1'>
				<ClapIcon className='blog-post-engagement-summary__item--icon' />
				<span className='blog-post-engagement-summary__item--text'>273</span>
			</div>
			<div className='blog-post-engagement-summary__item summary-2'>
				<RespondIcon className='blog-post-engagement-summary__item--icon' />
				<span className='blog-post-engagement-summary__item--text'>3</span>
			</div>
			<div className='blog-post-engagement-summary__item'>
				<SaveIcon className='blog-post-engagement-summary__item--icon' />
			</div>
		</div>
	);
}

export default BlogPostEngagementSummary;