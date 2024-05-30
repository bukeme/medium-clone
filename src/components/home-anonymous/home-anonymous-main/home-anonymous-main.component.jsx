import './home-anonymous-main.styles.css';



const HomeAnonymousMain = ({setAuthPopUp}) => {
	return (
		<div className='home-anonymous-main'>
			<h1>Stay curious.</h1>
			<p>Discover stories, thinking, and expertise from writers on any topic.</p>
			<button onClick={() => {setAuthPopUp(2)}}>Stay reading</button>
		</div>
	);
}

export default HomeAnonymousMain;