
var tabObj = new ej.navigations.Tab({
    heightAdjustMode: 'Auto',
    overflowMode: 'Popup',
    items: [
        {
            header: { 'text': 'bold', 'iconCss': 'e-bold' },
            content: 'Bold, bold face, or bold font is any text that is darkened to help emphasize a remark or comment. For example, this is bold text. If your browser supports bold text, the previous words "bold text" should have been in bold lettering.'
        },
        {
            header: { 'text': 'Cut', 'iconCss': 'e-cut' },
            content: 'In the case of items inside a file, Cut deletes the content from the screen, but keeps it in memory'
        },
        {
            header: { 'text': 'Copy', 'iconCss': 'e-copy', 'iconPosition': 'left' },
            content: 'Makes a duplicate of the original file, which can be moved or edited without altering the original.'
        },
        {
            header: { 'text': 'Paste', 'iconCss': 'e-paste' },
            content: 'Used to make a cut or copied item appear again at a specific location.'
        },
        {
            header: { 'text': 'underline', 'iconCss': 'e-underline-icon' },
            content: 'underline'
        },
        {
            header: { 'text': 'alignleft', 'iconCss': 'e-alignleft-icon' },
            content: 'alignleft'
        },
        {
            header: { 'text': 'alignright', 'iconCss': 'e-alignright-icon' },
            content: 'alignright'
        },
        {
            header: { 'text': 'aligncenter', 'iconCss': 'e-aligncenter-icon' },
            content: 'aligncenter'
        },
        {
            header: { 'text': 'alignjustify', 'iconCss': 'e-alignjustify-icon' },
            content: 'alignjustify'
        },
        {
            header: { 'text': 'upload', 'iconCss': 'e-upload-icon' },
            content: 'upload'
        },
        {
            header: { 'text': 'download', 'iconCss': 'e-download-icon' },
            content: 'download'
        },
        {
            header: { 'text': 'indent', 'iconCss': 'e-indent-icon' },
            content: 'indent'
        },
        {
            header: { 'text': 'outdent', 'iconCss': 'e-outdent-icon' },
            content: 'outdent'
        },
        {
            header: { 'text': 'clear', 'iconCss': 'e-clear-icon' },
            content: 'clear'
        },
        {
            header: { 'text': 'reload', 'iconCss': 'e-reload-icon' },
            content: 'reload'
        },
        {
            header: { 'text': 'export', 'iconCss': 'e-export-icon' },
            content: 'export'
        },
        {
            header: { 'text': 'italic', 'iconCss': 'e-italic-icon' },
            content: 'italic'
        },
        {
            header: { 'text': 'bullets', 'iconCss': 'e-bullets-icon' },
            content: 'bullets'
        },
        {
            header: { 'text': 'numbering', 'iconCss': 'e-numbering-icon' },
            content: 'numbering'
        }
    ]
});
tabObj.appendTo('#ej2Tab');

document.getElementById('btn_closeButton').onclick = function (e) {
    tabObj.showCloseButton = !tabObj.showCloseButton;
    tabObj.dataBind();
};

document.getElementById('btn_enableRtl').onclick = function (e) {
    tabObj.enableRtl = !tabObj.enableRtl;
    tabObj.dataBind();
};

document.getElementById('btn_orientation').onclick = function (e) {
    tabObj.headerPlacement = tabObj.headerPlacement == 'Top' ? 'Bottom' : 'Top';
    tabObj.dataBind();
};

document.getElementById('btn_default').onclick = function (e) {
    removeClass();
    tabObj.dataBind();
};

document.getElementById('btn_fill').onclick = function (e) {
    removeClass();
    document.querySelector('.e-tab').classList.add('e-fill');
    tabObj.dataBind();
};

document.getElementById('btn_bg').onclick = function (e) {
    removeClass();
    document.querySelector('.e-tab').classList.add('e-background');
    tabObj.dataBind();
};

document.getElementById('btn_accent').onclick = function (e) {
    removeClass();
    document.querySelector('.e-tab').classList.add('e-background');
    document.querySelector('.e-tab').classList.add('e-accent');
    tabObj.dataBind();
};

function removeClass() {
    var ele = document.querySelector('.e-tab');
    ele.classList.remove('e-fill');
    ele.classList.remove('e-background');
    ele.classList.remove('e-accent');
    tabObj.dataBind();
}
