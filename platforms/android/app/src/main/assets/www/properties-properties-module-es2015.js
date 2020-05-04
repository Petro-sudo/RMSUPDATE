(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["properties-properties-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/properties/properties.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/properties/properties.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" color=\"dark\">\r\n  <ion-header color=\"dark\" >\r\n    <ion-toolbar color=\"dark\">\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-card color=\"dark\" style=\"  background: linear-gradient(60deg, #00FF7F 50%, lightseagreen 50%);border-radius: 50%; margin-left: 70px; text-align:center\" > \r\n    hello50\r\n  </ion-card>\r\n\r\n  <ion-content color=\"dark\">\r\n  \r\n    <ion-list  color=\"dark\" lines=\"none\" *ngFor=\"let pages of navigate\"  >\r\n     \r\n    <ion-menu-toggle auto-hide=\"true\" color=\"dark\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\" lines=\"none\" color=\"dark\"  >\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\" color=\"dark\" ></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar >\r\n  \r\n      <ion-buttons slot=\"start\" color=\"dark\">\r\n      <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <li><a routerLink=\"/folder/Home\"><ion-icon name=\"log-out-outline\" style=\"font-size: 20px; background-color:rgb(6, 2, 73)\r\n        ; color: white ;\" >previous</ion-icon></a></li>\r\n        <li> <div class=\"border\">\r\n          <ion-input type=\"text\" placeholder=\"Search\">\r\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon></ion-input>\r\n              </div>\r\n        </li>\r\n  \r\n        <li><a routerLink=\"/help/helplord\">HELP</a></li>\r\n\r\n\r\n     \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-card style=\"margin-left:80px ; width:220px ;border-radius: 20px; height:50px ;background-color: white;color: rgb(6, 2, 73);\">\r\n   \r\n    <ion-label style=\"color:black ; ;margin-left: 60px;margin-top:-30px;font-size:14px; text-align: left;\">\r\n     Dashboard\r\n    </ion-label>\r\n   </ion-card>\r\n <ion-card style=\"background-color: rgb(6, 2, 73);\r\n margin-left: 280px;margin-top: -60px;\r\n border-radius: 20px; height:50px ; width:220px ; \" >\r\n  \r\n  <ion-label style=\"margin-left: 60px;margin-top:-30px;color:white;\r\n   font-size:14px;margin-left: 30px;width:50px ;\">\r\n   Property\r\n  </ion-label>\r\n </ion-card> \r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"tab\">\r\n    <button class=\"tablinks\" (click)=\"openCity(event, 'Dashboard')\">DASHBOARD</button>\r\n    <button class=\"tablinks\" (click)=\"openCity(event, 'Issues')\">ISSUES</button>\r\n    <button class=\"tablinks\" (click)=\"openCity(event, 'Tenants')\">TENANTS</button>\r\n  </div>\r\n  \r\n  <div id=\"Dashboard\" class=\"tabcontent\">\r\n    <h3>Dashboard</h3><br>\r\n    <br>\r\n    \r\n    <h2 style=\"color:black ;border-left:10px solid rgb(6, 2, 73);\"> Overview +Stats:TUTEH Residence</h2>\r\n   <ion-button fill=\"outline\" (click)=\"presentAlertPrompt()\">Broadcast a notice</ion-button>\r\n   <ion-button fill=\"outline\" (click)=\"presentAlertPrompt2()\">Log an issue</ion-button>\r\n<ion-grid>\r\n  <ion-row>\r\n  <ion-col col=6>\r\n  \r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title>Occupied beds</ion-card-title>\r\n      <ion-button color=\"dark\" shape=\"round\"><ion-icon name=\"bed-outline\"></ion-icon>\r\n        7\r\n      </ion-button>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <canvas #barChart></canvas>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  </ion-col>\r\n  \r\n  <ion-col col=2>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title>Ratings( 7 total)</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <canvas #label></canvas>\r\n      <br><br><br><br>\r\n      <br>\r\n    </ion-card-content>\r\n   \r\n  </ion-card>\r\n  </ion-col>\r\n  \r\n  </ion-row>\r\n  </ion-grid>\r\n  \r\n  </div>\r\n  \r\n  <div id=\"Issues\" class=\"tabcontent\">\r\n    \r\n    <h1>Issues</h1>\r\n    <ion-searchbar></ion-searchbar>\r\n    <table class=\"rwd-table\">\r\n      \r\n      <tr>\r\n        <th>Date</th>\r\n        <th>Full Name</th>\r\n        <th>Description</th>\r\n        <th>Status</th>\r\n        <th>View</th>\r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"Date\">2020/05/01</td>\r\n        <td data-th=\"Full Name\">Kgopotso Lelake</td>\r\n        <td data-th=\"Description\">Lights not working</td>\r\n        <td data-th=\"Status\">In- progress</td>\r\n        <td data-th=\"View\"><ion-button> view</ion-button></td>\r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"Date\">2020/05/02</td>\r\n        <td data-th=\"Full Name\">Peter moluleka</td>\r\n        <td data-th=\"Description\">stove not working</td>\r\n        <td data-th=\"Status\">In- progress</td>\r\n        <td data-th=\"View\"><ion-button> view</ion-button></td>\r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"Date\">2020/05/01</td>\r\n        <td data-th=\"Full Name\">Noxolo Zuma</td>\r\n        <td data-th=\"Description\">socket not working</td>\r\n        <td data-th=\"Status\">In- progress</td>\r\n        <td data-th=\"View\"><ion-button> view</ion-button></td>\r\n      </tr>\r\n    </table>\r\n    \r\n    <!-- <p>&larr; Drag window (in editor or full page view) to see the effect. &rarr;</p> -->\r\n\r\n\r\n\r\n\r\n  </div>\r\n  \r\n  <div id=\"Tenants\" class=\"tabcontent\">\r\n    <h3></h3>\r\n   \r\n    \r\n\r\n    <h1>Tenants</h1>\r\n    <ion-searchbar></ion-searchbar>\r\n    <table class=\"rwd-table\">\r\n      \r\n      <tr>\r\n        <th>student Number</th>\r\n        <th>student Number</th>\r\n        <th>building</th>\r\n        <th>Start Date</th>\r\n        <th>End Date</th>\r\n        \r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"StudentNumber\">21826885</td>\r\n        <td data-th=\"Full Name\">Kgopotso Lelake</td>\r\n        <td data-th=\"Building\">1-g-77</td>\r\n        <td data-th=\"Start Date\">2020/05/30</td>\r\n        <td data-th=\"End Date\">2020/05/30</td>\r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"StudentNumber\">21826888</td>\r\n        <td data-th=\"Full Name\">Petre maluleka</td>\r\n        <td data-th=\"Building\">1-g-78</td>\r\n        <td data-th=\"Start Date\">2020/05/30</td>\r\n        <td data-th=\"End Date\">2020/05/30</td>\r\n      </tr>\r\n      <tr>\r\n        <td data-th=\"StudentNumber\">21924885</td>\r\n        <td data-th=\"Full Name\">Noxolo Zuma</td>\r\n        <td data-th=\"Building\">1-g-79</td>\r\n        <td data-th=\"Start Date\">2020/05/30</td>\r\n        <td data-th=\"End Date\">2020/05/30</td>\r\n      </tr>\r\n    </table>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   </ion-content>");

/***/ }),

