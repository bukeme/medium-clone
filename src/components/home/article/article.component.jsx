import SaveIcon from '../../../assets/save.svg?react';
import './article.styles.css';



const Article = ({post}) => {
	const {author, img, date, postImg, topic, title, content} = post;
	return (
		<div className='article'>
			<div className='article__author'>
				<img className='article__author--img' alt='author' src={img} />
				<span className='article__author--name'>{author}</span>
				<span className='article__author--dot' />
				<span className='article__author__date'>{date}</span> 
			</div>
			<div className='article__post--img'>
				<div className='article__post'>
					<div className='article__post--content'>
						<h3 className='article__post--title'>{title}</h3>
						<p className='article__post--para'>{content}</p>
					</div>
					<div className='article__extra-info'>
						<span className='article__extra-info--topic'>{topic}</span>
						<SaveIcon className='article__extra-info--save-icon' />
					</div>
				</div>
				<img className='article__img' alt='post' src={postImg} />
			</div>
		</div>
	);
}

export default Article;