var items = [
    { prefixIcon: 'e-cut-icon', tooltipText: 'Cut' },
    { prefixIcon: 'e-copy-icon', tooltipText: 'Copy' },
    { prefixIcon: 'e-paste-icon', tooltipText: 'Paste' },
    { type: 'Separator' },
    { prefixIcon: 'e-bold-icon', tooltipText: 'Bold' },
    { prefixIcon: 'e-underline-icon', tooltipText: 'Underline' },
    { prefixIcon: 'e-italic-icon', tooltipText: 'Italic' },
    { prefixIcon: 'e-color-icon', tooltipText: 'Color-Picker' },
    { type: 'Separator' },
    { prefixIcon: 'e-alignleft-icon', tooltipText: 'Align-Left' },
    { prefixIcon: 'e-alignjustify-icon', tooltipText: 'Align-Justify' },
    { prefixIcon: 'e-alignright-icon', tooltipText: 'Align-Right' },
    { prefixIcon: 'e-aligncenter-icon', tooltipText: 'Align-Center' },
    { type: 'Separator' },
    { prefixIcon: 'e-bullets-icon', tooltipText: 'Bullets' },
    { prefixIcon: 'e-numbering-icon', tooltipText: 'Numbering' },
    { type: 'Separator' },
    { prefixIcon: 'e-ascending-icon', tooltipText: 'Sort A - Z' },
    { prefixIcon: 'e-descending-icon', tooltipText: 'Sort Z - A' },
    { type: 'Separator' },
    { prefixIcon: 'e-upload-icon', tooltipText: 'Upload' },
    { prefixIcon: 'e-download-icon', tooltipText: 'Download' },
    { type: 'Separator' },
    { prefixIcon: 'e-indent-icon', tooltipText: 'Text Indent' },
    { prefixIcon: 'e-outdent-icon', tooltipText: 'Text Outdent' },
    { type: 'Separator' },
    { prefixIcon: 'e-clear-icon', tooltipText: 'Clear' },
    { prefixIcon: 'e-reload-icon', tooltipText: 'Reload' },
    { prefixIcon: 'e-export-icon', tooltipText: 'Export' },
    { type: 'Separator' },
    { prefixIcon: 'e-undo-icon', tooltipText: 'Undo', text: 'Undo' },
    { prefixIcon: 'e-redo-icon', tooltipText: 'Redo', text: 'Redo' }
];

var toolbarObj = new ej.navigations.Toolbar({
    items: ej.base.extend([], items, null, true)
});
toolbarObj.appendTo('#ej2Toolbar');

var toolbarObj1 = new ej.navigations.Toolbar({
    overflowMode: 'Scrollable',
    width: '700px',
    items: ej.base.extend([], items, null, true)
});
toolbarObj1.appendTo('#ej2Toolbar1');

var toolbarObj2 = new ej.navigations.Toolbar({
    overflowMode: 'Popup',
    width: '700px',
    items: ej.base.extend([], items, null, true)
});
toolbarObj2.appendTo('#ej2Toolbar2');

var toolbarObj3 = new ej.navigations.Toolbar({
    overflowMode: 'Extended',
    width: '700px',
    items: ej.base.extend([], items, null, true)
});
toolbarObj3.appendTo('#ej2Toolbar3');

var toolbarObj4 = new ej.navigations.Toolbar({
    overflowMode: 'MultiRow',
    width: '700px',
    items: ej.base.extend([], items, null, true)
});
toolbarObj4.appendTo('#ej2Toolbar4');

var refreshToolbars = function () {
    var toolbars = [].slice.call(document.querySelectorAll('.e-toolbar'));
    for (var _i = 0, toolbars_1 = toolbars; _i < toolbars_1.length; _i++) {
        var toolbar_1 = toolbars_1[_i];
        toolbar_1.ej2_instances[0].refresh();
    }
};
