import './recommended-topics.styles.css';



const RecommendedTopics = () => {
	const topics = [
		'Transportation', 'Feminism', 'Language',
		'React', 'Life', 'Typescript',
		'Web Development'
	]
	return (
		<div className='recommended-topics'>
			<h4 className='recommended-topics__title'>Recommended topics</h4>
			<div className='recommended-topics__topics-container'>
				{
					topics.map(topic => (
						<span className='recommended-topics__topic article__extra-info--topic'>{topic}</span>
					))
				}
			</div>
			<p className='recommended-topics__see-more'>See more topics</p>
		</div>
	);
}

export default RecommendedTopics;