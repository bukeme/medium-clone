import './user-about.styles.css';



const UserAbout = () => {
	return (
		<div className='user-about'>
			<p>Medium member since March 2024</p>
			<div className='user-about__follow'>
				<a className='user-about__followers'>187 Followers</a>
				<span className='user-about__dot' />
				<a className='user-about__following'>60 Following</a>
			</div>
		</div>
	);
}

export default UserAbout;