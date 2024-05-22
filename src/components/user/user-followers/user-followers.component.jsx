import UserFollow from '../user-follow/user-follow.component';
import './user-followers.styles.css';



const UserFollowers = () => {
	const items = [];
	for (let i=0; i<5; i++) {
		items.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		})
	}
	return (
		<div className='user-followers'>
			<UserFollow items={items} title='Followers' count={204} />
		</div>
	);
}

export default UserFollowers;