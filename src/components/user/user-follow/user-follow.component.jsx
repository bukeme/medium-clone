import ArrowRight from '../../../assets/arrow-right.svg?react';
import './user-follow.styles.css';



const UserFollow = () => {
	return (
		<div className='user-follow'>
			<div className='user-follow__breadcrumb'>
				<a href='#' className='user-follow__breadcrumb--item'>Simeon Emanuilov</a>
				<ArrowRight />
				<span className='user-follow__breadcrumb--item'>Following</span>
			</div>
		</div>
	);
}

export default UserFollow;