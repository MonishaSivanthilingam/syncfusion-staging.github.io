var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '555px',
    selectedDate: new Date(2020, 11, 1),
    views: ['Month', 'Year'],
    showWeekNumber: true
});
scheduleObj.appendTo('#schedule');

document.getElementById('firstDayOfWeek').onchange = function (args) {
    scheduleObj.firstDayOfWeek = parseInt(args.target.value, 10);
};

document.getElementById('weekNumber').onchange = function (args) {
    scheduleObj.weekNumberType = args.target.value;
};