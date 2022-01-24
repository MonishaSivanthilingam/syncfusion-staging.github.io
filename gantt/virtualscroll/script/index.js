ej.base.enableRipple(true);

ej.gantt.Gantt.Inject(ej.gantt.Selection, ej.gantt.Edit, ej.gantt.VirtualScroll);
var gantt = new ej.gantt.Gantt({
  dataSource: JSON.parse(window.localStorage.getItem('ejvirtualdata')),
  dateFormat: 'MMM dd, y',
  enableVirtualization: true,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'parentID',
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  },
  allowSelection: true,
  gridLines: 'Both',
  height: '450px',
  highlightWeekends: true,
  labelSettings: {
    leftLabel: 'TaskName',
  },
  columns: [
    { field: 'TaskID', width: '150' },
    { field: 'TaskName', width: '250' },
    { field: 'StartDate', width: '250' },
    { field: 'EndDate', width: '250' },
    { field: 'Duration', width: '250' },
    { field: 'Predecessor', width: '250' },
    { field: 'Progress', width: '250' },
    { field: 'Status', width: '250' }
  ],
  projectStartDate: new Date('03/25/2019'),
  projectEndDate: new Date('12/28/2019'),
  actionComplete: function (args) {
    if (
      args.requestType == 'save' ||
      args.requestType == 'delete' ||
      args.requestType == 'add'
    ) {
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(gantt.dataSource));
    }
  }
});
gantt.appendTo('#gantt');

ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.VirtualScroll, ej.treegrid.Page);
var treegrid = new ej.treegrid.TreeGrid({
  dataSource: JSON.parse(window.localStorage.getItem('ejvirtualdata')),
  idMapping: 'TaskID',
  parentIdMapping: 'parentID',
  allowPaging: true,
  pageSettings: { pageSize: 15 },
  treeColumnIndex: 1,
  enablePersistence: true,
  height: 400,
  columns: [
    {
      field: 'TaskID',
      headerText: 'Task ID',
      isPrimaryKey: true,
      textAlign: 'Right',
      validationRules: { required: true, number: true },
      width: 90,
    },
    {
      field: 'TaskName',
      headerText: 'Task Name',
      editType: 'stringedit',
      width: 220,
      validationRules: { required: true },
    },
    {
      field: 'StartDate',
      headerText: 'Start Date',
      textAlign: 'Right',
      width: 100,
      editType: 'datepickeredit',
      format: 'yMd',
      validationRules: { date: true },
    },
    {
      field: 'Predecessor',
      headerText: 'Predecessor',
      textAlign: 'Right',
      width: 100,
      editType: 'numericedit',
    },
    {
      field: 'Duration',
      headerText: 'Duration',
      textAlign: 'Right',
      width: 100,
      editType: 'numericedit',
      validationRules: { number: true, min: 0 },
      edit: { params: { format: 'n' } },
    },
  ],
});
treegrid.appendTo('#TreeGrid');

var button = new ej.buttons.Button({ cssClass: 'e-link' });
button.appendTo('#element1');

button.element.onclick = function () {
  window.open("./gantt.html");
}
var button = new ej.buttons.Button({ cssClass: 'e-link' });
button.appendTo('#element2');

button.element.onclick = function () {
  window.open("./kanban.html");
}
var button = new ej.buttons.Button({ cssClass: 'e-link' });
button.appendTo('#element3');

button.element.onclick = function () {
  window.open("./treegrid.html");
}