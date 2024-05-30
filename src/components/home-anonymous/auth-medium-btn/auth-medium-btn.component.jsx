import './auth-medium-btn.styles.css';



const AuthMediumBtn = ({icon, text}) => {
	return (
		<div className='auth-medium-btn'>
			<button className='auth-medium-btn__btn'>{text}</button>
			<div className='auth-medium-btn__icon'>
				{icon}
			</div>
		</div>
	);
}

export default AuthMediumBtn;