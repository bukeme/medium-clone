import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import NotificationIcon from '../../assets/notification-icon.svg?react';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '../../assets/search-icon.svg?react';
import WriteIcon from '../../assets/write-icon.svg?react';
import NavMenu from '../nav-menu/nav-menu.component';
import './nav.styles.css';



const Nav = () => {
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/search/posts?query=' + event.target.elements[0].value);
	}
	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<Link to='/medium-clone/'>
						<Logo className='logo' />
					</Link>
					<form onSubmit={handleSubmit} className='nav__left--input'>
						<input type='text' placeholder='Search' />
						<SearchIcon className='nav__left--input__search-icon' />
					</form>
				</div>
				<div className='nav__right'>
					<SearchIcon className='nav__right--search-icon mobile' />
					<div className='nav__right--write mobile'>
						<WriteIcon className='write-icon' />
						<Link to='/medium-clone/new-story'>Write</Link>
					</div>
					<NotificationIcon className='nav__right--notification-icon' />
					<NavMenu />
				</div>
			</div>
			<hr className='nav-line' />
		</>
	);
}

export default Nav;