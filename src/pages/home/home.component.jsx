import Main from '../../components/home/main/main.component';
import Aside from '../../components/home/aside/aside.component';

import './home.styles.css';



const Home = () => {
	return (
		<div className='home'>
			<Main />
			<Aside />
		</div>
	);
}

export default Home;