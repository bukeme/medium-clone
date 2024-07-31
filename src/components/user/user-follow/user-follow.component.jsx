import {Link} from 'react-router-dom';
import UsersCollection from '../../search/users-collection/users-collection.component';
import ArrowRight from '../../../assets/arrow-right.svg?react';
import './user-follow.styles.css';



const UserFollow = ({items, count, title}) => {
	return (
		<div className='user-follow'>
			<div className='user-follow__breadcrumb'>
				<Link to='/medium-clone/@simeon.emanuilov' className='user-follow__breadcrumb--item'>Simeon Emanuilov</Link>
				<ArrowRight className='user-follow__breadcrumb--item' />
				<span className='user-follow__breadcrumb--item'>{title}</span>
			</div>
			<h1 className='user-follow__follow-count'>{count} {title}</h1>
			<UsersCollection items={items} otherPages={true} />
		</div>
	);
}

export default UserFollow;