var tempData = [
    {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        parentID: 0,
        Status: 'Open'
    },
    {
        TaskID: 2,
        TaskName: 'Defining the product and its usage',
        StartDate: new Date('04/02/2019'),
        Duration: 3,
        Progress: 30,
        parentID: 1,
        Status: 'Open'
    },
    {
        TaskID: 3,
        TaskName: 'Defining target audience',
        StartDate: new Date('04/02/2019'),
        parentID: 1,
        Duration: 3,
        Status: 'Open'
    },
    {
        TaskID: 4,
        TaskName: 'Prepare product sketch and notes',
        StartDate: new Date('04/05/2019'),
        Duration: 2,
        parentID: 1,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 5,
        TaskName: 'Concept approval',
        StartDate: new Date('04/08/2019'),
        parentID: 0,
        Duration: 0,
        Status: 'Open'
    },
    {
        TaskID: 6,
        TaskName: 'Market research',
        StartDate: new Date('04/02/2019'),
        parentID: 0,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 7,
        TaskName: 'Demand analysis',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        parentID: 6,
        Status: 'Open'
    },
    {
        TaskID: 8,
        TaskName: 'Customer strength',
        StartDate: new Date('04/09/2019'),
        Duration: 4,
        parentID: 7,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 9,
        TaskName: 'Market opportunity analysis',
        StartDate: new Date('04/09/2019'),
        Duration: 4,
        parentID: 7,
        Status: 'Open'
    },
    {
        TaskID: 10,
        TaskName: 'Competitor analysis',
        StartDate: new Date('04/15/2019'),
        Duration: 4,
        parentID: 6,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 11,
        TaskName: 'Product strength analsysis',
        StartDate: new Date('04/15/2019'),
        Duration: 4,
        parentID: 6,
        Status: 'Open'
    },
    {
        TaskID: 12,
        TaskName: 'Research complete',
        StartDate: new Date('04/18/2019'),
        Duration: 0,
        parentID: 6,
        Status: 'Open'
    },
    {
        TaskID: 13,
        TaskName: 'Product design and development',
        StartDate: new Date('04/04/2019'),
        parentID: 0,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 14,
        TaskName: 'Functionality design',
        StartDate: new Date('04/19/2019'),
        Duration: 3,
        parentID: 13,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 15,
        TaskName: 'Quality design',
        StartDate: new Date('04/19/2019'),
        Duration: 3,
        parentID: 13,
        Status: 'Open'
    },
    {
        TaskID: 16,
        TaskName: 'Define reliability',
        StartDate: new Date('04/24/2019'),
        Duration: 2,
        Progress: 30,
        parentID: 13,
        Status: 'Open'
    },
    {
        TaskID: 17,
        TaskName: 'Identifying raw materials',
        StartDate: new Date('04/24/2019'),
        Duration: 2,
        parentID: 13,
        Status: 'Open'
    },
    {
        TaskID: 18,
        TaskName: 'Define cost plan',
        StartDate: new Date('04/04/2019'),
        parentID: 13,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 19,
        TaskName: 'Manufacturing cost',
        StartDate: new Date('04/26/2019'),
        Duration: 2,
        Progress: 30,
        parentID: 18,
        Status: 'Open'
    },
    {
        TaskID: 20,
        TaskName: 'Selling cost',
        StartDate: new Date('04/26/2019'),
        Duration: 2,
        parentID: 18,
        Status: 'Open'
    },
    {
        TaskID: 21,
        TaskName: 'Development of the final design',
        StartDate: new Date('04/30/2019'),
        parentID: 13,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 22,
        TaskName: 'Defining dimensions and package volume',
        StartDate: new Date('04/30/2019'),
        Duration: 2,
        parentID: 21,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 23,
        TaskName: 'Develop design to meet industry standards',
        StartDate: new Date('05/02/2019'),
        Duration: 2,
        parentID: 21,
        Status: 'Open'
    },
    {
        TaskID: 24,
        TaskName: 'Include all the details',
        StartDate: new Date('05/06/2019'),
        Duration: 3,
        parentID: 21,
        Status: 'Open'
    },
    {
        TaskID: 25,
        TaskName: 'CAD computer-aided design',
        StartDate: new Date('05/09/2019'),
        Duration: 3,
        parentID: 13,
        Progress: 30,
        Status: 'Open'
    },
    {
        TaskID: 26,
        TaskName: 'CAM computer-aided manufacturing',
        StartDate: new Date('09/14/2019'),
        Duration: 3,
        parentID: 13,
        Status: 'Open'
    },
    {
        TaskID: 27,
        TaskName: 'Design complete',
        StartDate: new Date('05/16/2019'),
        Duration: 0,
        parentID: 13,
        Status: 'Open'
    },
    {
        TaskID: 28,
        TaskName: 'Prototype testing',
        StartDate: new Date('05/17/2019'),
        Duration: 4,
        Progress: 30,
        parentID: 0,
        Status: 'Open'
    },
    {
        TaskID: 29,
        TaskName: 'Include feedback',
        StartDate: new Date('05/17/2019'),
        Duration: 4,
        parentID: 0,
        Status: 'Open'
    },
    {
        TaskID: 30,
        TaskName: 'Manufacturing',
        StartDate: new Date('05/23/2019'),
        Duration: 5,
        Progress: 30,
        parentID: 0,
        Status: 'Open'
    },
    {
        TaskID: 31,
        TaskName: 'Assembling materials to finsihed goods',
        StartDate: new Date('05/30/2019'),
        Duration: 5,
        parentID: 0,
        Status: 'Open'
    },
    {
        TaskID: 32,
        TaskName: 'Feedback and testing',
        StartDate: new Date('04/04/2019'),
        parentID: 0,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 33,
        TaskName: 'Internal testing and feedback',
        StartDate: new Date('06/06/2019'),
        Duration: 3,
        parentID: 32,
        Progress: 45,
        Status: 'Open'
    },
    {
        TaskID: 34,
        TaskName: 'Customer testing and feedback',
        StartDate: new Date('06/11/2019'),
        Duration: 3,
        parentID: 32,
        Progress: 50,
        Status: 'Open'
    },
    {
        TaskID: 35,
        TaskName: 'Final product development',
        StartDate: new Date('04/04/2019'),
        parentID: 0,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 36,
        TaskName: 'Important improvements',
        StartDate: new Date('06/14/2019'),
        Duration: 4,
        Progress: 30,
        parentID: 35,
        Status: 'Open'
    },
    {
        TaskID: 37,
        TaskName: 'Address any unforeseen issues',
        StartDate: new Date('06/14/2019'),
        Duration: 4,
        Progress: 30,
        parentID: 35,
        Status: 'Open'
    },
    {
        TaskID: 38,
        TaskName: 'Final product',
        StartDate: new Date('04/04/2019'),
        parentID: 0,
        EndDate: new Date('04/21/2019'),
        Status: 'Open'
    },
    {
        TaskID: 39,
        TaskName: 'Branding product',
        StartDate: new Date('06/20/2019'),
        Duration: 4,
        parentID: 38,
        Status: 'Open'
    },
    {
        TaskID: 40,
        TaskName: 'Marketing and presales',
        StartDate: new Date('06/26/2019'),
        Duration: 4,
        Progress: 30,
        parentID: 38,
        Status: 'Open'
    }
];
var virtualData = [];
var projId = 1;
var counter = 0;
for (var i = 0; i < 250; i++) {
    var x = virtualData.length + 1;
    var parent = {};
    /* tslint:disable:no-string-literal */
    parent['TaskID'] = x;
    parent['TaskName'] = 'Project' + (projId++);
    virtualData.push(parent);
    for (var j = 0; j < tempData.length; j++) {
        var subtasks = {};
        /* tslint:disable:no-string-literal */
        subtasks['TaskID'] = tempData[j].TaskID + x;
        subtasks['TaskName'] = tempData[j].TaskName;
        subtasks['StartDate'] = tempData[j].StartDate;
        subtasks['Duration'] = tempData[j].Duration;
        subtasks['Progress'] = tempData[j].Progress;
        subtasks['parentID'] = tempData[j].parentID + x;
        subtasks['Status'] = 'Open';
        virtualData.push(subtasks);
    }
	}


