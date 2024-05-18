import {Link} from 'react-router-dom';
import './who-to-follow.styles.css';



const WhoToFollow = () => {
	const people = [
		{
			img: 'https://miro.medium.com/v2/resize:fill:32:32/1*ePzYrDdEQnxR48zdk4L6CQ.png',
			name: 'Dennis Ivy',
			overview: 'YouTuber, contributor at @traversymedia , software developer at @appwrite and online instructor.'
		},
		{
			img: 'https://miro.medium.com/v2/resize:fill:32:32/2*6hvhJMsNdJ2MWbPuIJqTug.jpeg',
			name: 'Leanne Z',
			overview: 'Youtube @CodingBFF'
		},
		{
			img: 'https://miro.medium.com/v2/resize:fill:32:32/1*1fQjPI8qFJLLHbtAWk-6sA.jpeg',
			name: 'Paige Niedringhaus',
			overview: 'Staff Software Engineer at Blues, previously a digital marketer. Technical writer &amp; speaker. Co-host of Front-end Fire &amp; LogRocket podcasts'
		}
	];
	return (
		<div className='who-to-follow'>
			<h4 className='who-to-follow__title recommended-topics__title'>Who to follow</h4>
			<div className='who-to-follow__people-container'>
				{
					people.map(person => (
						<div className='who-to-follow__person'>
							<img className='who-to-follow__person--img' alt='Person' src={person.img} />
							<div className='who-to-follow__person--text'>
								<h4 className='who-to-follow__person--text__name'>{person.name}</h4>
								<p className='who-to-follow__person--text__overview'>{person.overview}</p>
							</div>
							<button className='who-to-follow__person--follow-btn'>Follow</button>
						</div>
					))
				}
			</div>
			<Link to='/me/following/suggestions' className='who-to-follow__see-more recommended-topics__see-more'>See more suggestions</Link>
		</div>
	);
}

export default WhoToFollow;