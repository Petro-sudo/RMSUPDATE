(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resproof-resproof-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resproof/resproof.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resproof/resproof.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white; font-size: xx-large;\" align=\"center\"> Residence Report</ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/stud-profile\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-card style=\"background-image: url('assets/pics/student.jpg'); padding-top: -200px;\">\r\n  <div class=\"card\">\r\n    <br>\r\n<br>\r\n<br>\r\n<br>\r\n  <ion-card text-center padding color=\"grey\">\r\n    \r\n    <form  align=\"center\" >\r\n      <ion-item >\r\n       <ion-label >\r\n         Fullname:Herman seleka\r\n       </ion-label>\r\n      </ion-item>\r\n     <br>\r\n      \r\n     \r\n     \r\n     <ion-item><ion-label >\r\n       Identity Number:7854541258789\r\n     </ion-label></ion-item>\r\n     \r\n     <br>\r\n     \r\n     \r\n     \r\n     <ion-item><ion-label >\r\n       Residence Name:ZUlu House\r\n     </ion-label></ion-item>\r\n     <br>\r\n     <ion-item><ion-label >\r\n       Room Number:12\r\n     </ion-label></ion-item>\r\n     \r\n      \r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n       Accupation Date:05/04/2020\r\n     </ion-label>\r\n     </ion-item>\r\n     \r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n       Residential Address:shoshanguve block VV 1 semenya street\r\n     </ion-label></ion-item>\r\n     \r\n     \r\n     \r\n     </form>\r\n  </ion-card>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n   \r\n</ion-card>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/resproof/resproof-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/resproof/resproof-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResproofPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResproofPageRoutingModule", function() { return ResproofPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resproof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resproof.page */ "./src/app/resproof/resproof.page.ts");




const routes = [
    {
        path: '',
        component: _resproof_page__WEBPACK_IMPORTED_MODULE_3__["ResproofPage"]
    }
];
let ResproofPageRoutingModule = class ResproofPageRoutingModule {
};
ResproofPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResproofPageRoutingModule);



/***/ }),

/***/ "./src/app/resproof/resproof.module.ts":
/*!*********************************************!*\
  !*** ./src/app/resproof/resproof.module.ts ***!
  \*********************************************/
/*! exports provided: ResproofPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResproofPageModule", function() { return ResproofPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _resproof_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resproof-routing.module */ "./src/app/resproof/resproof-routing.module.ts");
/* harmony import */ var _resproof_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resproof.page */ "./src/app/resproof/resproof.page.ts");







let ResproofPageModule = class ResproofPageModule {
};
ResproofPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resproof_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResproofPageRoutingModule"]
        ],
        declarations: [_resproof_page__WEBPACK_IMPORTED_MODULE_6__["ResproofPage"]]
    })
], ResproofPageModule);



/***/ }),

/***/ "./src/app/resproof/resproof.page.scss":
/*!*********************************************!*\
  !*** ./src/app/resproof/resproof.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin-right: 100px;\n}\n\n.ion-text-center {\n  text-align: right;\n}\n\n.ion-label {\n  color: black;\n  font-style: oblique;\n  font-size: 25px;\n}\n\n.ion-item {\n  opacity: 0.5;\n  -webkit-transition: ease-in all;\n  transition: ease-in all;\n  background-color: grey;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzcHJvb2YvQzpcXFVzZXJzXFxQZXRyb25lbGxhXFxEZXNrdG9wXFxSTVNVUERBVEUvc3JjXFxhcHBcXHJlc3Byb29mXFxyZXNwcm9vZi5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc3Byb29mL3Jlc3Byb29mLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdJLG1CQUFBO0FDRko7O0FESUE7RUFFSSxpQkFBQTtBQ0ZKOztBRElBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZBOztBRElBO0VBRUksWUFBQTtFQUNELCtCQUFBO0VBQUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSCIsImZpbGUiOiJzcmMvYXBwL3Jlc3Byb29mL3Jlc3Byb29mLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZFxyXG57XHJcbiAgIC8vIG1hcmdpbi1sZWZ0OjBweCA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcbi5pb24tdGV4dC1jZW50ZXJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmlvbi1sYWJlbFxyXG57XHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1zdHlsZTpvYmxpcXVlO1xyXG5mb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmlvbi1pdGVtXHJcbntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgdHJhbnNpdGlvbjogZWFzZS1pbiBhbGw7IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgIGNvbG9yOmJsYWNrO1xyXG4gICBcclxufSIsIi5jYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pb24taXRlbSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiBhbGw7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/resproof/resproof.page.ts":
/*!*******************************************!*\
  !*** ./src/app/resproof/resproof.page.ts ***!
  \*******************************************/
/*! exports provided: ResproofPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResproofPage", function() { return ResproofPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");





let ResproofPage = class ResproofPage {
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
        this._serviceService.proof().subscribe(data => {
            this.result = data;
        });
    }
};
ResproofPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }
];
ResproofPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resproof',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resproof.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resproof/resproof.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resproof.page.scss */ "./src/app/resproof/resproof.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
], ResproofPage);



/***/ })

}]);
//# sourceMappingURL=resproof-resproof-module-es2015.js.map