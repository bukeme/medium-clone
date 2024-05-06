import './recently-saved.styles.css';



const RecentlySaved = () => {
	const savedPosts = [
		{
			title: 'Tips for Formatting Your Title and Headers',
			date: 'Oct 8, 2019'
		},
		{
			title: 'SEO tips to make your stories discoverable and grow your readership',
			date: 'Jan 28, 2020'
		}
	]
	return (
		<div className='recently-saved'>
			<h4 className='recently-saved__title recommended-topics__title'>Recently saved</h4>
			<div className='recently-saved__posts-container'>
				{
					savedPosts.map(savedPost => (
						<div className='recently-saved__post'>
							<h4 className='recently-saved__post--title who-to-follow__person--text__name'>{savedPost.title}</h4>
							<p className='recently-saved__post--date'>{savedPost.date}</p>
						</div>
					))
				}
			</div>
			<p className='recently-saved__see-more recommended-topics__see-more'>See all(2)</p>
		</div>
	);
}

export default RecentlySaved;