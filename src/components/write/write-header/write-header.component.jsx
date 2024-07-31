import {Link} from 'react-router-dom';
import NavMenu from '../../nav-menu/nav-menu.component';
import {FollowBtn} from '../../blog-post/blog-post-header-dropdown/blog-post-header-dropdown.component';
import NotificationIcon from '../../../assets/notification-icon.svg?react';
import Logo from '../../../assets/logo.svg?react';
import './write-header.styles.css';



const WriteHeader = () => {
	return (
		<div className='write-header'>
			<div className='write-header__left'>
				<Link to='/medium-clone/'>
					<Logo className='write-header__left--logo-icon' />
				</Link>
				<span className='write-header__left--draft-text'>Draft</span>
			</div>
			<div className='write-header__right'>
				<FollowBtn>Publish</FollowBtn>
				<FollowBtn>Save Draft</FollowBtn>
				<NotificationIcon className='write-header__right--notification-icon' />
				<NavMenu />
			</div>
		</div>
	);
}

export default WriteHeader;