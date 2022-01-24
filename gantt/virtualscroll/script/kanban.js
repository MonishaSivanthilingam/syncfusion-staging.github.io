ej.base.enableRipple(true);

var kanbanObj = new ej.kanban.Kanban({
  dataSource: JSON.parse(window.localStorage.getItem('ejkanbandata')),
  keyField: 'Status',
  columns: [
    { headerText: 'To Do', keyField: 'Open' },
    { headerText: 'In Progress', keyField: 'InProgress' },
    { headerText: 'Testing', keyField: 'Testing' },
    { headerText: 'Done', keyField: 'Done' },
  ],
  cardSettings: {
    contentField: 'TaskName',
    headerField: 'TaskID',
    template: '#cardTemplate',
  }
});
//Render initialized Kanban control
kanbanObj.appendTo('#Kanban');

ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.VirtualScroll, ej.treegrid.Page);
var treegrid = new ej.treegrid.TreeGrid({
  dataSource: JSON.parse(window.localStorage.getItem('ejkanbandata')),
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