/***/ "./src/app/properties/properties-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/properties/properties-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PropertiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPageRoutingModule", function() { return PropertiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties.page */ "./src/app/properties/properties.page.ts");




const routes = [
    {
        path: '',
        component: _properties_page__WEBPACK_IMPORTED_MODULE_3__["PropertiesPage"]
    }
];
let PropertiesPageRoutingModule = class PropertiesPageRoutingModule {
};
PropertiesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PropertiesPageRoutingModule);



/***/ }),

/***/ "./src/app/properties/properties.module.ts":
/*!*************************************************!*\
  !*** ./src/app/properties/properties.module.ts ***!
  \*************************************************/
/*! exports provided: PropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPageModule", function() { return PropertiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _properties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties-routing.module */ "./src/app/properties/properties-routing.module.ts");
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties.page */ "./src/app/properties/properties.page.ts");







let PropertiesPageModule = class PropertiesPageModule {
};
PropertiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _properties_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropertiesPageRoutingModule"]
        ],
        declarations: [_properties_page__WEBPACK_IMPORTED_MODULE_6__["PropertiesPage"]]
    })
], PropertiesPageModule);



/***/ }),

/***/ "./src/app/properties/properties.page.scss":
/*!*************************************************!*\
  !*** ./src/app/properties/properties.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700';\n.rwd-table {\n  margin: 1em 0;\n  min-width: 300px;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 6.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th, .rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th, .rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n  .rwd-table th:first-child, .rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child, .rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nbody {\n  padding: 0 2em;\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  color: #444;\n  background: #eee;\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  background: white;\n  color: black;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n.rwd-table tr {\n  border-color: #46637f;\n}\n.rwd-table th, .rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th, .rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th, .rwd-table td:before {\n  color: #dd5;\n}\n.header .col {\n  background-color: lightgrey;\n}\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n.col:last-child {\n  border-right: solid 1px grey;\n}\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n/* Style the tab */\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n/* Style the buttons inside the tab */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  font-size: 17px;\n}\n.border {\n  color: black;\n}\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 100px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-weight: bold;\n}\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-style: initial;\n  color: #070353;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n  border-bottom: 1px solid blue;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #ccc;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydGllcy9DOlxcVXNlcnNcXG1hZCBwb3dlci1jIExhbmdhXFxEZXNrdG9wXFx0cmVzXFxSTVNVUERBVEUvc3JjXFxhcHBcXHByb3BlcnRpZXNcXHByb3BlcnRpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUSx3RUFBQTtBQTlEUjtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ2hCRjtBRGtCRTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNoQko7QURtQkU7RUFDRSxhQUFBO0FDakJKO0FEb0JFO0VBQ0UsY0FBQTtBQ2xCSjtBRG9CSTtFQUNFLGtCQUFBO0FDbEJOO0FEb0JJO0VBQ0UscUJBQUE7QUNsQk47QURxQkk7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBR0EsWUFBQTtFQUNBLHFCQUFBO0FDckJOO0FEd0JNO0VBVEY7SUFVSSxhQUFBO0VDckJOO0FBQ0Y7QUR5QkU7RUFDRSxnQkFBQTtBQ3ZCSjtBRHlCSTtFQUhGO0lBSUksbUJBQUE7SUFDQSxxQkFBQTtFQ3RCSjtFRHdCSTtJQUNFLGVBQUE7RUN0Qk47RUR5Qkk7SUFDRSxnQkFBQTtFQ3ZCTjtBQUNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pDRjtBRG9DQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDakNGO0FEb0NBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ2pDRjtBRGtDRTtFQUNFLHFCQUFBO0FDaENKO0FEa0NFO0VBQ0UsaUJBQUE7QUNoQ0o7QURpQ0k7RUFGRjtJQUdJLHVCQUFBO0VDOUJKO0FBQ0Y7QURnQ0U7RUFDRSxXQUFBO0FDOUJKO0FEcUNBO0VBQ0UsMkJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNsQ0Y7QURxQ0E7RUFDRSw0QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLDZCQUFBO0FDbENGO0FEb0RBLGtCQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNqREo7QURvREUscUNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7QUNqREo7QURvREU7RUFNSSxZQUFBO0FDdEROO0FEMERFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7QUN2REo7QUR5REU7RUFFRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDdkRKO0FEMkRFLGdEQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FDeERKO0FEMkRFLDJDQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ3hESjtBRDJERSwwQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ3hESiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnRpZXMvcHJvcGVydGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJGJyZWFrcG9pbnQtYWxwaGE6IDQ4MHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xyXG5cclxuLnJ3ZC10YWJsZSB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBtaW4td2lkdGg6IDMwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xyXG4gIFxyXG4gIHRyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8vIGZvciBhY2Nlc3NpYmlsaXR5LCB1c2UgYSB2aXN1YWxseSBoaWRkZW4gbWV0aG9kIGhlcmUgaW5zdGVhZCEgVGhhbmtzLCByZWRkaXQhICAgXHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIFxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxyXG4gICAgICB3aWR0aDogNi41ZW07IC8vIG1hZ2ljIG51bWJlciA6KCBhZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgb3duIGNvbnRlbnRcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyBlbmQgb3B0aW9uc1xyXG4gICAgICBcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XHJcbiAgICAgIFxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4vLyBwcmVzZW50YXRpb25hbCBzdHlsaW5nXHJcblxyXG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCc7XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwIDJlbTtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIGNvbG9yOiAjMzQ0OTVFO1xyXG59XHJcblxyXG4ucndkLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyIHtcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMzQ0OTVFLCAxMCUpO1xyXG4gIH1cclxuICB0aCwgdGQge1xyXG4gICAgbWFyZ2luOiAuNWVtIDFlbTtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkgeyBcclxuICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gIH1cclxuICB0aCwgdGQ6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZGQ1O1xyXG4gIH1cclxufVxyXG5cclxuLy90YWJsZSBzdHlsZSBhYm92ZVxyXG5cclxuXHJcbi5oZWFkZXIgLmNvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcclxufVxyXG5cclxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBTdHlsZSB0aGUgdGFiICovXHJcbi50YWIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYnV0dG9ucyBpbnNpZGUgdGhlIHRhYiAqL1xyXG4gIC50YWIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyXHJcbiAge1xyXG4gICAgLy8gICBib3JkZXItYm90dG9tOiBzb2xpZCA7XHJcbiAgICAvLyAgIGJvcmRlci10b3A6IHNvbGlkIDtcclxuICAgIC8vICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDtcclxuICAgIC8vICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICBcclxuXHJcbiAgfVxyXG4gIGxpe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgYSB7XHJcbiAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBjb2xvcjpyZ2IoNywgMywgODMpO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xyXG4gIC50YWIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICAudGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcbiAgLnRhYmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgfSIsIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJztcbi5yd2QtdGFibGUge1xuICBtYXJnaW46IDFlbSAwO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5yd2QtdGFibGUgdGgge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJ3ZC10YWJsZSB0ZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRoKSBcIjogXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogNi41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucndkLXRhYmxlIHRkOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIH1cbiAgLnJ3ZC10YWJsZSB0aDpmaXJzdC1jaGlsZCwgLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5yd2QtdGFibGUgdGg6bGFzdC1jaGlsZCwgLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwIDJlbTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBjb2xvcjogIzQ0NDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgY29sb3I6ICMzNDQ5NUU7XG59XG5cbi5yd2QtdGFibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItY29sb3I6ICM0NjYzN2Y7XG59XG4ucndkLXRhYmxlIHRoLCAucndkLXRhYmxlIHRkIHtcbiAgbWFyZ2luOiAwLjVlbSAxZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCwgLnJ3ZC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29sb3I6ICNkZDU7XG59XG5cbi5oZWFkZXIgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIGluc2lkZSB0aGUgdGFiICovXG4udGFiIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5ib3JkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IGluaXRpYWw7XG4gIGNvbG9yOiAjMDcwMzUzO1xufVxuXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xufVxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuLnRhYiBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXG4udGFiY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItdG9wOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/properties/properties.page.ts":
