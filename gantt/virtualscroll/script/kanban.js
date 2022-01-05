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