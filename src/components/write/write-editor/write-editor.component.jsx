import {useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './write-editor.styles.css';



const WriteEditor = () => {
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	}
	return (
		<div className='write-editor'>
			<div className='write-editor__title'>
				<textarea rows='1' className='write-editor__title-input' type='text' placeholder='Title'></textarea>
			</div>
			<div className='write-editor__editor'>
				<Editor
			        onInit={(evt, editor) => editorRef.current = editor}
			        textareaName='Tell your story...'
			        initialValue=""
			        init={{
			          height: 500,
			          menubar: false,
			          plugins: [
			            'advlist autolink lists link image charmap print preview anchor',
			            'searchreplace visualblocks code fullscreen',
			            'insertdatetime media table paste code help wordcount'
			          ],
			          toolbar: 'undo redo | formatselect | ' +
			          'bold italic backcolor forecolor | alignleft aligncenter ' +
			          'alignright alignjustify | bullist numlist outdent indent | ' +
			          'link image | ' +
			          'removeformat | help',
			          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
			        }}
			      />
			     <button onClick={log}>Log editor content</button>
			</div>
		</div>
	);
}

export default WriteEditor;