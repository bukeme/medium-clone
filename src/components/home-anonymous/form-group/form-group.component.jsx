import './form-group.styles.css';



const FormGroup = (props) => {
	return (
		<div className='form-group'>
			<p>{'Your ' + props.type}</p>
			<input type={props.type === 'full name' ? 'text' : props.type } />
		</div>
	);
}

export default FormGroup;