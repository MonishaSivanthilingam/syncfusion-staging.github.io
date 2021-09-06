ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Sort, ej.treegrid.RowDD, ej.treegrid.Filter, ej.treegrid.Toolbar);
var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    allowPaging: true,
	autoCheckHierachy: true,
    toolbar: ['ExpandAll','CollapseAll','Indent','Outdent'],
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 70, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 200, showCheckbox: true, textAlign: 'Left' },
        { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ]
});
treegrid.appendTo('#TreeGrid');