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
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
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
  actionBegin: function (args) {
    if (args.requestType == "refresh") {
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(gantt.dataSource));
    }
  }
});
gantt.appendTo('#gantt');

var button = new ej.buttons.Button({ cssClass: 'e-link' });
button.appendTo('#element1');

button.element.onclick = function () {
  window.open("./index.html");
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