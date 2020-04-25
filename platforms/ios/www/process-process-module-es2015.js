(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-process-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">soshanguve </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/studapply\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-grid style=\"color: black;\" col=\"12\">\r\n\r\n    <ion-card col=\"12\" *ngFor= \"let a of addProp\" style=\"font-weight: bold;\">\r\n     <h1 style=\"color: black;\" >{{a.name}} </h1>\r\n     \r\n \r\n \r\n     <br>\r\n     <ion-label>\r\n      PROPERTY OWNER:{{a.username}}\r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n     CITY: {{a.address.city}} \r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n       STREET ADDRESS: {{a.address.street}}\r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n       POSTAL CODE: {{a.address.zipcode}}\r\n     </ion-label>\r\n     <br>\r\n\r\n\r\n     <ion-button   routerLink=\"/applynow\">\r\n      <ion-label>apply</ion-label>\r\n    </ion-button>\r\n    \r\n   </ion-card>\r\n\r\n   \r\n </ion-grid>\r\n\r\n\r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/process/process-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/process/process-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProcessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPageRoutingModule", function() { return ProcessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _process_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process.page */ "./src/app/process/process.page.ts");




const routes = [
    {
        path: '',
        component: _process_page__WEBPACK_IMPORTED_MODULE_3__["ProcessPage"]
    }
];
let ProcessPageRoutingModule = class ProcessPageRoutingModule {
};
ProcessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProcessPageRoutingModule);



/***/ }),

/***/ "./src/app/process/process.module.ts":
/*!*******************************************!*\
  !*** ./src/app/process/process.module.ts ***!
  \*******************************************/
/*! exports provided: ProcessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPageModule", function() { return ProcessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _process_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-routing.module */ "./src/app/process/process-routing.module.ts");
/* harmony import */ var _process_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process.page */ "./src/app/process/process.page.ts");







let ProcessPageModule = class ProcessPageModule {
};
ProcessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _process_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProcessPageRoutingModule"]
        ],
        declarations: [_process_page__WEBPACK_IMPORTED_MODULE_6__["ProcessPage"]]
    })
], ProcessPageModule);



/***/ }),

/***/ "./src/app/process/process.page.scss":
/*!*******************************************!*\
  !*** ./src/app/process/process.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MvcHJvY2Vzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/process/process.page.ts":
/*!*****************************************!*\
  !*** ./src/app/process/process.page.ts ***!
  \*****************************************/
/*! exports provided: ProcessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPage", function() { return ProcessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");



let ProcessPage = class ProcessPage {
    constructor(_serviceService) {
        this._serviceService = _serviceService;
        this.addProp = [];
        this.addimg = [];
    }
    ngOnInit() {
        this.getProperty();
    }
    getProperty() {
        return this._serviceService.getApartment().
            subscribe((apart) => {
            this.addProp = apart;
            console.log(this.addProp);
        });
    }
};
ProcessPage.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }
];
ProcessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/process/process.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./process.page.scss */ "./src/app/process/process.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
], ProcessPage);



/***/ })

}]);
//# sourceMappingURL=process-process-module-es2015.js.map