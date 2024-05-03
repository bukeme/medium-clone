import Article from '../article/article.component';

import './main-content.styles.css';



const MainContent = () => {
	const post = {
		img: 'https://miro.medium.com/v2/resize:fill:48:48/1*8iVO4UV4nuoZF38A1lvjng.jpeg',
		author: 'Ashutosh singh',
		date: 'Nov 13, 2023',
		title: 'Master Django ORM Advanced Concepts',
		content: 'Django ORM can seem straight forward at first but when you start doing complex queries or you want to optimize the queries, this is where it starts to get a bit confusing and complex. But don’t worry in this post will go over some intermediate and advanced ORM concepts that will allow to write complex and optimized queries.',
		topic: 'Python',
		postImg: 'https://miro.medium.com/v2/resize:fill:224:224/1*-0GldCPaHWo2PDsWUYEN5A.png'
	};
	let elements = [];
	for (let i=0; i < 5; i++) {
		elements.push(<div className='main-content__article'><Article post={post} /></div>);
	}
	return (
		<div className='main-content'>
			{elements}
		</div>
	);
}

export default MainContent;