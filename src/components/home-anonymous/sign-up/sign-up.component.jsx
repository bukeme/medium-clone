import SignInSignUpHOC from '../sign-in-sign-up-hoc/sign-in-sign-up-hoc.component';
import AuthMediumBtn from '../auth-medium-btn/auth-medium-btn.component';
import GoogleIcon from '../../../assets/google.svg?react';
import FacebookIcon from '../../../assets/facebook.svg?react';
import EmailIcon from '../../../assets/email.svg?react';
import '../sign-in/sign-in.styles.css';



const SignUp = () => {
	return (
		<div className='sign-in'>
			<h1 className='sign-in__title'>Join Medium</h1>
			<div className='sign-in__mediums'>
				<AuthMediumBtn text='Sign up with Google' icon={<GoogleIcon />} />
				<AuthMediumBtn text='Sign up with Facebook' icon={<FacebookIcon />} />
				<AuthMediumBtn text='Sign up with email' icon={<EmailIcon />} />
			</div>
			<p className='sign-in__sign-up'>Already have an account? <a href='#'>Sign in</a></p>
		</div>
	);
}

export default SignInSignUpHOC(SignUp);