import './settings-text-input.styles.css';



const SettingsTextInput = ({label, value, helperText, limit}) => {
	return (
		<div className='settings-text-input'>
			{label && <p className='settings-text-input__label'>{label}</p>}
			<input type={`${label === 'Email' ? 'email' : 'text'}`} defaultValue={value} className='settings-text-input__input' />
			{
				helperText &&
				<div className='settings-text-input__helper'>
					<span className='settings-text-input__helper--text'>{helperText}</span>
					{
						limit &&
						<span className='settings-text-input__helper--limit'>
							<span className='settings-text-input__helper--limit__count'>{limit[0]}</span>
							/{limit[1]}
						</span>
					}
				</div>
			}
		</div>
	);
}

export default SettingsTextInput;