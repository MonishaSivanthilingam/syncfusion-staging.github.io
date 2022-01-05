ej.base.enableRipple(true);

ej.gantt.Gantt.Inject(ej.gantt.Selection, ej.gantt.Edit, ej.gantt.VirtualScroll);
var ganttChart = new ej.gantt.Gantt({
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
    { field: 'Progress', width: '250' },
    { field: 'Status', width: '250' }
  ],
  projectStartDate: new Date('03/25/2019'),
  projectEndDate: new Date('12/28/2019'),
  actionComplete: function (args) {
    if (args.requestType == 'add') {
      var record = {
        TaskID: args.data.TaskID,
        TaskName: args.data.TaskName,
        StartDate: args.data.StartDate,
        Duration: args.data.Duration,
        Progress: args.data.Progress,
        EndDate: args.data.EndDate,
        Status: args.data.Status
      };
    }
    if (args.requestType == 'save' && counter == 1) {
      //updating the treegrid with the modifiedRecords
      mRecords = args.modifiedRecords;
      for (var i = 0; i < mRecords.length; i++) {
        var record = {
          TaskID: mRecords[i].TaskID,
          TaskName: mRecords[i].TaskName,
          StartDate: mRecords[i].StartDate,
          Duration: mRecords[i].Duration,
          Progress: mRecords[i].Progress,
          EndDate: mRecords[i].EndDate,
          Status: mRecords[i].Status
        };
        var grid = document.getElementsByClassName('e-treegrid')[0].ej2_instances[0];
        for (var j = 0; j < grid.getCurrentViewRecords().length; j++) {
          if (grid.getCurrentViewRecords()[j]['TaskID'] == mRecords[i]['TaskID']) {
            var index = j;
            break;
          }
        }
        treegrid.updateRow(index, record);
        counter = 0;
      }
    }
  },
});
ganttChart.appendTo('#Editing');

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
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: 'Cell',
    newRowPosition: 'Below',
  },
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
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
      width: 130,
      editType: 'datepickeredit',
      format: 'yMd',
      validationRules: { date: true },
    },
    {
      field: 'EndDate',
      headerText: 'End Date',
      textAlign: 'Right',
      width: 130,
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
  cellEdit: function (args) {
    if (args.rowData.hasChildRecords && (args.columnName == "Duration" || args.columnName == "EndDate")) {
      args.cancel = true;
      alert("Parent record " + args.columnName + " cannot be edited");
    }
  },
  actionComplete: function (args) {
    //updating the gantt
    if (args.action == 'add') {
      var record = {
        TaskID: args.data.TaskID,
        TaskName: args.data.TaskName,
        StartDate: args.data.StartDate,
        Duration: args.data.Duration,
        Progress: args.data.Progress,
        EndDate: args.data.EndDate,
        Status: "Open"
      };
      ganttChart.addRecord(record, 'Top');
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
    if (args.type == 'save') {
      counter++;
      var data = {
        TaskID: args.data.TaskID,
        TaskName: args.data.TaskName,
        StartDate: args.data.StartDate,
        Duration: args.data.Duration,
        Progress: args.data.Progress,
      };
      ganttChart.updateRecordByID(data);
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
    if (args.requestType == "delete") {
      ganttChart.deleteRecord([args.data[0].index]);
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
  }
});
treegrid.appendTo('#TreeGrid');

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