import Logo from '../../assets/logo.svg?react';
import NotificationIcon from '../../assets/notification-icon.svg?react';
import SearchIcon from '../../assets/search-icon.svg?react';
import WriteIcon from '../../assets/write-icon.svg?react';
import placeholderImage from '../../assets/placeholder.jpg';
import './nav.styles.css';



const Nav = () => {
	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<Logo className='logo' />
					<div className='nav__left--input'>
						<input type='text' placeholder='Search' />
						<SearchIcon className='nav__left--input__search-icon' />
					</div>
				</div>
				<div className='nav__right'>
					<div className='nav__right--write'>
						<WriteIcon className='write-icon' />
						<span>Write</span>
					</div>
					<NotificationIcon className='nav__right--notification-icon' />
					<div className='nav__right--user-image'>
						<img src={placeholderImage} alt='User' />
					</div>
				</div>
			</div>
			<hr className='nav-line' />
		</>
	);
}

export default Nav;