import ProfileIcon from '../../assets/profile.svg?react';
import LibraryIcon from '../../assets/library.svg?react';
import StoryIcon from '../../assets/story.svg?react';
import StatsIcon from '../../assets/stats.svg?react';
import WriteIcon from '../../assets/write-icon.svg?react';

import './nav-dropdown.styles.css';


const NavDropdown = () => {
	return (
		<div className='nav-dropdown'>
			<div className='nav-dropdown__items-container mobile'>
				<div className='nav-dropdown__items-container--item'>
					<WriteIcon className='nav-dropdown__items-container--item__icon' />
					<span>Write</span>
				</div>
			</div>
			<div className='nav-dropdown__items-container'>
				<div className='nav-dropdown__items-container--item'>
					<ProfileIcon className='nav-dropdown__items-container--item__icon' />
					<span>Profile</span>
				</div>
				<div className='nav-dropdown__items-container--item'>
					<LibraryIcon className='nav-dropdown__items-container--item__icon' />
					<span>Library</span>
				</div>
				<div className='nav-dropdown__items-container--item'>
					<StoryIcon className='nav-dropdown__items-container--item__icon' />
					<span>Stories</span>
				</div>
				<div className='nav-dropdown__items-container--item'>
					<StatsIcon className='nav-dropdown__items-container--item__icon' />
					<span>Stats</span>
				</div>
			</div>
			<div className='nav-dropdown__items-container'>
				<div className='nav-dropdown__items-container--item'>
					<span>Settings</span>
				</div>
			</div>
			<div className='nav-dropdown__items-container'>
				<div className='nav-dropdown__items-container--item'>
					<span>Signout</span>
				</div>
			</div>
		</div>
	);
}

export default NavDropdown;