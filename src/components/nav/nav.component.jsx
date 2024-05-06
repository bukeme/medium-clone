import {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import NotificationIcon from '../../assets/notification-icon.svg?react';
import SearchIcon from '../../assets/search-icon.svg?react';
import WriteIcon from '../../assets/write-icon.svg?react';
import placeholderImage from '../../assets/placeholder.jpg';
import NavDropdown from '../nav-dropdown/nav-dropdown.component';
import './nav.styles.css';



const Nav = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<Link to='/'>
						<Logo className='logo' />
					</Link>
					<div className='nav__left--input'>
						<input type='text' placeholder='Search' />
						<SearchIcon className='nav__left--input__search-icon' />
					</div>
				</div>
				<div className='nav__right'>
					<SearchIcon className='nav__right--search-icon mobile' />
					<div className='nav__right--write mobile'>
						<WriteIcon className='write-icon' />
						<span>Write</span>
					</div>
					<NotificationIcon className='nav__right--notification-icon' />
					<div onClick={() => {setShowDropdown(!showDropdown)}} className='nav__right--user-image'>
						<img src={placeholderImage} alt='User' />
						{
							showDropdown ?
							<NavDropdown /> :
							null
						}
					</div>
				</div>
			</div>
			<hr className='nav-line' />
		</>
	);
}

export default Nav;