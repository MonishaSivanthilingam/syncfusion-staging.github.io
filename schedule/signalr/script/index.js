var signalr = new signalR.HubConnectionBuilder().withUrl("https://ej2services.syncfusion.com/production/web-services/hubs/schedulehub").withAutomaticReconnect().build();

signalr.on("UpdateClient", function (action, data) {
    if (action == "view") {
        scheduleObj.currentView = data;
    }
    if (action === "eventCreated" || action === "eventChanged" || action === "eventRemoved") {
        scheduleObj.eventSettings.dataSource = data;
    }
});

signalr.start().then(function () { console.log("Hub Connected..!"); }).catch(function (err) { console.log(err); });

var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '555px',
    selectedDate: new Date(2020, 11, 1),
    actionComplete: function (args) {
        if (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved") {
            signalr.invoke("UpdateServer", args.requestType, scheduleObj.eventSettings.dataSource);
        }
    },
    navigating: function (args) {
        if (args.action == "view") {
            signalr.invoke("UpdateServer", args.action, args.currentView);
        }
    }
});
scheduleObj.appendTo('#schedule');