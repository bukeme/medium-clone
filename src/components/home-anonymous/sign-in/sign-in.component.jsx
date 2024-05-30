import SignInSignUpHOC from '../sign-in-sign-up-hoc/sign-in-sign-up-hoc.component';
import AuthMediumBtn from '../auth-medium-btn/auth-medium-btn.component';
import GoogleIcon from '../../../assets/google.svg?react';
import FacebookIcon from '../../../assets/facebook.svg?react';
import EmailIcon from '../../../assets/email.svg?react';
import './sign-in.styles.css';



const SignIn = () => {
	return (
		<div className='sign-in'>
			<h1 className='sign-in__title'>Welcome back</h1>
			<div className='sign-in__mediums'>
				<AuthMediumBtn text='Sign in with Google' icon={<GoogleIcon />} />
				<AuthMediumBtn text='Sign in with Facebook' icon={<FacebookIcon />} />
				<AuthMediumBtn text='Sign in with email' icon={<EmailIcon />} />
			</div>
			<p className='sign-in__sign-up'>No account? <a href='#'>Create One</a></p>
		</div>
	);
}

export default SignInSignUpHOC(SignIn);