import WriteHeader from '../../components/write/write-header/write-header.component';
import WriteEditor from '../../components/write/write-editor/write-editor.component';
import './write.styles.css';



const Write = () => {
	return (
		<div className='write'>
			<WriteHeader />
			<WriteEditor />
		</div>
	);
}

export default Write;