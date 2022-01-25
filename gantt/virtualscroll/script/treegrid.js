ej.base.enableRipple(true);

var taskId, sDate, eDate, taskname, duration, progress;
var childRecords;

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
    if (args.requestType == 'save') {
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
  actionBegin: function (args) {
    if (args.type == "edit") {
      taskId = args.rowData.TaskID;
      taskname = args.rowData.TaskName;
      sDate = args.rowData.StartDate;
      eDate = args.rowData.EndDate;
      duration = args.rowData.Duration;
      progress = args.rowData.Progress;
      childRecords = args.rowData.hasChildRecords;
      args.cancel = true;
      dockBar.toggle();
      dockBar.change = function (args) {
        document.getElementById('TaskID').value = taskId;
        document.getElementById('TaskName').value = taskname;
        document.getElementById('startdate').value = sDate;
        document.getElementById('enddate').value = eDate;
        document.getElementById('duration').value = duration;
        document.getElementById('progress').value = progress;
        if (childRecords) {
          durationpicker.enabled = false;
          progresspicker.enabled = false;
          enddatepicker.enabled = false;
        }
      }
    }
  },
  actionComplete: function (args) {
    //updating the gantt
    if (args.action == 'add') {
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
    if (args.type == 'save') {
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
    if (args.requestType == "delete") {
      window.localStorage.setItem('ejvirtualdata', JSON.stringify(treegrid.dataSource));
    }
  }
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

function updateGanttRecord() {
  durationpicker.enabled = true;
  progresspicker.enabled = true;
  enddatepicker.enabled = true;
  dockBar.toggle();
  let TaskID = document.getElementById('dockSidebar').querySelector('#TaskID');
  let TaskName = document.getElementById('dockSidebar').querySelector('#TaskName');
  let StartDate = document.getElementById('dockSidebar').querySelector('#startdate');
  let EndDate = document.getElementById('dockSidebar').querySelector('#enddate');
  let Duration = document.getElementById('dockSidebar').querySelector('#duration');
  let Progress = document.getElementById('dockSidebar').querySelector('#progress');
  var data = {
    TaskID: TaskID.value,
    TaskName: TaskName.value,
    StartDate: new Date(StartDate.value),
    EndDate: new Date(EndDate.value),
    Duration: Duration.value,
    Progress: Progress.value
  };
  ganttChart.updateRecordByID(data);
}

var startdatepicker = new ej.calendars.DatePicker({
  value: new Date(sDate)
});
startdatepicker.appendTo('#startdate')

var enddatepicker = new ej.calendars.DatePicker({
  value: new Date(eDate)
});
enddatepicker.appendTo('#enddate')

var durationpicker = new ej.inputs.NumericTextBox({
  min: 0
});
durationpicker.appendTo('#duration');

var progresspicker = new ej.inputs.NumericTextBox({
  min: 0,
  max: 100
});
progresspicker.appendTo('#progress');