import SettingsPopUp from '../settings-pop-up/settings-pop-up.component';
import SettingsTextInput from '../settings-text-input/settings-text-input.component';
import './settings-profile-pop-up.styles.css';



const SettingsProfilePopUp = () => {
	return (
		<div className='settings-profile-pop-up'>
			<div className='settings-profile-pop-up__img-input-container'>
				<p className='settings-profile-pop-up__img-input-label'>Photo</p>
				<div className='settings-profile-pop-up__img-input-row'>
					<img className='settings-profile-pop-up__img-input-row--img' alt='Profile' src='https://miro.medium.com/v2/resize:fill:80:80/1*QTaL480nMIDWYED09PbN0Q.jpeg' />
					<div className='settings-profile-pop-up__img-input-row--right'>
						<div className='settings-profile-pop-up__img-input-row--right__btns'>
							<div className='settings-profile-pop-up__img-input'>
								<input type='file' id='settings-profile-pop-up__img-input--field' hidden />
								<label for='settings-profile-pop-up__img-input--field'>Update</label>
							</div>
							<span className='settings-profile-pop-up__remove-btn'>Remove</span>
						</div>
						<p className='settings-profile-pop-up__img-input--helper-text'>Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.</p>
					</div>
				</div>
			</div>
			<SettingsTextInput label='Name*' value='Bassey Ukemme' helperText='Appears on your Profile page, as your byline, and in your responses.' limit={[13, 50]} />
			<SettingsTextInput label='Bio' value='' helperText='Appears on your Profile and next to your stories.' limit={[0, 160]} />
		</div>
	);
}

export default SettingsPopUp(SettingsProfilePopUp, 'Profile Information');