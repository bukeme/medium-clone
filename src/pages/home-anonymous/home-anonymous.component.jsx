import HomeAnonymousNav from '../../components/home-anonymous/home-anonymous-nav/home-anonymous-nav.component';
import HomeAnonymousMain from '../../components/home-anonymous/home-anonymous-main/home-anonymous-main.component';
import './home-anonymous.styles.css';



const HomeAnonymous = () => {
	return (
		<div className='home-anonymous'>
			<HomeAnonymousNav />
			<HomeAnonymousMain />
		</div>
	);
}

export default HomeAnonymous;