ej.gantt.Gantt.Inject(ej.gantt.Selection,ej.gantt.Edit,ej.gantt.VirtualScroll);
    var ganttChart = new ej.gantt.Gantt({
        dataSource: virtualData,
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
  projectStartDate: new Date('03/1/2019'),
  projectEndDate: new Date('12/28/2019'),
  actionComplete: function (args) {
    if (args.requestType == 'save' && counter == 1) {
      //updating the treegrid with the modifiedRecords
      mRecords = args.modifiedRecords;
      for (var i = 0; i < mRecords.length; i++) {
          debugger;
        var record = {
          TaskID: mRecords[i].TaskID,
          TaskName: mRecords[i].TaskName,
          StartDate: mRecords[i].StartDate,
          Duration: mRecords[i].Duration,
          Progress: mRecords[i].Progress,
          EndDate: mRecords[i].EndDate,
          Status: mRecords[i].Status
        };
        var grid=document.getElementsByClassName('e-grid')[0].ej2_instances[0];
        for(var j=0;j<grid.getCurrentViewRecords().length;j++)
        {
            if(grid.getCurrentViewRecords()[j]['TaskID'] == mRecords[i]['TaskID']) {
                var index = j;
                break;
            }
        }
        treegrid.updateRow(index, record);
        counter = 0;
        kanbanObj.updateCard(record,record.TaskID -1);
      }
    }
  },
     });
    ganttChart.appendTo('#Editing');

ej.treegrid.TreeGrid.Inject( ej.treegrid.Edit,ej.treegrid.VirtualScroll,ej.treegrid.Page);
    var treegrid = new ej.treegrid.TreeGrid({
      dataSource: virtualData,
  idMapping: 'TaskID',
  parentIdMapping: 'parentID',
  allowPaging: true,
  pageSettings:{pageSize: 15},
  treeColumnIndex: 1,
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
      if(args.rowData.hasChildRecords && (args.columnName == "Duration" || args.columnName == "EndDate")) {
            args.cancel = true;
            alert("Parent record " +args.columnName +  " cannot be edited");
      }
  },
  actionComplete: function (args) {
    //updating the gantt
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
    }
  }
    });
    treegrid.appendTo('#TreeGrid');

    var kanbanObj = new ej.kanban.Kanban({
        dataSource: tempData,
        keyField: 'Status',
        columns: [
          { headerText: 'To Do', keyField: 'Open' },
          { headerText: 'In Progress', keyField: 'InProgress' },
          { headerText: 'Testing', keyField: 'Testing' },
          { headerText: 'Done', keyField: 'Done' },
        ],
        created: function () {
          debugger;
          // kanbanObj.dataSource = tempData;
        },
        cardSettings: {
          contentField: 'TaskName',
          headerField: 'TaskID',
          template: '#cardTemplate',
        },
      });
      //Render initialized Kanban control
      kanbanObj.appendTo('#Kanban');