import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo.svg?react';
import FormGroup from '../form-group/form-group.component';
import {AuthorPostFollowBtn} from '../../blog-post/blog-post-author-section/blog-post-author-section.component';
import './sign-in-sign-up.styles.css';



const SignInSignUp = () => {
	const formFields = ['full name', 'email', 'password'];
	return (
		<div className='sign-in-sign-up'>
			<div className='sign-in-sign-up__logo-container'>
				<Link to='/medium-clone/'>
					<Logo className='sign-in-sign-up__logo' />
					<h3>Medium</h3>
				</Link>
			</div>
			<h2 className='sign-in-sign-up__title'>Sign Up</h2>
			<div className='sign-in-sign-up__form'>
				{
					formFields.map(field => (
						<div className='sign-in-sign-up__form-field'>
							<FormGroup type={field} />
						</div>
					))
				}
				<div className='sign-in-sign-up__form-submit'>
					<AuthorPostFollowBtn>Create account</AuthorPostFollowBtn>
				</div>
			</div>
		</div>
	);
}

export default SignInSignUp;