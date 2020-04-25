(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">{{ folder }} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content login-header ion-padding>\r\n  <div class = \"login-header ion-padding\">\r\n    <img class = \"logo-img\" src=\"assets/icon/tut.png\" alt=\"\">\r\n  </div>\r\n  <div class = \"ion-text-center\">\r\n      <div heading-column-lr>\r\n       <h1 medium-heading>TUTEH PROPERTIES</h1>\r\n      </div>\r\n\r\n      <br>\r\n    \r\n      <ion-item transparent>\r\n      <ion-label position=\"floating\"></ion-label>\r\n         <ion-input ngModel name = \"loginData.email\" #email = \"ngModel\" placeholder = \"E-MAIL\" type= \"text\" required></ion-input>\r\n         <div *ngIf = \"!email.valid && email.touched\">\r\n           <div *ngIf = \"email.errors.required\">email required</div>\r\n\r\n           <div *ngIf = \"email != loginData.password\">\r\n            <div *ngIf = \"email.errors\">email doesn't exist</div>\r\n          </div>\r\n\r\n         </div>\r\n        </ion-item>\r\n        <p>check your e-mail for reseting your password</p>\r\n     <br><br>\r\n     \r\n    <ion-button class = \"ion-text-center\" color=\"primary\" \r\n     (click)=\"forgot\">submit</ion-button>\r\n    <br>\r\n<br><br>\r\n     \r\n\r\n      \r\n  </div> \r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/forget/forget-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forget/forget-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ForgetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageRoutingModule", function() { return ForgetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");




const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPage"]
    }
];
let ForgetPageRoutingModule = class ForgetPageRoutingModule {
};
ForgetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetPageRoutingModule);



/***/ }),

/***/ "./src/app/forget/forget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/*! exports provided: ForgetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-routing.module */ "./src/app/forget/forget-routing.module.ts");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");







let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPageRoutingModule"]
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
    })
], ForgetPageModule);



/***/ }),

/***/ "./src/app/forget/forget.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:chartreuse;\n}\n\n.login-header {\n  position: relative;\n}\n\n.logo-img {\n  display: block;\n  width: 120px;\n  text-align: left;\n}\n\n.h {\n  text-align: center;\n}\n\n.ion-input {\n  border: solid;\n  text-align: center;\n  position: \"floating\";\n}\n\n[transparent] {\n  --background: transparent;\n}\n\nion-input {\n  --color:#000;\n  font-size: 15px;\n  position: floating;\n  text-align: center;\n  border: solid #0d0d0f 0.5px;\n}\n\n[icon-small] {\n  width: 35px;\n}\n\nion-item {\n  --highlight-color-focused:transparent;\n  padding: 10px;\n}\n\n[linespace] {\n  height: 20px;\n}\n\nion-label {\n  color: #000;\n  opacity: 0.8;\n  font-size: 15px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxmb3JnZXRcXGZvcmdldC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdldC9mb3JnZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUNBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QUREQTtFQUVJLHlCQUFBO0FDR0o7O0FEREE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0dMOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0kscUNBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFFSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTtcclxufVxyXG4ubG9naW4taGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLmxvZ28taW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pb24taW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IFwiZmxvYXRpbmdcIjtcclxufVxyXG5bdHJhbnNwYXJlbnRdXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWlucHV0XHJcbntcclxuICAgIC0tY29sb3I6IzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBwb3NpdGlvbjogZmxvYXRpbmc7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGJvcmRlcjogc29saWQgcmdiKDEzLCAxMywgMTUpIDAuNXB4O1xyXG4gICAgXHJcbn1cclxuW2ljb24tc21hbGxde1xyXG4gICAgd2lkdGg6MzVweDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuW2xpbmVzcGFjZV1cclxue1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmNoYXJ0cmV1c2U7XG59XG5cbi5sb2dpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5oIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogXCJmbG9hdGluZ1wiO1xufVxuXG5bdHJhbnNwYXJlbnRdIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1jb2xvcjojMDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvc2l0aW9uOiBmbG9hdGluZztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkICMwZDBkMGYgMC41cHg7XG59XG5cbltpY29uLXNtYWxsXSB7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbltsaW5lc3BhY2VdIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forget/forget.page.ts":
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgetPage = class ForgetPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forget.page.scss */ "./src/app/forget/forget.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgetPage);



/***/ })

}]);
//# sourceMappingURL=forget-forget-module-es2015.js.map