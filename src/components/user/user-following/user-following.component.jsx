import UserFollow from '../user-follow/user-follow.component';
import './user-following.styles.css';



const UserFollowing = () => {
	const items = [];
	for (let i=0; i<5; i++) {
		items.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		})
	}
	return (
		<div className='user-following'>
			<UserFollow items={items} title='Following' count={60} />
		</div>
	);
}

export default UserFollowing;