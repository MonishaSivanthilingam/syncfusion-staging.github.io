var kanbanOptions = {
    dataSource: generateKanbanData(),
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'In Review', keyField: 'Review' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    swimlaneSettings: {
        keyField: 'Assignee',
        textField: 'AssigneeName',
        sortComparer: function (rows) {
            rows.sort(function (a, b) { return a.textField.localeCompare(b.textField, undefined, { numeric: true }); });
            return rows;
        }
    },
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
};
var kanbanObj = new ej.kanban.Kanban(kanbanOptions);
kanbanObj.appendTo('#kanban');

function generateKanbanData(count) {
    if (count === void 0) { count = 250; }
    var kanbanData = [];
    var names = [
        'Analyze the new requirements gathered from the customer', 'Improve application performance',
        'Arrange a web meeting with the customer to get new requirements', 'Fix the issues reported in the IE browser',
        'Fix the issues reported by the customer', 'Validate new requirements', 'API improvements',
        'Arrange a web meeting with the customer to get the login page requirements', 'Test the application in the IE browser',
        'Add responsive support to application'
    ];
    var assignee = [
        'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6', 'Phase 7', 'Phase 8', 'Phase 9', 'Phase 10',
        'Phase 11', 'Phase 12', 'Phase 13', 'Phase 14', 'Phase 15', 'Phase 16', 'Phase 17', 'Phase 18', 'Phase 19', 'Phase 20'
    ];
    var keys = ['Open', 'InProgress', 'Review', 'Testing', 'Close'];
    var priority = ['Release Breaker', 'Ultra-Critical', 'Critical', 'High', 'Normal', 'Low'];
    var types = ['EPIC', 'Story', 'Bug', 'Improvement'];
    for (var a = 0, id = 0; a < count; a++) {
        kanbanData.push({
            Id: ++id,
            Summary: names[Math.floor(Math.random() * names.length)],
            Status: keys[Math.floor(Math.random() * keys.length)],
            Priority: priority[Math.floor(Math.random() * priority.length)],
            Type: types[Math.floor(Math.random() * types.length)],
            Assignee: assignee[Math.floor(Math.random() * assignee.length)],
            Estimate: parseFloat((Math.random() * (9 - 0)).toFixed(3).slice(0, -1))
        });
    }
    return kanbanData;
}
