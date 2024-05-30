import SettingsPopUp from '../settings-pop-up/settings-pop-up.component';
import SettingsTextInput from '../settings-text-input/settings-text-input.component';


const SettingsEmailPopUp = () => {
	return (
		<div className='settings-email-pop-up'>
			<SettingsTextInput value='basseyukemme@gmail.com' helperText='You can sign into Medium with this email address.' />
		</div>
	);
}

export default SettingsPopUp(SettingsEmailPopUp, 'Email address')