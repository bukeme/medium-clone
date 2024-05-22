import {Link} from 'react-router-dom';
import UsersCollection from '../../search/users-collection/users-collection.component';
import ArrowRight from '../../../assets/arrow-right.svg?react';
import './user-follow.styles.css';



const UserFollow = () => {
	const items = [];
	for (let i=0; i<5; i++) {
		items.push({
			img: 'https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg',
			name: 'Gajanan Rajput',
			text: 'Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus.'
		})
	}
	return (
		<div className='user-follow'>
			<div className='user-follow__breadcrumb'>
				<Link to='/@simeon.emanuilov' className='user-follow__breadcrumb--item'>Simeon Emanuilov</Link>
				<ArrowRight className='user-follow__breadcrumb--item' />
				<span className='user-follow__breadcrumb--item'>Following</span>
			</div>
			<h1 className='user-follow__follow-count'>60 Following</h1>
			<UsersCollection items={items} otherPages={true} />
		</div>
	);
}

export default UserFollow;