import RecommendedTopics from '../recommended-topics/recommended-topics.component';
import WhoToFollow from '../who-to-follow/who-to-follow.component';
import RecentlySaved from '../recently-saved/recently-saved.component';

import './aside.styles.css';



const Aside = () => {
	return (
		<div className='aside'>
			<RecommendedTopics />
			<WhoToFollow />
			<RecentlySaved />
		</div>
	);
}

export default Aside;