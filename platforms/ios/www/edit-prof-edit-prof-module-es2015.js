(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-prof-edit-prof-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-prof/edit-prof.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-prof/edit-prof.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar color=dark>\r\n    <ion-title align=\"center\">Edit Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <a id=\"back\" routerLink=\"/stud-profile\">\r\n    <ion-icon id=\"back\" name=\"arrow-undo\"></ion-icon>\r\n  </a>\r\n  <br><br><br><br>\r\n\r\n\r\n  <form action=\"\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label id=\"ec\">Email</ion-label>\r\n      <input type=\"text\" id=\"input\">\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label id=\"ec\">Cell</ion-label>\r\n      <input type=\"text\" id=\"input\">\r\n    </ion-item>\r\n\r\n    <ion-button id=\"update\">Update</ion-button>\r\n\r\n  </form>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/edit-prof/edit-prof-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-prof/edit-prof-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditProfPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfPageRoutingModule", function() { return EditProfPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_prof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-prof.page */ "./src/app/edit-prof/edit-prof.page.ts");




const routes = [
    {
        path: '',
        component: _edit_prof_page__WEBPACK_IMPORTED_MODULE_3__["EditProfPage"]
    }
];
let EditProfPageRoutingModule = class EditProfPageRoutingModule {
};
EditProfPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-prof/edit-prof.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-prof/edit-prof.module.ts ***!
  \***********************************************/
/*! exports provided: EditProfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfPageModule", function() { return EditProfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_prof_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-prof-routing.module */ "./src/app/edit-prof/edit-prof-routing.module.ts");
/* harmony import */ var _edit_prof_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-prof.page */ "./src/app/edit-prof/edit-prof.page.ts");







let EditProfPageModule = class EditProfPageModule {
};
EditProfPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_prof_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfPageRoutingModule"]
        ],
        declarations: [_edit_prof_page__WEBPACK_IMPORTED_MODULE_6__["EditProfPage"]]
    })
], EditProfPageModule);



/***/ }),

/***/ "./src/app/edit-prof/edit-prof.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-prof/edit-prof.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#back {\n  float: right;\n  zoom: 1.5;\n  color: black;\n}\n\n#update {\n  margin-left: 40%;\n  margin-top: 30px;\n}\n\nform {\n  margin-top: 20%;\n  border-radius: 5px solid red;\n}\n\n#input {\n  border-radius: 5px;\n  height: 35px;\n  margin-right: 30%;\n  width: 30%;\n}\n\n#ec {\n  margin-left: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9mL0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxlZGl0LXByb2ZcXGVkaXQtcHJvZi5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtcHJvZi9lZGl0LXByb2YucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZi9lZGl0LXByb2YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pY29uc1xyXG4jYmFja3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHpvb206MS41O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi8vYnV0dG9uc1xyXG4jdXBkYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCBzb2xpZCByZWQgO1xyXG4gICAgXHJcbn1cclxuLy9pbnB1dCBmaWVsZFxyXG4jaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBcclxufVxyXG4vL2xhYmVsXHJcbiNlY3tcclxuICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xyXG59IiwiI2JhY2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIHpvb206IDEuNTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jdXBkYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IHNvbGlkIHJlZDtcbn1cblxuI2lucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICB3aWR0aDogMzAlO1xufVxuXG4jZWMge1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit-prof/edit-prof.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-prof/edit-prof.page.ts ***!
  \*********************************************/
/*! exports provided: EditProfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfPage", function() { return EditProfPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditProfPage = class EditProfPage {
    constructor() { }
    ngOnInit() {
    }
};
EditProfPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-prof',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-prof.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-prof/edit-prof.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-prof.page.scss */ "./src/app/edit-prof/edit-prof.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditProfPage);



/***/ })

}]);
//# sourceMappingURL=edit-prof-edit-prof-module-es2015.js.map