import React, {  useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { Editor } from '@tinymce/tinymce-react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};
const App = () => {
    const[body, SetBody] = useState('')
 
    return (
      <>
          <input type="file" id="ck_imageUploader" accept="image/gif, image/jpeg, image/png" style={{display: "none"}}  uploadimageurl="../public/ImageUpload.js" />

      <h2>Using CKEditor&nbsp;5 from online builder in React</h2>
      <textarea id="editor_en" textmode="MultiLine"></textarea>

      {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
      </>
      );
    }
 
  export default App;

  /*
    <Editor
        textareaName='Body'
        initialValue="<p>This is the initial content of the editor.</p>"
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
            'removeformat | help | link',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={(newText) => SetBody(newText)}
    />
  */