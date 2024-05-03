import MainNav from '../main-nav/main-nav.component';
import MainContent from '../main-content/main-content.component';

import './main.styles.css';



const Main = () => {
	return (
		<div className='main'>
			<MainNav />
			<MainContent />
		</div>
	);
}

export default Main;