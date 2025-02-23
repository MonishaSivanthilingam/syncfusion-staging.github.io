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
        subtasks['Predecessor'] = tempData[j].TaskID + x - 1;
        subtasks['parentID'] = tempData[j].parentID + x;
        subtasks['Status'] = 'Open';
        virtualData.push(subtasks);
    }
}

window.localStorage.setItem('ejkanbandata', JSON.stringify(tempData));

window.localStorage.setItem('ejvirtualdata', JSON.stringify(virtualData));