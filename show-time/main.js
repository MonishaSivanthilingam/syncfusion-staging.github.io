(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12 control-section\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"schedule-overview\">\r\n      <div class=\"overview-header\">\r\n        <div class=\"overview-titlebar\">\r\n          <div class=\"left-panel\">\r\n            <div class=\"schedule-overview-title\" style=\"border: 1px solid transparent;\">Show Time Planner</div>\r\n          </div>\r\n          <div class=\"center-panel\">\r\n            <button ejs-button id=\"timezoneBtn\" cssClass=\"title-bar-btn\" disabled='true'\r\n              iconCss=\"e-icons e-schedule-timezone\">UTC</button>\r\n            <button ejs-button id=\"timeBtn\" cssClass=\"title-bar-btn\" disabled='true' iconCss=\"e-icons e-schedule-clock\"\r\n              [content]=\"liveTimeUpdate\"></button>\r\n          </div>\r\n          <div class=\"right-panel\">\r\n            <div class=\"control-panel\">\r\n              <button ejs-button id=\"printBtn\" cssClass=\"title-bar-btn\"\r\n                iconCss=\"e-icons e-schedule-print\">Print</button>\r\n            </div>\r\n            <div class=\"control-panel\" style=\"display: inline-flex;padding-left:15px;\">\r\n              <div class=\"e-icons e-schedule-import e-btn-icon e-icon-left\" style=\"line-height: 40px;\">\r\n              </div>\r\n              <ejs-uploader id='icalendar' cssClass='calendar-import' [multiple]='multiple' [buttons]='buttons'\r\n                [showFileList]='showFileList' allowedExtensions='.ics' (selected)='onSelected($event)'></ejs-uploader>\r\n            </div>\r\n            <div class=\"control-panel\">\r\n              <button ejs-dropdownbutton id=\"exporting\" [items]='exportItems'>Export</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"overview-toolbar\">\r\n        <div style=\"height: 70px;width: calc(100% - 468px);\">\r\n          <ejs-toolbar id=\"toolbar_options\" height=\"70px\" overflowMode=\"Scrollable\" scrollStep=\"100\"\r\n            (created)=\"onToolbarCreated()\" (clicked)=\"onToolbarItemClicked($event)\">\r\n            <e-items>\r\n              <e-item prefixIcon='e-icons e-schedule-add-event' tooltipText='New Event' text='New Event'>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item prefixIcon='e-icons e-schedule-day-view' tooltipText='Day' text='Day'></e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item prefixIcon='e-icons e-schedule-week-view' tooltipText='Week' text='Week'></e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item prefixIcon='e-icons e-schedule-month-view' tooltipText='Month' text='Month'>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item prefixIcon='e-icons e-schedule-year-view' tooltipText='Year' text='Year'></e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item prefixIcon='e-icons e-schedule-agenda-view' tooltipText='Agenda' text='Agenda'>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Timeline Views'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"timeline_views\" [checked]=\"true\" (change)=\"onTimelineViewChange($event)\">\r\n                      </ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Timeline Views</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Week Number'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"week_number\" [checked]=\"false\" (change)=\"onWeekNumberChange($event)\"></ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Week Number</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Resource Grouping'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"grouping\" [checked]=\"true\" (change)=\"onGroupingChange($event)\"></ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Grouping</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Gridlines'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"gridlines\" [checked]=\"true\" (change)=\"onGridlinesChange($event)\"></ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Gridlines</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Row Auto Height'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"row_auto_height\" [checked]=\"false\" (change)=\"onRowAutoHeightChange($event)\">\r\n                      </ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Row Auto Height</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n              <e-item tooltipText='Tooltip'>\r\n                <ng-template #template>\r\n                  <div style=\"height: 46px; line-height: 23px;\">\r\n                    <div class=\"icon-child\" style=\"text-align: center;\">\r\n                      <ejs-switch id=\"tooltip\" [checked]=\"false\" (change)=\"onTooltipChange($event)\"></ejs-switch>\r\n                    </div>\r\n                    <div class=\"text-child\" style=\"font-size: 14px;\">Tooltip</div>\r\n                  </div>\r\n                </ng-template>\r\n              </e-item>\r\n              <e-item type='Separator'></e-item>\r\n            </e-items>\r\n          </ejs-toolbar>\r\n        </div>\r\n        <div style=\"height:70px;width:500px;border-left: 1px solid rgba(0, 0, 0, 0.12);\">\r\n          <div class=\"col-xs-6 col-sm-6 col-lg-6 col-md-6\" style=\"margin-top: 2%;\">\r\n            <ejs-textbox placeholder=\"Filter By Film\" cssClass=\"e-outline\" floatLabelType=\"Auto\"></ejs-textbox>\r\n          </div>\r\n        </div>\r\n        <div style=\"height:70px;width:90px;border-left: 1px solid rgba(0, 0, 0, 0.12);\">\r\n          <button ejs-button id=\"settingsBtn\" iconCss=\"e-icons e-schedule-toolbar-settings\"\r\n            cssClass=\"overview-toolbar-settings\" iconPosition=\"Top\" (click)=\"onSettingsClick($event)\">Settings</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"overview-content\">\r\n        <div class=\"left-panel\" style=\"display:flex;width:100%;\">\r\n          <div class=\"overview-scheduler\" style=\"width:calc(100% - 55px);height: 600px;\">\r\n            <ejs-schedule #scheduleObj cssClass='schedule-overview' height='600px' [group]='group' timezone='UTC'\r\n              [workHours]='workHours' [(currentView)]='currentView' [eventSettings]='eventSettings'\r\n              (created)='onCreated()' (actionComplete)='onActionComplete($event)' (dataBound)='onDataBound()'>\r\n              <e-views>\r\n                <e-view option=\"Day\"></e-view>\r\n                <e-view option=\"Week\"></e-view>\r\n                <e-view option=\"Month\"></e-view>\r\n                <e-view option=\"Year\"></e-view>\r\n                <e-view option=\"TimelineDay\"></e-view>\r\n                <e-view option=\"TimelineWeek\"></e-view>\r\n                <e-view option=\"TimelineMonth\"></e-view>\r\n                <e-view option=\"TimelineYear\"></e-view>\r\n                <e-view option=\"Agenda\"></e-view>\r\n              </e-views>\r\n              <e-resources>\r\n                <e-resource field='HallId' title='Halls' [dataSource]='resourceDataSource' [query]='resourceQuery'\r\n                  [allowMultiple]='allowMultiple' name='MeetingRoom' textField='text' idField='id' colorField='color'>\r\n                </e-resource>\r\n              </e-resources>\r\n              <ng-template #resourceHeaderTemplate let-data>\r\n                <div class=\"template-wrap\" style=\"display: flex; justify-content: space-between;\">\r\n                  <div class=\"name\">{{data.resourceData.text}}</div>\r\n                  <div class=\"capacity\">{{data.resourceData.capacity}}</div>\r\n                </div>\r\n              </ng-template>\r\n            </ejs-schedule>\r\n          </div>\r\n          <div class=\"toolbar-control\" style=\"width:55px;border-top:1px solid rgba(0, 0, 0, 0.12);background: #fafafa;\">\r\n            <div class=\"toolbar-header-container\" style=\"height:42px;border-bottom: 1px solid rgba(0,0,0,0.15);\"></div>\r\n            <div class=\"toolbar-content-container\" style=\"height:100%;\">\r\n              <ng-container *ngFor=\"let item of toolbarItems\">\r\n                <div class=\"toolbar-item\" style=\"height:60px;text-align:center;\">\r\n                  <div style=\"margin: auto;padding: 13px;border-bottom: 1px solid rgba(0,0,0,0.15);\">\r\n                    <button ejs-button style=\"box-shadow: none;\">{{item.name}}</button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-panel hide\">\r\n          <div class=\"control-panel e-css\">\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">First Day of Week</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-dropdownlist id='weekFirstDay' width='170px' [dataSource]='weekDays'\r\n                  (change)='onWeekDayChange($event)' [value]='firstDayOfWeek' [fields]='fields' popupHeight='150px'>\r\n                </ejs-dropdownlist>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Work week</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-multiselect id='workWeekDays' width='170px' [dataSource]='weekDays' [mode]='checkboxMode'\r\n                  [fields]='fields' popupHeight='150px' [value]='workDays' (change)='onWorkWeekDayChange($event)'>\r\n                </ejs-multiselect>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Resources</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-multiselect id='resources' width='170px' [dataSource]='resourceDataSource' [mode]='checkboxMode'\r\n                  [fields]='calendarFields' popupHeight='150px' [value]='calendarsValue'\r\n                  (change)='onResourceChange($event)'></ejs-multiselect>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Timezone</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-dropdownlist id='timezone' width='170px' [dataSource]='timezoneData'\r\n                  (change)='onTimezoneChange($event)' value='Etc/GMT' [fields]='fields' popupHeight='150px'>\r\n                </ejs-dropdownlist>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Day Start Hour</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-timepicker id='dayStartHour' width='170px' showClearButton='false' [value]='dayStartHourValue'\r\n                  (change)='onDayStartHourChange($event)'>\r\n                </ejs-timepicker>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Day End Hour</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-timepicker id='dayEndHour' width='170px' showClearButton='false' [value]='dayEndHourValue'\r\n                  (change)='onDayEndHourChange($event)'>\r\n                </ejs-timepicker>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Work Start Hour</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-timepicker id='workHourStart' width='170px' showClearButton='false' [value]='workStartHourValue'\r\n                  (change)='onWorkStartHourChange($event)'>\r\n                </ejs-timepicker>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Work End Hour</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-timepicker id='workHourEnd' width='170px' showClearButton='false' [value]='workEndHourValue'\r\n                  (change)='onWorkEndHourChange($event)'></ejs-timepicker>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Slot Duration</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-dropdownlist id='slotDuration' width='170px' [dataSource]='timeSlotDuration'\r\n                  (change)='onTimescaleDurationChange($event)' [value]='timeSlotDurationValue' popupHeight='150px'>\r\n                </ejs-dropdownlist>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-row\">\r\n              <div class=\"col-left\">\r\n                <label style=\"line-height: 34px; margin: 0;\">Slot Interval</label>\r\n              </div>\r\n              <div class=\"col-right\">\r\n                <ejs-dropdownlist id='slotInterval' width='170px' [dataSource]='timeSlotCount'\r\n                  (change)='onTimescaleIntervalChange($event)' [value]='timeSlotCountValue' popupHeight='150px'>\r\n                </ejs-dropdownlist>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".e-schedule .e-timeline-view .e-date-header-wrap table col,\r\n.e-schedule .e-timeline-view .e-content-wrap table col,\r\n.e-schedule .e-timeline-month-view .e-date-header-wrap table col,\r\n.e-schedule .e-timeline-month-view .e-content-wrap table col {\r\n  width: 75px !important;\r\n}\r\n\r\n.e-schedule .e-timeline-view .e-resource-cells,\r\n.e-schedule .e-timeline-month-view .e-resource-cells {\r\n  padding: 0 15px;\r\n}\r\n\r\n.material .e-schedule-clock::before {\r\n  content: \"\\e20c\";\r\n}\r\n\r\n.fabric .e-schedule-clock::before,\r\n.highcontrast .e-schedule-clock::before {\r\n  content: \"\\e97f\";\r\n}\r\n\r\n.bootstrap .e-schedule-clock::before {\r\n  content: \"\\e93e\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-clock::before {\r\n  content: \"\\e7c7\";\r\n}\r\n\r\n.material .e-schedule-timezone::before,\r\n.bootstrap .e-schedule-timezone::before {\r\n  content: \"\\e30e\";\r\n}\r\n\r\n.fabric .e-schedule-timezone::before,\r\n.highcontrast .e-schedule-timezone::before {\r\n  content: \"\\e311\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-timezone::before {\r\n  content: \"\\e7c9\";\r\n}\r\n\r\n.material .e-schedule-print::before {\r\n  content: \"\\e813\";\r\n}\r\n\r\n.fabric .e-schedule-print::before,\r\n.bootstrap .e-schedule-print::before,\r\n.highcontrast .e-schedule-print::before {\r\n  content: \"\\e7df\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-print::before {\r\n  content: \"\\e743\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-import::before {\r\n  content: \"\\e77a\";\r\n}\r\n\r\n.material .e-schedule-ical-export::before,\r\n.fabric .e-schedule-ical-export::before {\r\n  content: \"\\e711\";\r\n}\r\n\r\n.bootstrap .e-schedule-ical-export::before {\r\n  content: \"\\e702\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-ical-export::before {\r\n  content: \"\\e780\";\r\n}\r\n\r\n.highcontrast .e-schedule-ical-export::before {\r\n  content: \"\\e712\";\r\n}\r\n\r\n.material .e-schedule-excel-export::before {\r\n  content: \"\\e700\";\r\n}\r\n\r\n.fabric .e-schedule-excel-export::before,\r\n.highcontrast .e-schedule-excel-export::before {\r\n  content: \"\\242\";\r\n}\r\n\r\n.bootstrap .e-schedule-excel-export::before {\r\n  content: \"\\e70b\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-excel-export::before {\r\n  content: \"\\e74e\";\r\n}\r\n\r\n.material .e-schedule-add-event::before,\r\n.fabric .e-schedule-add-event::before,\r\n.bootstrap .e-schedule-add-event::before,\r\n.highcontrast .e-schedule-add-event::before {\r\n  content: \"\\e823\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-add-event::before {\r\n  content: \"\\e759\";\r\n}\r\n\r\n.material .e-schedule-add-recurrence-event::before,\r\n.bootstrap .e-schedule-add-recurrence-event::before {\r\n  content: \"\\e308\";\r\n}\r\n\r\n.fabric .e-schedule-add-recurrence-event::before,\r\n.highcontrast .e-schedule-add-recurrence-event::before {\r\n  content: \"\\e309\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-add-recurrence-event::before {\r\n  content: \"\\e7c8\";\r\n}\r\n\r\n.material .e-schedule-day-view::before {\r\n  content: \"\\e31b\";\r\n}\r\n\r\n.fabric .e-schedule-day-view::before,\r\n.highcontrast .e-schedule-day-view::before {\r\n  content: \"\\e317\";\r\n}\r\n\r\n.bootstrap .e-schedule-day-view::before {\r\n  content: \"\\e318\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-day-view::before {\r\n  content: \"\\e7b8\";\r\n}\r\n\r\n.material .e-schedule-week-view::before {\r\n  content: \"\\e315\";\r\n}\r\n\r\n.fabric .e-schedule-week-view::before,\r\n.highcontrast .e-schedule-week-view::before {\r\n  content: \"\\e31f\";\r\n}\r\n\r\n.bootstrap .e-schedule-week-view::before {\r\n  content: \"\\e320\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-week-view::before {\r\n  content: \"\\e7c0\";\r\n}\r\n\r\n.material .e-schedule-workweek-view::before {\r\n  content: \"\\e314\";\r\n}\r\n\r\n.fabric .e-schedule-workweek-view::before,\r\n.highcontrast .e-schedule-workweek-view::before {\r\n  content: \"\\e323\";\r\n}\r\n\r\n.bootstrap .e-schedule-workweek-view::before {\r\n  content: \"\\e319\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-workweek-view::before {\r\n  content: \"\\e7c0\";\r\n}\r\n\r\n.material .e-schedule-month-view::before,\r\n.material .e-schedule-year-view::before {\r\n  content: \"\\e93c\";\r\n}\r\n\r\n.fabric .e-schedule-month-view::before,\r\n.fabric .e-schedule-year-view::before,\r\n.highcontrast .e-schedule-month-view::before,\r\n.highcontrast .e-schedule-year-view::before {\r\n  content: \"\\ea90\";\r\n}\r\n\r\n.bootstrap .e-schedule-month-view::before,\r\n.bootstrap .e-schedule-year-view::before {\r\n  content: \"\\ea8f\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-month-view::before,\r\n.bootstrap4 .e-schedule-year-view::before {\r\n  content: \"\\e7c4\";\r\n}\r\n\r\n.material .e-schedule-agenda-view::before {\r\n  content: \"\\e31d\";\r\n}\r\n\r\n.fabric .e-schedule-agenda-view::before,\r\n.highcontrast .e-schedule-agenda-view::before {\r\n  content: \"\\e316\";\r\n}\r\n\r\n.bootstrap .e-schedule-agenda-view::before {\r\n  content: \"\\e31a\";\r\n}\r\n\r\n.bootstrap4 .e-schedule-agenda-view::before {\r\n  content: \"\\e7bd\";\r\n}\r\n\r\n.e-schedule-toolbar-settings::before {\r\n  content: \"\\e679\";\r\n  font-size: 14px;\r\n}\r\n\r\n.material .schedule-overview .overview-toolbar .e-toolbar {\r\n  border-style: solid;\r\n}\r\n\r\n.material .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import .e-upload-browse-btn {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.highcontrast .schedule-overview .overview-header .overview-titlebar {\r\n  background-color: #ffd939;\r\n}\r\n\r\n.highcontrast .schedule-overview .overview-header,\r\n.highcontrast .schedule-overview .overview-content {\r\n  border: 1px solid #969696;\r\n}\r\n\r\n.highcontrast .schedule-overview .overview-content {\r\n  border-top: 0;\r\n}\r\n\r\n.highcontrast .schedule-overview .overview-toolbar .e-toolbar,\r\n.highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator,\r\n.highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-hscroll .e-scroll-nav.e-scroll-left-nav,\r\n.highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-hscroll .e-scroll-nav.e-scroll-right-nav {\r\n  border-color: #969696;\r\n}\r\n\r\n.material .schedule-overview .overview-toolbar .overview-toolbar-settings,\r\n.material .schedule-overview .overview-content .right-panel .control-panel {\r\n  background-color: #fafafa;\r\n}\r\n\r\n.fabric .schedule-overview .overview-toolbar .overview-toolbar-settings,\r\n.fabric .schedule-overview .overview-content .right-panel .control-panel {\r\n  background-color: #ffffff;\r\n}\r\n\r\n.bootstrap .schedule-overview .overview-toolbar .overview-toolbar-settings,\r\n.bootstrap .schedule-overview .overview-content .right-panel .control-panel {\r\n  background-color: #f8f8f8;\r\n}\r\n\r\n.highcontrast .schedule-overview .overview-toolbar .overview-toolbar-settings,\r\n.highcontrast .schedule-overview .overview-content .right-panel .control-panel {\r\n  background-color: #000000;\r\n  border-color: #969696;\r\n  color: #ffffff;\r\n}\r\n\r\n.schedule-overview .overview-header {\r\n  border: 1px solid #007bff;\r\n}\r\n\r\n.schedule-overview .overview-header .overview-titlebar {\r\n  background-color: #007bff;\r\n  color: #ffffff;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  width: inherit;\r\n  font-size: 12px;\r\n  padding: 0 10px;\r\n  font-family: inherit;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.schedule-overview .overview-header .overview-titlebar .right-panel {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import {\r\n  line-height: 40px;\r\n}\r\n\r\n.schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button,\r\n.schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:focus,\r\n.schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:hover {\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n  box-shadow: none;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  text-transform: capitalize;\r\n  font-weight: 400;\r\n}\r\n\r\n.schedule-overview .overview-header .overview-titlebar .title-bar-btn,\r\n.schedule-overview .overview-header .overview-titlebar .title-bar-btn:hover,\r\n.schedule-overview .overview-header .overview-titlebar .title-bar-btn:focus,\r\n.schedule-overview .overview-header .overview-titlebar .e-dropdown-btn,\r\n.schedule-overview .overview-header .overview-titlebar .e-dropdown-btn.e-btn {\r\n  background: transparent;\r\n  box-shadow: none;\r\n  font-family: inherit;\r\n  border-color: transparent;\r\n  border-radius: 2px;\r\n  color: inherit;\r\n  font-size: 12px;\r\n  text-transform: capitalize;\r\n  height: 40px;\r\n  font-weight: 400;\r\n}\r\n\r\n.schedule-overview .overview-toolbar {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\n.schedule-overview .overview-toolbar .e-toolbar {\r\n  border-radius: 0;\r\n}\r\n\r\n.schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-tbtn-txt {\r\n  display: inline-grid;\r\n}\r\n\r\n.schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item.e-template {\r\n  margin: 0 5px;\r\n}\r\n\r\n.schedule-overview .overview-toolbar .overview-toolbar-settings {\r\n  border-radius: 0;\r\n  background-color: #f8f9fa;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n  border-left-width: 0;\r\n  border-top-width: 0;\r\n  box-shadow: none;\r\n  color: #495057;\r\n  height: 72px;\r\n  line-height: 1.6;\r\n  outline: none;\r\n  width: 100%;\r\n}\r\n\r\n.schedule-overview .overview-content {\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-top: 0;\r\n  display: flex;\r\n}\r\n\r\n.schedule-overview .overview-content .left-panel {\r\n  height: 600px;\r\n  width: 100%;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel {\r\n  display: block;\r\n  height: 600px;\r\n  transform: translateX(0%);\r\n  transition: transform .5s ease, width 500ms;\r\n  width: 500px;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel.hide {\r\n  display: none;\r\n  transform: translateX(100%);\r\n  transition: transform .5s ease, width 500ms;\r\n  width: 0;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel .control-panel {\r\n  background: rgba(248, 249, 250, 1);\r\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\r\n  font-size: 14px;\r\n  height: calc(100% - 30px);\r\n  overflow: auto;\r\n  padding: 15px;\r\n  width: calc(100% - 30px);\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel .control-panel .col-row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel .control-panel label {\r\n  font-weight: 500;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel .control-panel .col-left {\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.schedule-overview .overview-content .right-panel .control-panel .col-right {\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.schedule-overview .overview-scheduler {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.schedule-overview .e-schedule .e-vertical-view .e-header-cells {\r\n  text-align: center !important;\r\n  padding: 0;\r\n}\r\n\r\n.schedule-overview .e-schedule .date-text {\r\n  font-size: 14px;\r\n}\r\n\r\n.schedule-overview .e-schedule.e-device .date-text {\r\n  font-size: 12px;\r\n}\r\n\r\n.schedule-overview .e-schedule .weather-image {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.schedule-overview .e-schedule .weather-text {\r\n  font-size: 11px;\r\n}\r\n\r\n.schedule-overview .e-schedule-toolbar .e-views:not(.e-active-view),\r\n.schedule-workweek.e-multi-select-list-wrapper.e-checkbox .e-filter-parent,\r\n.schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-filter-parent {\r\n  display: none;\r\n}\r\n\r\n.schedule-overview .e-timeline-view .e-resource-left-td,\r\n.schedule-overview .e-timeline-month-view .e-resource-left-td {\r\n  width: 120px;\r\n}\r\n\r\n.schedule-overview .e-timeline-view .e-date-header-wrap table tbody td,\r\n.schedule-overview .e-timeline-month-view .e-date-header-wrap table tbody td {\r\n  height: 44px;\r\n}\r\n\r\n.schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-list-parent li:first-child {\r\n  background-image: none;\r\n  opacity: .5;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.schedule-overview .calendar-import.e-upload {\r\n  border: 0;\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.schedule-overview .calendar-import.e-upload .e-file-select-wrap {\r\n  padding: 0\r\n}\r\n\r\n.schedule-overview .calendar-import.e-upload .e-file-select-wrap .e-file-drop,\r\n.calendar-import .e-upload-files {\r\n  display: none;\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .new::before {\r\n  content: '\\e7f9';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .edit::before {\r\n  content: '\\ea9a';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .recurrence::before {\r\n  content: '\\e308';\r\n  font-weight: bold;\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e322';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .delete::before {\r\n  content: '\\e94a';\r\n}\r\n\r\n.e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n.schedule-context-menu ul .e-menu-item .e-menu-icon {\r\n  font-size: 12px;\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .today::before,\r\n.fabric .schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e321';\r\n}\r\n\r\n.bootstrap .schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e312';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .delete::before,\r\n.fabric .schedule-context-menu .e-menu-item .delete::before {\r\n  content: '\\eb00';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .new::before,\r\n.fabric .schedule-context-menu .e-menu-item .new::before {\r\n  content: '\\e823';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .recurrence::before,\r\n.fabric .schedule-context-menu .e-menu-item .recurrence::before {\r\n  content: '\\e309';\r\n  font-weight: bold;\r\n}\r\n\r\n.schedule-overview.e-schedule .e-vertical-view .e-header-cells,\r\n.schedule-overview.e-schedule .e-timeline-month-view .e-header-cells {\r\n  padding: 0;\r\n  text-align: center !important;\r\n}\r\n\r\n.schedule-overview.e-schedule .date-text {\r\n  font-size: 14px;\r\n}\r\n\r\n.schedule-overview.e-schedule.e-device .date-text {\r\n  font-size: 12px;\r\n}\r\n\r\n.schedule-overview.e-schedule .weather-image {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.schedule-overview.e-schedule .weather-text {\r\n  font-size: 11px;\r\n}\r\n\r\n.schedule-overview.e-schedule .e-month-view .weather-image {\r\n  float: right;\r\n  margin: -20px 2px 0 0;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .new::before {\r\n  content: '\\e7f9';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .edit::before {\r\n  content: '\\ea9a';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .recurrence::before {\r\n  content: '\\e308';\r\n  font-weight: bold;\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e322';\r\n}\r\n\r\n.schedule-context-menu .e-menu-item .delete::before {\r\n  content: '\\e94a';\r\n}\r\n\r\n.e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n.schedule-context-menu ul .e-menu-item .e-menu-icon {\r\n  font-size: 12px;\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .today::before,\r\n.fabric .schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e321';\r\n}\r\n\r\n.bootstrap .schedule-context-menu .e-menu-item .today::before {\r\n  content: '\\e312';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .delete::before,\r\n.fabric .schedule-context-menu .e-menu-item .delete::before {\r\n  content: '\\eb00';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .new::before,\r\n.fabric .schedule-context-menu .e-menu-item .new::before {\r\n  content: '\\e823';\r\n}\r\n\r\n.highcontrast .schedule-context-menu .e-menu-item .recurrence::before,\r\n.fabric .schedule-context-menu .e-menu-item .recurrence::before {\r\n  content: '\\e309';\r\n  font-weight: bold;\r\n}\r\n\r\n/*  customization */\r\n\r\n.toolbar-selected {\r\n  border-bottom: 2px solid !important;\r\n    border-bottom-color: #e3165b !important;\r\n}\r\n\r\n.e-float-input, .e-float-input.e-control-wrapper {\r\n  line-height: 2.77 !important;\r\n}\r\n\r\n.e-float-text.e-label-bottom {\r\n  line-height: 65px !important;\r\n}\r\n\r\n.e-outline.e-float-input.e-control-wrapper{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7RUFLRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDJDQUEyQztFQUMzQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxtQ0FBbUM7SUFDakMsdUNBQXVDO0FBQzNDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZS1zY2hlZHVsZSAuZS10aW1lbGluZS12aWV3IC5lLWRhdGUtaGVhZGVyLXdyYXAgdGFibGUgY29sLFxyXG4uZS1zY2hlZHVsZSAuZS10aW1lbGluZS12aWV3IC5lLWNvbnRlbnQtd3JhcCB0YWJsZSBjb2wsXHJcbi5lLXNjaGVkdWxlIC5lLXRpbWVsaW5lLW1vbnRoLXZpZXcgLmUtZGF0ZS1oZWFkZXItd3JhcCB0YWJsZSBjb2wsXHJcbi5lLXNjaGVkdWxlIC5lLXRpbWVsaW5lLW1vbnRoLXZpZXcgLmUtY29udGVudC13cmFwIHRhYmxlIGNvbCB7XHJcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmUtc2NoZWR1bGUgLmUtdGltZWxpbmUtdmlldyAuZS1yZXNvdXJjZS1jZWxscyxcclxuLmUtc2NoZWR1bGUgLmUtdGltZWxpbmUtbW9udGgtdmlldyAuZS1yZXNvdXJjZS1jZWxscyB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwgLmUtc2NoZWR1bGUtY2xvY2s6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUyMGNcIjtcclxufVxyXG5cclxuLmZhYnJpYyAuZS1zY2hlZHVsZS1jbG9jazo6YmVmb3JlLFxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLWNsb2NrOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlOTdmXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtY2xvY2s6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU5M2VcIjtcclxufVxyXG5cclxuLmJvb3RzdHJhcDQgLmUtc2NoZWR1bGUtY2xvY2s6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3YzdcIjtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5lLXNjaGVkdWxlLXRpbWV6b25lOjpiZWZvcmUsXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtdGltZXpvbmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUzMGVcIjtcclxufVxyXG5cclxuLmZhYnJpYyAuZS1zY2hlZHVsZS10aW1lem9uZTo6YmVmb3JlLFxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLXRpbWV6b25lOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzExXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXA0IC5lLXNjaGVkdWxlLXRpbWV6b25lOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlN2M5XCI7XHJcbn1cclxuXHJcbi5tYXRlcmlhbCAuZS1zY2hlZHVsZS1wcmludDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTgxM1wiO1xyXG59XHJcblxyXG4uZmFicmljIC5lLXNjaGVkdWxlLXByaW50OjpiZWZvcmUsXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtcHJpbnQ6OmJlZm9yZSxcclxuLmhpZ2hjb250cmFzdCAuZS1zY2hlZHVsZS1wcmludDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTdkZlwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1wcmludDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTc0M1wiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1pbXBvcnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3N2FcIjtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5lLXNjaGVkdWxlLWljYWwtZXhwb3J0OjpiZWZvcmUsXHJcbi5mYWJyaWMgLmUtc2NoZWR1bGUtaWNhbC1leHBvcnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3MTFcIjtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuZS1zY2hlZHVsZS1pY2FsLWV4cG9ydDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTcwMlwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1pY2FsLWV4cG9ydDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTc4MFwiO1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLWljYWwtZXhwb3J0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlNzEyXCI7XHJcbn1cclxuXHJcbi5tYXRlcmlhbCAuZS1zY2hlZHVsZS1leGNlbC1leHBvcnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3MDBcIjtcclxufVxyXG5cclxuLmZhYnJpYyAuZS1zY2hlZHVsZS1leGNlbC1leHBvcnQ6OmJlZm9yZSxcclxuLmhpZ2hjb250cmFzdCAuZS1zY2hlZHVsZS1leGNlbC1leHBvcnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDI0MlwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwIC5lLXNjaGVkdWxlLWV4Y2VsLWV4cG9ydDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTcwYlwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1leGNlbC1leHBvcnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3NGVcIjtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5lLXNjaGVkdWxlLWFkZC1ldmVudDo6YmVmb3JlLFxyXG4uZmFicmljIC5lLXNjaGVkdWxlLWFkZC1ldmVudDo6YmVmb3JlLFxyXG4uYm9vdHN0cmFwIC5lLXNjaGVkdWxlLWFkZC1ldmVudDo6YmVmb3JlLFxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLWFkZC1ldmVudDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTgyM1wiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1hZGQtZXZlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3NTlcIjtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5lLXNjaGVkdWxlLWFkZC1yZWN1cnJlbmNlLWV2ZW50OjpiZWZvcmUsXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtYWRkLXJlY3VycmVuY2UtZXZlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUzMDhcIjtcclxufVxyXG5cclxuLmZhYnJpYyAuZS1zY2hlZHVsZS1hZGQtcmVjdXJyZW5jZS1ldmVudDo6YmVmb3JlLFxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLWFkZC1yZWN1cnJlbmNlLWV2ZW50OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzA5XCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXA0IC5lLXNjaGVkdWxlLWFkZC1yZWN1cnJlbmNlLWV2ZW50OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlN2M4XCI7XHJcbn1cclxuXHJcbi5tYXRlcmlhbCAuZS1zY2hlZHVsZS1kYXktdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxYlwiO1xyXG59XHJcblxyXG4uZmFicmljIC5lLXNjaGVkdWxlLWRheS12aWV3OjpiZWZvcmUsXHJcbi5oaWdoY29udHJhc3QgLmUtc2NoZWR1bGUtZGF5LXZpZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUzMTdcIjtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuZS1zY2hlZHVsZS1kYXktdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxOFwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS1kYXktdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTdiOFwiO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwgLmUtc2NoZWR1bGUtd2Vlay12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzE1XCI7XHJcbn1cclxuXHJcbi5mYWJyaWMgLmUtc2NoZWR1bGUtd2Vlay12aWV3OjpiZWZvcmUsXHJcbi5oaWdoY29udHJhc3QgLmUtc2NoZWR1bGUtd2Vlay12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzFmXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtd2Vlay12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzIwXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXA0IC5lLXNjaGVkdWxlLXdlZWstdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTdjMFwiO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwgLmUtc2NoZWR1bGUtd29ya3dlZWstdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxNFwiO1xyXG59XHJcblxyXG4uZmFicmljIC5lLXNjaGVkdWxlLXdvcmt3ZWVrLXZpZXc6OmJlZm9yZSxcclxuLmhpZ2hjb250cmFzdCAuZS1zY2hlZHVsZS13b3Jrd2Vlay12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzIzXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgLmUtc2NoZWR1bGUtd29ya3dlZWstdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxOVwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS13b3Jrd2Vlay12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlN2MwXCI7XHJcbn1cclxuXHJcbi5tYXRlcmlhbCAuZS1zY2hlZHVsZS1tb250aC12aWV3OjpiZWZvcmUsXHJcbi5tYXRlcmlhbCAuZS1zY2hlZHVsZS15ZWFyLXZpZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU5M2NcIjtcclxufVxyXG5cclxuLmZhYnJpYyAuZS1zY2hlZHVsZS1tb250aC12aWV3OjpiZWZvcmUsXHJcbi5mYWJyaWMgLmUtc2NoZWR1bGUteWVhci12aWV3OjpiZWZvcmUsXHJcbi5oaWdoY29udHJhc3QgLmUtc2NoZWR1bGUtbW9udGgtdmlldzo6YmVmb3JlLFxyXG4uaGlnaGNvbnRyYXN0IC5lLXNjaGVkdWxlLXllYXItdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZWE5MFwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwIC5lLXNjaGVkdWxlLW1vbnRoLXZpZXc6OmJlZm9yZSxcclxuLmJvb3RzdHJhcCAuZS1zY2hlZHVsZS15ZWFyLXZpZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGVhOGZcIjtcclxufVxyXG5cclxuLmJvb3RzdHJhcDQgLmUtc2NoZWR1bGUtbW9udGgtdmlldzo6YmVmb3JlLFxyXG4uYm9vdHN0cmFwNCAuZS1zY2hlZHVsZS15ZWFyLXZpZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU3YzRcIjtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5lLXNjaGVkdWxlLWFnZW5kYS12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzFkXCI7XHJcbn1cclxuXHJcbi5mYWJyaWMgLmUtc2NoZWR1bGUtYWdlbmRhLXZpZXc6OmJlZm9yZSxcclxuLmhpZ2hjb250cmFzdCAuZS1zY2hlZHVsZS1hZ2VuZGEtdmlldzo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTMxNlwiO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwIC5lLXNjaGVkdWxlLWFnZW5kYS12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMzFhXCI7XHJcbn1cclxuXHJcbi5ib290c3RyYXA0IC5lLXNjaGVkdWxlLWFnZW5kYS12aWV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlN2JkXCI7XHJcbn1cclxuXHJcbi5lLXNjaGVkdWxlLXRvb2xiYXItc2V0dGluZ3M6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGU2NzlcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXRlcmlhbCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLmUtdG9vbGJhciB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLm1hdGVyaWFsIC5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIC5vdmVydmlldy10aXRsZWJhciAuZS11cGxvYWQuY2FsZW5kYXItaW1wb3J0IC5lLXVwbG9hZC1icm93c2UtYnRuIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAub3ZlcnZpZXctdGl0bGViYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ5Mzk7XHJcbn1cclxuXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIsXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctY29udGVudCB7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxufVxyXG5cclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLmUtdG9vbGJhcixcclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLmUtdG9vbGJhciAuZS10b29sYmFyLWl0ZW1zIC5lLXRvb2xiYXItaXRlbS5lLXNlcGFyYXRvcixcclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLmUtdG9vbGJhciAuZS1oc2Nyb2xsIC5lLXNjcm9sbC1uYXYuZS1zY3JvbGwtbGVmdC1uYXYsXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy10b29sYmFyIC5lLXRvb2xiYXIgLmUtaHNjcm9sbCAuZS1zY3JvbGwtbmF2LmUtc2Nyb2xsLXJpZ2h0LW5hdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy10b29sYmFyIC5vdmVydmlldy10b29sYmFyLXNldHRpbmdzLFxyXG4ubWF0ZXJpYWwgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuLmZhYnJpYyAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLm92ZXJ2aWV3LXRvb2xiYXItc2V0dGluZ3MsXHJcbi5mYWJyaWMgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLm92ZXJ2aWV3LXRvb2xiYXItc2V0dGluZ3MsXHJcbi5ib290c3RyYXAgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG5cclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLm92ZXJ2aWV3LXRvb2xiYXItc2V0dGluZ3MsXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXItY29sb3I6ICM5Njk2OTY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAub3ZlcnZpZXctdGl0bGViYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIC5vdmVydmlldy10aXRsZWJhciAucmlnaHQtcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAub3ZlcnZpZXctdGl0bGViYXIgLmUtdXBsb2FkLmNhbGVuZGFyLWltcG9ydCB7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIC5vdmVydmlldy10aXRsZWJhciAuZS11cGxvYWQuY2FsZW5kYXItaW1wb3J0IGJ1dHRvbixcclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIgLm92ZXJ2aWV3LXRpdGxlYmFyIC5lLXVwbG9hZC5jYWxlbmRhci1pbXBvcnQgYnV0dG9uOmZvY3VzLFxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAub3ZlcnZpZXctdGl0bGViYXIgLmUtdXBsb2FkLmNhbGVuZGFyLWltcG9ydCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIgLm92ZXJ2aWV3LXRpdGxlYmFyIC50aXRsZS1iYXItYnRuLFxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAub3ZlcnZpZXctdGl0bGViYXIgLnRpdGxlLWJhci1idG46aG92ZXIsXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIC5vdmVydmlldy10aXRsZWJhciAudGl0bGUtYmFyLWJ0bjpmb2N1cyxcclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIgLm92ZXJ2aWV3LXRpdGxlYmFyIC5lLWRyb3Bkb3duLWJ0bixcclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIgLm92ZXJ2aWV3LXRpdGxlYmFyIC5lLWRyb3Bkb3duLWJ0bi5lLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctdG9vbGJhciAuZS10b29sYmFyIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLmUtdG9vbGJhciAuZS10b29sYmFyLWl0ZW0gLmUtdGJhci1idG4uZS10YnRuLXR4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctdG9vbGJhciAuZS10b29sYmFyIC5lLXRvb2xiYXItaXRlbS5lLXRlbXBsYXRlIHtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXRvb2xiYXIgLm92ZXJ2aWV3LXRvb2xiYXItc2V0dGluZ3Mge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctY29udGVudCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctY29udGVudCAubGVmdC1wYW5lbCB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZSwgd2lkdGggNTAwbXM7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWNvbnRlbnQgLnJpZ2h0LXBhbmVsLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZSwgd2lkdGggNTAwbXM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAub3ZlcnZpZXctY29udGVudCAucmlnaHQtcGFuZWwgLmNvbnRyb2wtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDksIDI1MCwgMSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWNvbnRlbnQgLnJpZ2h0LXBhbmVsIC5jb250cm9sLXBhbmVsIC5jb2wtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5vdmVydmlldy1jb250ZW50IC5yaWdodC1wYW5lbCAuY29udHJvbC1wYW5lbCAuY29sLWxlZnQge1xyXG4gIGZsZXg6IDAgMCA0MS42NjY2NjclO1xyXG4gIG1heC13aWR0aDogNDEuNjY2NjY3JTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LWNvbnRlbnQgLnJpZ2h0LXBhbmVsIC5jb250cm9sLXBhbmVsIC5jb2wtcmlnaHQge1xyXG4gIGZsZXg6IDAgMCA1OC4zMzMzMzMlO1xyXG4gIG1heC13aWR0aDogNTguMzMzMzMzJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLm92ZXJ2aWV3LXNjaGVkdWxlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLmUtc2NoZWR1bGUgLmUtdmVydGljYWwtdmlldyAuZS1oZWFkZXItY2VsbHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuZS1zY2hlZHVsZSAuZGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuZS1zY2hlZHVsZS5lLWRldmljZSAuZGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuZS1zY2hlZHVsZSAud2VhdGhlci1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLmUtc2NoZWR1bGUgLndlYXRoZXItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcgLmUtc2NoZWR1bGUtdG9vbGJhciAuZS12aWV3czpub3QoLmUtYWN0aXZlLXZpZXcpLFxyXG4uc2NoZWR1bGUtd29ya3dlZWsuZS1tdWx0aS1zZWxlY3QtbGlzdC13cmFwcGVyLmUtY2hlY2tib3ggLmUtZmlsdGVyLXBhcmVudCxcclxuLnNjaGVkdWxlLXJlc291cmNlLmUtbXVsdGktc2VsZWN0LWxpc3Qtd3JhcHBlci5lLWNoZWNrYm94IC5lLWZpbHRlci1wYXJlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuZS10aW1lbGluZS12aWV3IC5lLXJlc291cmNlLWxlZnQtdGQsXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuZS10aW1lbGluZS1tb250aC12aWV3IC5lLXJlc291cmNlLWxlZnQtdGQge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5lLXRpbWVsaW5lLXZpZXcgLmUtZGF0ZS1oZWFkZXItd3JhcCB0YWJsZSB0Ym9keSB0ZCxcclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5lLXRpbWVsaW5lLW1vbnRoLXZpZXcgLmUtZGF0ZS1oZWFkZXItd3JhcCB0YWJsZSB0Ym9keSB0ZCB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtcmVzb3VyY2UuZS1tdWx0aS1zZWxlY3QtbGlzdC13cmFwcGVyLmUtY2hlY2tib3ggLmUtbGlzdC1wYXJlbnQgbGk6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuY2FsZW5kYXItaW1wb3J0LmUtdXBsb2FkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldyAuY2FsZW5kYXItaW1wb3J0LmUtdXBsb2FkIC5lLWZpbGUtc2VsZWN0LXdyYXAge1xyXG4gIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3IC5jYWxlbmRhci1pbXBvcnQuZS11cGxvYWQgLmUtZmlsZS1zZWxlY3Qtd3JhcCAuZS1maWxlLWRyb3AsXHJcbi5jYWxlbmRhci1pbXBvcnQgLmUtdXBsb2FkLWZpbGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAubmV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGU3ZjknO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAuZWRpdDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlYTlhJztcclxufVxyXG5cclxuLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLnJlY3VycmVuY2U6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTMwOCc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC50b2RheTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlMzIyJztcclxufVxyXG5cclxuLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLmRlbGV0ZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlOTRhJztcclxufVxyXG5cclxuLmUtYmlnZ2VyIC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgdWwgLmUtbWVudS1pdGVtIC5lLW1lbnUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtY29udGV4dC1tZW51IHVsIC5lLW1lbnUtaXRlbSAuZS1tZW51LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmhpZ2hjb250cmFzdCAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAudG9kYXk6OmJlZm9yZSxcclxuLmZhYnJpYyAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAudG9kYXk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTMyMSc7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLnRvZGF5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGUzMTInO1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5kZWxldGU6OmJlZm9yZSxcclxuLmZhYnJpYyAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAuZGVsZXRlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGViMDAnO1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5uZXc6OmJlZm9yZSxcclxuLmZhYnJpYyAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAubmV3OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGU4MjMnO1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5yZWN1cnJlbmNlOjpiZWZvcmUsXHJcbi5mYWJyaWMgLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLnJlY3VycmVuY2U6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTMwOSc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldy5lLXNjaGVkdWxlIC5lLXZlcnRpY2FsLXZpZXcgLmUtaGVhZGVyLWNlbGxzLFxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcuZS1zY2hlZHVsZSAuZS10aW1lbGluZS1tb250aC12aWV3IC5lLWhlYWRlci1jZWxscyB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3LmUtc2NoZWR1bGUgLmRhdGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtb3ZlcnZpZXcuZS1zY2hlZHVsZS5lLWRldmljZSAuZGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldy5lLXNjaGVkdWxlIC53ZWF0aGVyLWltYWdlIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vdmVydmlldy5lLXNjaGVkdWxlIC53ZWF0aGVyLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnNjaGVkdWxlLW92ZXJ2aWV3LmUtc2NoZWR1bGUgLmUtbW9udGgtdmlldyAud2VhdGhlci1pbWFnZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogLTIwcHggMnB4IDAgMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5uZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTdmOSc7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5lZGl0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGVhOWEnO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAucmVjdXJyZW5jZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlMzA4JztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLnRvZGF5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGUzMjInO1xyXG59XHJcblxyXG4uc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAuZGVsZXRlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGU5NGEnO1xyXG59XHJcblxyXG4uZS1iaWdnZXIgLnNjaGVkdWxlLWNvbnRleHQtbWVudSB1bCAuZS1tZW51LWl0ZW0gLmUtbWVudS1pY29uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1jb250ZXh0LW1lbnUgdWwgLmUtbWVudS1pdGVtIC5lLW1lbnUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaGlnaGNvbnRyYXN0IC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC50b2RheTo6YmVmb3JlLFxyXG4uZmFicmljIC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC50b2RheTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlMzIxJztcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAudG9kYXk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTMxMic7XHJcbn1cclxuXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLmRlbGV0ZTo6YmVmb3JlLFxyXG4uZmFicmljIC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5kZWxldGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZWIwMCc7XHJcbn1cclxuXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLm5ldzo6YmVmb3JlLFxyXG4uZmFicmljIC5zY2hlZHVsZS1jb250ZXh0LW1lbnUgLmUtbWVudS1pdGVtIC5uZXc6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZTgyMyc7XHJcbn1cclxuXHJcbi5oaWdoY29udHJhc3QgLnNjaGVkdWxlLWNvbnRleHQtbWVudSAuZS1tZW51LWl0ZW0gLnJlY3VycmVuY2U6OmJlZm9yZSxcclxuLmZhYnJpYyAuc2NoZWR1bGUtY29udGV4dC1tZW51IC5lLW1lbnUtaXRlbSAucmVjdXJyZW5jZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxlMzA5JztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogIGN1c3RvbWl6YXRpb24gKi9cclxuXHJcbi50b29sYmFyLXNlbGVjdGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMzE2NWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmUtZmxvYXQtaW5wdXQsIC5lLWZsb2F0LWlucHV0LmUtY29udHJvbC13cmFwcGVyIHtcclxuICBsaW5lLWhlaWdodDogMi43NyAhaW1wb3J0YW50O1xyXG59XHJcbi5lLWZsb2F0LXRleHQuZS1sYWJlbC1ib3R0b20ge1xyXG4gIGxpbmUtaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lLW91dGxpbmUuZS1mbG9hdC1pbnB1dC5lLWNvbnRyb2wtd3JhcHBlcntcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-data */ "./node_modules/@syncfusion/ej2-data/index.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/__ivy_ngcc__/@syncfusion/ej2-angular-schedule.es5.js");






var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scheduler';
        this.showFileList = false;
        this.multiple = false;
        this.isInitialLoad = true;
        this.buttons = { browse: 'Import' };
        this.intl = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["Internationalization"]();
        this.currentView = 'TimelineWeek';
        this.liveTimeUpdate = new Date().toLocaleTimeString('en-US', { timeZone: 'UTC' });
        this.selectedEvents = [];
        this.selectedEventDetails = [];
        this.selectedDate = new Date();
        this.viewInterval = 2;
        this.timeScale = { interval: 60, slotCount: 1 };
        this.workHours = { start: '06:00', end: '18:00' };
        this.group = { resources: ['MeetingRoom'] };
        this.resourceQuery = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Query"]();
        this.resourceDataSource = [
            { text: 'Hall 1', id: 1, color: '#ea7a57', capacity: 20, screenNumber: 1 },
            { text: 'Hall 2', id: 2, color: '#7fa900', capacity: 7, screenNumber: 1 },
            { text: 'Hall 3', id: 3, color: '#5978ee', capacity: 5, screenNumber: 1 },
            { text: 'Hall 4', id: 4, color: '#fec200', capacity: 15, screenNumber: 1 },
            { text: 'Hall 5', id: 5, color: '#df5286', capacity: 25, screenNumber: 1 },
            { text: 'Hall 6', id: 6, color: '#00bdae', capacity: 10, screenNumber: 2 },
            { text: 'Hall 7', id: 7, color: '#865fcf', capacity: 20, screenNumber: 2 },
            { text: 'Hall 8', id: 8, color: '#1aaa55', capacity: 8, screenNumber: 2 },
            { text: 'Hall 9', id: 9, color: '#df5286', capacity: 30, screenNumber: 2 },
            { text: 'Hall 10', id: 10, color: '#710193', capacity: 25, screenNumber: 2 }
        ];
        this.allowMultiple = true;
        this.eventSettings = {
            dataSource: [],
            fields: {
                id: 'Id',
                subject: { title: 'Summary', name: 'Subject' },
                location: { title: 'Location', name: 'Location' },
                description: { title: 'Comments', name: 'Description' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' }
            }
        };
        this.toolbarItems = [
            { iconCss: '', name: 'A' },
            { iconCss: '', name: 'B' },
            { iconCss: '', name: 'C' },
            { iconCss: '', name: 'D' },
            { iconCss: '', name: 'E' },
            { iconCss: '', name: 'F' },
            { iconCss: '', name: 'G' },
            { iconCss: '', name: 'F' }
        ];
        this.isTimelineView = true;
        this.exportItems = [
            { text: 'iCalendar', iconCss: 'e-icons e-schedule-ical-export' },
            { text: 'Excel', iconCss: 'e-icons e-schedule-excel-export' }
        ];
        this.checkboxMode = 'CheckBox';
        this.firstDayOfWeek = 0;
        this.workDays = [1, 2, 3, 4, 5];
        this.calendarsValue = [1];
        this.fields = { text: 'text', value: 'value' };
        this.calendarFields = { text: 'CalendarText', value: 'CalendarId' };
        this.dayStartHourValue = new Date(new Date().setHours(0, 0, 0));
        this.dayEndHourValue = new Date(new Date().setHours(23, 59, 59));
        this.workStartHourValue = new Date(new Date().setHours(6, 0, 0));
        this.workEndHourValue = new Date(new Date().setHours(18, 0, 0));
        this.weekDays = [
            { text: 'Sunday', value: 0 },
            { text: 'Monday', value: 1 },
            { text: 'Tuesday', value: 2 },
            { text: 'Wednesday', value: 3 },
            { text: 'Thursday', value: 4 },
            { text: 'Friday', value: 5 },
            { text: 'Saturday', value: 6 }
        ];
        this.timezoneData = [
            { text: 'UTC -12:00', value: 'Etc/GMT+12' },
            { text: 'UTC -11:00', value: 'Etc/GMT+11' },
            { text: 'UTC -10:00', value: 'Etc/GMT+10' },
            { text: 'UTC -09:00', value: 'Etc/GMT+9' },
            { text: 'UTC -08:00', value: 'Etc/GMT+8' },
            { text: 'UTC -07:00', value: 'Etc/GMT+7' },
            { text: 'UTC -06:00', value: 'Etc/GMT+6' },
            { text: 'UTC -05:00', value: 'Etc/GMT+5' },
            { text: 'UTC -04:00', value: 'Etc/GMT+4' },
            { text: 'UTC -03:00', value: 'Etc/GMT+3' },
            { text: 'UTC -02:00', value: 'Etc/GMT+2' },
            { text: 'UTC -01:00', value: 'Etc/GMT+1' },
            { text: 'UTC +00:00', value: 'Etc/GMT' },
            { text: 'UTC +01:00', value: 'Etc/GMT-1' },
            { text: 'UTC +02:00', value: 'Etc/GMT-2' },
            { text: 'UTC +03:00', value: 'Etc/GMT-3' },
            { text: 'UTC +04:00', value: 'Etc/GMT-4' },
            { text: 'UTC +05:00', value: 'Etc/GMT-5' },
            { text: 'UTC +05:30', value: 'Asia/Calcutta' },
            { text: 'UTC +06:00', value: 'Etc/GMT-6' },
            { text: 'UTC +07:00', value: 'Etc/GMT-7' },
            { text: 'UTC +08:00', value: 'Etc/GMT-8' },
            { text: 'UTC +09:00', value: 'Etc/GMT-9' },
            { text: 'UTC +10:00', value: 'Etc/GMT-10' },
            { text: 'UTC +11:00', value: 'Etc/GMT-11' },
            { text: 'UTC +12:00', value: 'Etc/GMT-12' },
            { text: 'UTC +13:00', value: 'Etc/GMT-13' },
            { text: 'UTC +14:00', value: 'Etc/GMT-14' }
        ];
        this.timeSlotDuration = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
        this.timeSlotCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.timeSlotDurationValue = 60;
        this.timeSlotCountValue = 2;
    }
    AppComponent.prototype.onCreated = function () {
        var keyboardObj = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["KeyboardEvents"](this.scheduleObj.element, {
            keyConfigs: {
                cut: 'ctrl+x',
                copy: 'ctrl+c',
                paste: 'ctrl+v'
            },
            keyAction: this.keyActionHandler.bind(this)
        });
        keyboardObj.eventName = 'keyDown';
        this.renderResourceFilter();
    };
    AppComponent.prototype.onActionComplete = function (args) {
        if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
            this.renderResourceFilter();
        }
    };
    AppComponent.prototype.renderResourceFilter = function () {
        var _this = this;
        var target;
        if (this.scheduleObj.currentView === 'TimelineYear') {
            var leftElement = this.scheduleObj.element.querySelector('.e-left-indent .e-resource-cells');
            target = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', { className: 'e-resource-text' });
            leftElement.appendChild(target);
        }
        else {
            target = this.scheduleObj.element.querySelector('.e-resource-left-td .e-resource-text, .e-left-indent .e-header-cells');
        }
        if (target) {
            var dropdown = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["createElement"])('input', { id: 'screen_number' });
            target.appendChild(dropdown);
            var dropDownObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownList"]({
                placeholder: 'Screen Number',
                dataSource: [
                    { name: 'Screen 1', value: 1 },
                    { name: 'Screen 2', value: 2 }
                ],
                fields: { text: 'name', value: 'value' },
                change: function (props) {
                    _this.scheduleObj.resources[0].query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Query"]().where('screenNumber', 'equal', props.value);
                }
            });
            dropDownObj.appendTo(dropdown);
        }
    };
    AppComponent.prototype.onDataBound = function () {
        if (this.isInitialLoad) {
            this.isInitialLoad = false;
            this.renderResourceFilter();
        }
    };
    AppComponent.prototype.keyActionHandler = function (args) {
        var e_1, _a;
        var _this = this;
        this.selectedEvents = [].slice.call(this.scheduleObj.element.querySelectorAll('.e-appointment.e-appointment-border'));
        switch (args.action) {
            case 'cut':
            case 'copy':
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedEvents), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var events = _c.value;
                        var eventDetails = this.scheduleObj.getEventDetails(events);
                        if (eventDetails) {
                            this.selectedEventDetails.push(eventDetails);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                break;
            case 'paste':
                var target = [].slice.call(this.scheduleObj.element.querySelectorAll('.e-work-cells.e-selected-cell'));
                var proxy_1 = this;
                target.forEach(function (e) {
                    var e_2, _a;
                    var eventDetails = proxy_1.scheduleObj.quickPopup.getDataFromTarget(e);
                    var saveData = [];
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.selectedEventDetails), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var events = _c.value;
                            var duration = events.EndTime.getTime() - events.StartTime.getTime();
                            var cloneDetails = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, events, null, true);
                            cloneDetails.StartTime = new Date(eventDetails.StartTime);
                            cloneDetails.EndTime = new Date(eventDetails.StartTime);
                            cloneDetails.EndTime.setMilliseconds(duration);
                            cloneDetails.Id = proxy_1.scheduleObj.getEventMaxID();
                            cloneDetails.HallId = eventDetails.HallId;
                            saveData.push(cloneDetails);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (saveData.length > 0) {
                        proxy_1.scheduleObj.addEvent(saveData);
                    }
                });
                break;
        }
    };
    AppComponent.prototype.onToolbarCreated = function () {
        var _this = this;
        setInterval(function () { _this.updateLiveTime(_this.scheduleObj ? _this.scheduleObj.timezone : 'UTC'); }, 1000);
    };
    AppComponent.prototype.onToolbarItemClicked = function (args) {
        var selectedEle = document.getElementsByClassName('toolbar-selected')[0];
        if (selectedEle) {
            selectedEle.classList.remove('toolbar-selected');
        }
        switch (args.item.text) {
            case 'Day':
                this.currentView = this.isTimelineView ? 'TimelineDay' : 'Day';
                break;
            case 'Week':
                this.currentView = this.isTimelineView ? 'TimelineWeek' : 'Week';
                break;
            case 'WorkWeek':
                this.currentView = this.isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                break;
            case 'Month':
                this.currentView = this.isTimelineView ? 'TimelineMonth' : 'Month';
                break;
            case 'Year':
                this.currentView = this.isTimelineView ? 'TimelineYear' : 'Year';
                break;
            case 'Agenda':
                this.currentView = 'Agenda';
                break;
            case 'New Event':
                var eventData = this.getEventData();
                this.scheduleObj.openEditor(eventData, 'Add', true);
                break;
            case 'New Recurring Event':
                var recEventData = this.getEventData();
                this.scheduleObj.openEditor(recEventData, 'Add', true, 1);
                break;
        }
        args.originalEvent.srcElement.parentElement.classList.add('toolbar-selected');
    };
    AppComponent.prototype.getEventData = function () {
        var date = this.scheduleObj.selectedDate;
        return {
            Id: this.scheduleObj.getEventMaxID(),
            Subject: '',
            StartTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), 0, 0),
            EndTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours() + 1, 0, 0),
            Location: '',
            Description: '',
            IsAllDay: false,
            CalendarId: 1
        };
    };
    AppComponent.prototype.updateLiveTime = function (timezone) {
        if (timezone === void 0) { timezone = 'UTC'; }
        this.liveTimeUpdate = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    };
    AppComponent.prototype.onTimelineViewChange = function (args) {
        this.isTimelineView = args.checked;
        switch (this.scheduleObj.currentView) {
            case 'Day':
            case 'TimelineDay':
                this.currentView = this.isTimelineView ? 'TimelineDay' : 'Day';
                break;
            case 'Week':
            case 'TimelineWeek':
                this.currentView = this.isTimelineView ? 'TimelineWeek' : 'Week';
                break;
            case 'WorkWeek':
            case 'TimelineWorkWeek':
                this.currentView = this.isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                break;
            case 'Month':
            case 'TimelineMonth':
                this.currentView = this.isTimelineView ? 'TimelineMonth' : 'Month';
                break;
            case 'Year':
            case 'TimelineYear':
                this.currentView = this.isTimelineView ? 'TimelineYear' : 'Year';
                break;
            case 'Agenda':
                this.currentView = 'Agenda';
                break;
        }
    };
    AppComponent.prototype.onWeekNumberChange = function (args) {
        this.scheduleObj.showWeekNumber = args.checked;
    };
    AppComponent.prototype.onGroupingChange = function (args) {
        this.scheduleObj.group.resources = args.checked ? ['MeetingRoom'] : [];
    };
    AppComponent.prototype.onGridlinesChange = function (args) {
        this.scheduleObj.timeScale.enable = args.checked;
    };
    AppComponent.prototype.onRowAutoHeightChange = function (args) {
        this.scheduleObj.rowAutoHeight = args.checked;
    };
    AppComponent.prototype.onTooltipChange = function (args) {
        this.scheduleObj.eventSettings.enableTooltip = args.checked;
    };
    AppComponent.prototype.onSelected = function (args) {
        this.scheduleObj.importICalendar(args.event.target.files[0]);
    };
    AppComponent.prototype.onSettingsClick = function () {
        var settingsPanel = document.querySelector('.overview-content .right-panel');
        if (settingsPanel.classList.contains('hide')) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["removeClass"])([settingsPanel], 'hide');
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__["addClass"])([settingsPanel], 'hide');
        }
        this.scheduleObj.refreshEvents();
    };
    AppComponent.prototype.onWeekDayChange = function (args) {
        this.scheduleObj.firstDayOfWeek = args.value;
    };
    AppComponent.prototype.onWorkWeekDayChange = function (args) {
        this.scheduleObj.workDays = args.value;
    };
    AppComponent.prototype.onResourceChange = function (args) {
        var e_3, _a;
        var resourcePredicate;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(args.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                if (resourcePredicate) {
                    resourcePredicate = resourcePredicate.or(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Predicate"]('CalendarId', 'equal', value));
                }
                else {
                    resourcePredicate = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Predicate"]('CalendarId', 'equal', value);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.scheduleObj.resources[0].query = resourcePredicate ? new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Query"]().where(resourcePredicate) :
            new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__["Query"]().where('CalendarId', 'equal', 1);
    };
    AppComponent.prototype.onTimezoneChange = function (args) {
        this.scheduleObj.timezone = args.value;
        this.updateLiveTime(this.scheduleObj.timezone);
        document.querySelector('.schedule-overview #timezoneBtn').innerHTML =
            '<span class="e-btn-icon e-icons e-schedule-timezone e-icon-left"></span>' + args.itemData.text;
    };
    AppComponent.prototype.onDayStartHourChange = function (args) {
        this.scheduleObj.startHour = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    };
    AppComponent.prototype.onDayEndHourChange = function (args) {
        this.scheduleObj.endHour = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    };
    AppComponent.prototype.onWorkStartHourChange = function (args) {
        this.scheduleObj.workHours.start = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    };
    AppComponent.prototype.onWorkEndHourChange = function (args) {
        this.scheduleObj.workHours.end = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    };
    AppComponent.prototype.onTimescaleDurationChange = function (args) {
        this.scheduleObj.timeScale.interval = args.value;
    };
    AppComponent.prototype.onTimescaleIntervalChange = function (args) {
        this.scheduleObj.timeScale.slotCount = args.value;
    };
    AppComponent.prototype.getResourceData = function (data) {
        var resources = this.scheduleObj.getResourceCollections()[0];
        var resourceData = resources.dataSource.filter(function (resource) {
            return resource.CalendarId === data.HallId;
        })[0];
        return resourceData;
    };
    AppComponent.prototype.getHeaderStyles = function (data) {
        if (data.elementType === 'cell') {
            return { 'align-items': 'center', color: '#919191' };
        }
        else {
            var resourceData = this.getResourceData(data);
            return { background: resourceData.CalendarColor, color: '#FFFFFF' };
        }
    };
    AppComponent.prototype.getHeaderTitle = function (data) {
        return (data.elementType === 'cell') ? 'Add Appointment' : 'Appointment Details';
    };
    AppComponent.prototype.getHeaderDetails = function (data) {
        return this.intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    AppComponent.prototype.getEventType = function (data) {
        var resourceData = this.getResourceData(data);
        return resourceData.CalendarText;
    };
    AppComponent.prototype.buttonClickActions = function (e) {
        var _this = this;
        var quickPopup = this.scheduleObj.element.querySelector('.e-quick-popup-wrapper');
        var getSlotData = function () {
            var cellDetails = _this.scheduleObj.getCellDetails(_this.scheduleObj.getSelectedElements());
            var addObj = {};
            addObj.Id = _this.scheduleObj.getEventMaxID();
            addObj.Subject = quickPopup.querySelector('#title').ej2_instances[0].value;
            addObj.StartTime = new Date(+cellDetails.startTime);
            addObj.EndTime = new Date(+cellDetails.endTime);
            addObj.Description = quickPopup.querySelector('#notes').ej2_instances[0].value;
            addObj.CalendarId = quickPopup.querySelector('#eventType').ej2_instances[0].value;
            return addObj;
        };
        if (e.target.id === 'add') {
            var addObj = getSlotData();
            this.scheduleObj.addEvent(addObj);
        }
        else if (e.target.id === 'delete') {
            var eventDetails = this.scheduleObj.activeEventData.event;
            var currentAction = void 0;
            if (eventDetails.RecurrenceRule) {
                currentAction = 'DeleteOccurrence';
            }
            this.scheduleObj.deleteEvent(eventDetails, currentAction);
        }
        else {
            var isCellPopup = quickPopup.firstElementChild.classList.contains('e-cell-popup');
            var eventDetails = isCellPopup ? getSlotData() :
                this.scheduleObj.activeEventData.event;
            var currentAction = isCellPopup ? 'Add' : 'Save';
            if (eventDetails.RecurrenceRule) {
                currentAction = 'EditOccurrence';
            }
            this.scheduleObj.openEditor(eventDetails, currentAction, true);
        }
        this.scheduleObj.closeQuickInfoPopup();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleObj')
    ], AppComponent.prototype, "scheduleObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventTypeObj')
    ], AppComponent.prototype, "eventTypeObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titleObj')
    ], AppComponent.prototype, "titleObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notesObj')
    ], AppComponent.prototype, "notesObj", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["YearService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["AgendaService"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["TimelineViewsService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["TimelineMonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_5__["TimelineYearService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/__ivy_ngcc__/@syncfusion/ej2-angular-navigations.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ "./node_modules/@syncfusion/ej2-angular-buttons/__ivy_ngcc__/@syncfusion/ej2-angular-buttons.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/__ivy_ngcc__/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "./node_modules/@syncfusion/ej2-angular-inputs/__ivy_ngcc__/@syncfusion/ej2-angular-inputs.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ "./node_modules/@syncfusion/ej2-angular-splitbuttons/__ivy_ngcc__/@syncfusion/ej2-angular-splitbuttons.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ScheduleModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_3__["ToolbarModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__["SwitchModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["UploaderModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__["DropDownListAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__["MultiSelectAllModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["TextBoxAllModule"], _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonAllModule"], _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_9__["DropDownButtonModule"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_5__["TimePickerModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\viztix\scheduler\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map