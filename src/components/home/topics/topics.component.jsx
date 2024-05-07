import './topics.styles.css';
import '../article/article.styles.css';



const Topics = ({topics}) => {
	return (
		<div className='topics'>
			{
				topics.map(topic => (
					<span className='topics__topic article__extra-info--topic'>{topic}</span>
				))
			}
		</div>
	);
}

export default Topics;