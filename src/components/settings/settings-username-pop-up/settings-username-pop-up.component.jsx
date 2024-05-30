import SettingsPopUp from '../settings-pop-up/settings-pop-up.component';
import SettingsTextInput from '../settings-text-input/settings-text-input.component';


const SettingsUsernamePopUp = () => {
	return (
		<div className='settings-username-pop-up'>
			<SettingsTextInput value='@basseyukemme' helperText='medium.com/@basseyukemme' limit={[12, 30]} />
		</div>
	);
}

export default SettingsPopUp(SettingsUsernamePopUp, 'Username')