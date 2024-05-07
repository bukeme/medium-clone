import Topics from '../topics/topics.component';
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
			<Topics topics={topics} />
			<p className='recommended-topics__see-more'>See more topics</p>
		</div>
	);
}

export default RecommendedTopics;