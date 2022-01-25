ej.base.enableRipple(true);

var taskId, sDate, eDate, taskname, duration, progress;
var childRecords = false;

ej.gantt.Gantt.Inject(ej.gantt.Selection, ej.gantt.Edit, ej.gantt.VirtualScroll);
var ganttObj = new ej.gantt.Gantt({
  dataSource: JSON.parse(window.localStorage.getItem('ejkanbandata')),
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
    if (args.requestType == 'save') {
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
        kanbanObj.updateCard(record, record.TaskID - 1)
      }
    }
  },
});
ganttObj.appendTo('#Editing');

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
  },
  cardDoubleClick: function (args) {
    taskId = args.data.TaskID;
    taskname = args.data.TaskName;
    sDate = args.data.StartDate;
    eDate = args.data.EndDate;
    duration = args.data.Duration;
    progress = args.data.Progress;
    childRecords = ganttObj.flatData.filter((data) => {
      if (data.TaskID === taskId && data.hasChildRecords) {
        return true;
      }
    });
    dockBar.change = function (args) {
      document.getElementById('TaskID').value = taskId;
      document.getElementById('TaskName').value = taskname;
      document.getElementById('startdate').value = sDate;
      document.getElementById('enddate').value = eDate;
      document.getElementById('duration').value = duration;
      document.getElementById('progress').value = progress;
      if (childRecords.length > 0) {
        durationpicker.enabled = false;
        progresspicker.enabled = false;
        enddatepicker.enabled = false;
      }
    }
    args.cancel = true;
    dockBar.toggle();
  }
});
//Render initialized Kanban control
kanbanObj.appendTo('#Kanban');

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
  ganttObj.updateRecordByID(data);
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