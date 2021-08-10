var isHubConnected = false;
var headers = { "Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" };
var signalr = new signalR.HubConnectionBuilder().withUrl("https://ej2services.syncfusion.com/production/web-services/hubs/schedulehub", headers).withAutomaticReconnect().build();

signalr.on("UpdateClient", function (action, data) {
    if (action == "view") {
        scheduleObj.currentView = data;
    }
    if (action === "eventCreated" || action === "eventChanged" || action === "eventRemoved") {
        scheduleObj.eventSettings.dataSource = data;
    }
});

signalr.start().then(function () { isHubConnected = true; }).catch(function () { isHubConnected = false; });

var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '555px',
    selectedDate: new Date(2020, 11, 1),
    actionComplete: function (args) {
        if (isHubConnected && (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved")) {
            signalr.invoke("UpdateServer", args.requestType, scheduleObj.eventSettings.dataSource);
        }
    },
    navigating: function (args) {
        if (args.action == "view" && isHubConnected) {
            signalr.invoke("UpdateServer", args.action, args.currentView);
        }
    }
});
scheduleObj.appendTo('#schedule');