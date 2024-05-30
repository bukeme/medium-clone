import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SettingsEmailPopUp from '../../components/settings/settings-email-pop-up/settings-email-pop-up.component';
import SettingsUsernamePopUp from '../../components/settings/settings-username-pop-up/settings-username-pop-up.component';
import SettingsProfilePopUp from '../../components/settings/settings-profile-pop-up/settings-profile-pop-up.component';
import {setPopUpNumber} from '../../redux/settings-pop-up';
import './settings.styles.css';



const Settings = () => {
	const displayPopUp = useSelector(state => state.settingsPopUp.popUpNumber);
	const dispatch = useDispatch()
	let popUpComponent = null;
	console.log(displayPopUp)
	switch (displayPopUp) {
		case 1:
			popUpComponent = <SettingsEmailPopUp />
			break;
		case 2:
			popUpComponent = <SettingsUsernamePopUp />
			break;
		case 3:
			popUpComponent = <SettingsProfilePopUp />
			break;
		default:
			popUpComponent = null;
	}
	return (
		<div className='settings'>
			<h1 className='settings__header'>Settings</h1>
			<div className='settings__items-container'>
				<div onClick={() => {dispatch(setPopUpNumber(1))}} className='settings__item'>
					<div className='settings__item--left'>
						<p className='settings__item--left__title'>Email address</p>
					</div>
					<div className='settings__item--right'>
						<p className='settings__item--right__user-info'>basseyukemme@gmail.com</p>
					</div>
				</div>
				<div onClick={() => {dispatch(setPopUpNumber(2))}} className='settings__item'>
					<div className='settings__item--left'>
						<p className='settings__item--left__title'>Username and subdomain</p>
					</div>
					<div className='settings__item--right'>
						<p className='settings__item--right__user-info'>@basseyukemme</p>
					</div>
				</div>
				<div onClick={() => {dispatch(setPopUpNumber(3))}} className='settings__item'>
					<div className='settings__item--left'>
						<p className='settings__item--left__title'>Profile information</p>
						<p className='settings__item--left__desc'>Edit your photo, name, bio, etc.</p>
					</div>
					<div className='settings__item--right'>
						<p className='settings__item--right__user-info'>Bassey Ukemme</p>
						<img className='settings__item--right__user-img' src='https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg' alt='User' />
					</div>
				</div>
				{popUpComponent}
			</div>
			<div onClick={() => {dispatch(setPopUpNumber(0))}} className={`settings__overlay ${displayPopUp ? 'active' : ''}`} />
		</div>
	);
}

export default Settings;