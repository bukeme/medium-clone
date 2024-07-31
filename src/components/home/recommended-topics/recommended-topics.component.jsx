import {Link} from 'react-router-dom';
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
			<Link to='/medium-clone/explore-topics' className='recommended-topics__see-more'>See more topics</Link>
		</div>
	);
}

export default RecommendedTopics;