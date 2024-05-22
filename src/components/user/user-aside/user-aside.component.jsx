import {Link} from 'react-router-dom';
import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import PostProfileImage from '../../blog-post/post-profile-image/post-profile-image.component';
import PostAuthorName from '../../blog-post/post-author-name/post-author-name.component';
import './user-aside.styles.css';



const UserAside = () => {
	const following = [];
	for(let i=0; i<5; i++) {
		following.push({
			name: 'Gajanan Rajput',
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg'
		})
	}
	return (
		<div className='user-aside'>
			<div className='user-aside__profile-img'>
				<a href='#'>
					<img src='https://miro.medium.com/v2/resize:fill:88:88/1*1TQtojabwYxxlTQ-dKtnqw.jpeg' alt='Profile' />
				</a>
			</div>
			<h3 className='user-aside__name'>
				<a href='#'>Simeon Emanuilov</a>
			</h3>
			<p className='user-aside__followers'>
				<a href='#'>193 Followers</a>
			</p>
			<p className='user-aside__overview'>Senior Backend Engineer in Machine Learning and Big Data space | Sharing knowledge for Python & Go programming, Software architecture, Machine Learning & AI</p>
			<AuthorPostFollowBtn>Follow</AuthorPostFollowBtn>
			<h3 className='user-aside__following-title'>Following</h3>
			<div className='user-aside__following-container'>
				{
					following.map(user => (
						<div className='user-aside__following'>
							<PostProfileImage img={user.img} length={22} showDropdown={true} />
							<div className='user-aside__following--name'>
								<PostAuthorName name={user.name} fs={13} />
							</div>
						</div>
					))
				}
			</div>
			<Link to='/@simeon.emanuilov/following' className='user-aside__following--see-all'>See all(60)</Link>
		</div>
	);
}

export default UserAside;