/*!***********************************************!*\
  !*** ./src/app/properties/properties.page.ts ***!
  \***********************************************/
/*! exports provided: PropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPage", function() { return PropertiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
// import { Component, OnInit } from '@angular/core';
// import{HttpClient} from '@angular/common/http';
// /*import {NavController} from '@ionic/angular';*/
// import {Observable} from 'rxjs';
// import {ServiceService} from './../service.service';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { Platform, AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import {  ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';







let PropertiesPage = class PropertiesPage {
    //  alertController: any;
    constructor(platform, splashScreen, statusBar, alertCtrl, router, alertController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.alertController = alertController;
    }
    ionViewDidEnter() {
        this.createBarChart();
        this.createlabelChart();
        this.initializeApp();
        this.sideMenu();
    }
    createlabelChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.label.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['very_satisfied', 'satisfied', 'okay', 'disappointed', 'very_disappointed'],
                datasets: [{
                        data: [0, 100, 0, 0, 0],
                        backgroundColor: [
                            'rgb(5, 238, 64)',
                            'rgb(3, 18, 83)',
                            'rgb(198,77,255)',
                            'rgb(173,216,230)',
                            'rgb(114,188,212)'
                        ],
                    }]
            },
        });
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.barChart.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{
                        data: [71, 29],
                        backgroundColor: [
                            'rgb(5, 238, 64)',
                            'rgb(3, 18, 83)'
                        ],
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
        });
    }
    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Profile",
                    url: "/landlord-dash",
                    icon: "person-outline"
                },
                {
                    title: "Overview",
                    url: "/viewproperties",
                    icon: "eye-outline"
                },
                {
                    title: "My Proparties",
                    url: "/propertyinfo",
                    icon: "business"
                },
                {
                    title: "Accreditation",
                    url: "/landlord",
                    icon: "clipboard"
                }
            ];
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Notice Dialog',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Notice title'
                    },
                    // multiline input.
                    {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Notice Discription'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Submit',
                        handler: () => {
                            console.log('Confirm Submit');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Query Dialog',
                message: 'Send quiries to TUTEH Properties.',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Isuue description'
                    },
                    // multiline input.
                    {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Query type'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Submit',
                        handler: () => {
                            console.log('Confirm Submit');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
PropertiesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('barChart', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertiesPage.prototype, "barChart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('label', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertiesPage.prototype, "label", void 0);
PropertiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-properties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./properties.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/properties/properties.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./properties.page.scss */ "./src/app/properties/properties.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], PropertiesPage);



/***/ })

}]);
//# sourceMappingURL=properties-properties-module-es2015.js.map