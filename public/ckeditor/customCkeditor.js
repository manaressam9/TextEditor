var editor = CKEDITOR.replace( 'editor_en' );
var data;
// The "change" event is fired whenever a change is made in the editor.
editor.on( 'change', function( evt ) {
    // getData() returns CKEditor's HTML content.
    data = evt.editor.getData()
    console.log(  evt.editor.getData());
});
$('[id$=btn]').on('click', function(){
    localStorage.setItem('kkk', data)
    console.log("bff" + data)
})
function InitializeCkeEditor(elementName)
{
    if ($('[id$=' + elementName + ']').length > 0) {
        var EditorID = $('[id$=' + elementName + ']')[0].id;
        CKEDITOR.replace(EditorID, {
            extraAllowedContent: 'img [  alt, !src ] { width, height, float, border, border-width, border-style, border-color, padding, margin } ',
            htmlEncodeOutput: true
        });
        var value = $('[id$=' + elementName + ']').val().replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
        CKEDITOR.instances[EditorID].setData(value);
    }
}


function EncodeCkeditorValue(elementName)
{
    if ($('[id$=' + elementName + ']').length > 0) {
        var EditorID = $('[id$=' + elementName + ']')[0].id;
        var value = CKEDITOR.instances[EditorID].getData();
        value = value.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        CKEDITOR.instances[EditorID].setData(value);
    }
}