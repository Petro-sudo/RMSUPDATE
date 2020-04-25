(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studstatus-studstatus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">\r\n       <h1>\r\n        RESIDENCE ADMISSION STATUS\r\n     </h1 >\r\n    </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/stud-profile\">previous</ion-icon>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"background-image: url('assets/pics/student.jpg');\">\r\n\r\n\r\n\r\n \r\n \r\n  \r\n  <ion-card  style=\"background-color: lightgray; text-align:center; opacity: 0.8;color: black;\" >\r\n    <p>Student Number:{{result.id}}</p>\r\n    <p>Surname Name:{{result.id}}</p>\r\n  \r\n  </ion-card>\r\n\r\n<br>\r\n\r\n\r\n<br>\r\n  <ion-card  style=\"background-color: lightgray; text-align:center; opacity: 0.8;\" >\r\n    \r\n    <form  >\r\n      <ion-item >\r\n       <ion-label >\r\n        STATUS:{{result.id}}\r\n       </ion-label>\r\n      </ion-item>\r\n     <br>\r\n      \r\n     \r\n     \r\n     <ion-item><ion-label >\r\n      YEAR:{{result.id}}\r\n     </ion-label></ion-item>\r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n      RESIDENT PERIOD:{{result.id}}\r\n     </ion-label></ion-item>\r\n      <br>\r\n     \r\n     \r\n     <ion-item><ion-label >\r\n      RESIDENT ADDRESS:{{result.id}}\r\n     </ion-label></ion-item>\r\n     <br>\r\n     <ion-item><ion-label >\r\n       ROOM NUMBER:{{result.id}}\r\n     </ion-label></ion-item>\r\n     \r\n      \r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n       ROOM TYPE:{{result.id}}\r\n     </ion-label>\r\n     </ion-item>\r\n     \r\n     \r\n    \r\n     \r\n     \r\n     \r\n     </form>\r\n  </ion-card>\r\n\r\n<br><br>\r\n\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/studstatus/studstatus-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/studstatus/studstatus-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StudstatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPageRoutingModule", function() { return StudstatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _studstatus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studstatus.page */ "./src/app/studstatus/studstatus.page.ts");




const routes = [
    {
        path: '',
        component: _studstatus_page__WEBPACK_IMPORTED_MODULE_3__["StudstatusPage"]
    }
];
let StudstatusPageRoutingModule = class StudstatusPageRoutingModule {
};
StudstatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudstatusPageRoutingModule);



/***/ }),

/***/ "./src/app/studstatus/studstatus.module.ts":
/*!*************************************************!*\
  !*** ./src/app/studstatus/studstatus.module.ts ***!
  \*************************************************/
/*! exports provided: StudstatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPageModule", function() { return StudstatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _studstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studstatus-routing.module */ "./src/app/studstatus/studstatus-routing.module.ts");
/* harmony import */ var _studstatus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studstatus.page */ "./src/app/studstatus/studstatus.page.ts");







let StudstatusPageModule = class StudstatusPageModule {
};
StudstatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _studstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudstatusPageRoutingModule"]
        ],
        declarations: [_studstatus_page__WEBPACK_IMPORTED_MODULE_6__["StudstatusPage"]]
    })
], StudstatusPageModule);



/***/ }),

/***/ "./src/app/studstatus/studstatus.page.scss":
/*!*************************************************!*\
  !*** ./src/app/studstatus/studstatus.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:transparent;\n}\n\n.cards {\n  margin-right: 200px;\n  margin-left: 0px;\n  color: black;\n  background-color: lightgray;\n}\n\n.ion-text-center {\n  text-align: right;\n}\n\n.ion-label {\n  color: black;\n  background-color: grey;\n  margin-right: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHN0YXR1cy9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcc3R1ZHN0YXR1c1xcc3R1ZHN0YXR1cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0dWRzdGF0dXMvc3R1ZHN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQ0FBQTtBQ0FKOztBREVBO0VBR0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0RKOztBREtBO0VBRUksaUJBQUE7QUNISjs7QURLQTtFQUVJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zdHVkc3RhdHVzL3N0dWRzdGF0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uY2FyZHNcclxue1xyXG4gICAvLyBtYXJnaW4tbGVmdDowcHggO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcblxyXG4gICBcclxufVxyXG4uaW9uLXRleHQtY2VudGVyXHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5pb24tbGFiZWxcclxue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwO1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuLmNhcmRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWFyZ2luLXJpZ2h0OiAxMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/studstatus/studstatus.page.ts":
/*!***********************************************!*\
  !*** ./src/app/studstatus/studstatus.page.ts ***!
  \***********************************************/
/*! exports provided: StudstatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPage", function() { return StudstatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");





let StudstatusPage = class StudstatusPage {
    constructor(navCtrl, http, _serviceService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this._serviceService = _serviceService;
        this.result = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._serviceService.status().subscribe(data => {
            this.result = data;
        });
    }
};
StudstatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }
];
StudstatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-studstatus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studstatus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studstatus.page.scss */ "./src/app/studstatus/studstatus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
], StudstatusPage);



/***/ })

}]);
//# sourceMappingURL=studstatus-studstatus-module-es2015.js.map