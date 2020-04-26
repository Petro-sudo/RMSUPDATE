(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stud-profile-stud-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar    color=\"dark\"  >\r\n \r\n    \r\n\r\n    <ion-title  align=\"center\" > \r\n     <h1>\r\n      Student Profile\r\n     </h1> \r\n     \r\n    </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"log-out-outline\" routerLink=\"/folder/Home\">previous</ion-icon>\r\n   \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- <ion-grid>\r\n  <ion-row>\r\n    <ion-col> -->\r\n      \r\n<ion-content style=\"background-image: url('assets/pics/student.jpg'); ; padding-top: -200px;\" >\r\n \r\n\r\n\r\n \r\n  \r\n \r\n  \r\n\r\n    <ion-grid style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n     \r\n      \r\n    <ion-row>\r\n       <ion-col col=6> \r\n<form style=\" border-right: 10px solid black;\">\r\n\r\n  <ion-icon style=\"margin-left: 30px; zoom: 7;\"  name=\"person\"></ion-icon>\r\n\r\n<ion-item> <h1 style=\"margin-left: 50px; font-weight: bold; color: black\">PERSONAL INFORMATION</h1></ion-item> \r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"fixed\">Name </ion-label><br/>\r\n\r\n      <ion-label  class=\"ion-padding\" id=\"names\"></ion-label>  \r\n    </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"fixed\">Surname </ion-label><br/>\r\n      <ion-label  class=\"ion-padding\" id=\"names\"> </ion-label>   </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">ID </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\">  </ion-label>  </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">Campus </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\"> </ion-label>    </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"fixed\">Cell </ion-label><br/>\r\n          <ion-label  class=\"ion-padding\" id=\"names\">  </ion-label>   </ion-item>\r\n\r\n      \r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">Email </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\">   </ion-label>  </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"fixed\">Residence </ion-label><br/>\r\n          <ion-label   class=\"ion-padding\" id=\"res\"></ion-label>        \r\n        </ion-item>\r\n        <br><br><br>\r\n\r\n       <br>\r\n       <br>\r\n       <br>\r\n\r\n   \r\n      </form>\r\n</ion-col>\r\n\r\n\r\n\r\n<ion-col  col=6> \r\n <br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<a routerLink=\"/studapply\">\r\n  <ion-card align=\"center\" style=\"border-radius: 20px;  height: 150px;\">\r\n   <ion-icon style=\"zoom: 3;\" name=\"book\"></ion-icon>\r\n   <h2>Apply for Accomodation</h2>\r\n </ion-card>\r\n</a>\r\n\r\n  <a routerLink=\"/resproof\"><ion-card align=\"center\"\r\n     style=\"border-radius: 20px; height: 150px;\">\r\n    <ion-icon style=\"zoom: 3;\" name=\"home\"></ion-icon>\r\n    <h2>Residence Report</h2>\r\n  </ion-card>\r\n </a>\r\n\r\n\r\n\r\n\r\n\r\n<a routerLink=\"/studstatus\">\r\n\r\n  <ion-card align=\"center\" style=\"border-radius: 20px;  height: 150px; \">\r\n  <ion-icon style=\"zoom: 3;\" name=\"eye\"></ion-icon>\r\n  <h2>Residence Status</h2>\r\n</ion-card></a>\r\n\r\n\r\n</ion-col>\r\n</ion-row>\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-grid> \r\n</ion-content>");

/***/ }),

/***/ "./src/app/stud-profile/stud-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/stud-profile/stud-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StudProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudProfilePageRoutingModule", function() { return StudProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stud_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stud-profile.page */ "./src/app/stud-profile/stud-profile.page.ts");




const routes = [
    {
        path: '',
        component: _stud_profile_page__WEBPACK_IMPORTED_MODULE_3__["StudProfilePage"]
    }
];
let StudProfilePageRoutingModule = class StudProfilePageRoutingModule {
};
StudProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/stud-profile/stud-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/stud-profile/stud-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: StudProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudProfilePageModule", function() { return StudProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _stud_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stud-profile-routing.module */ "./src/app/stud-profile/stud-profile-routing.module.ts");
/* harmony import */ var _stud_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stud-profile.page */ "./src/app/stud-profile/stud-profile.page.ts");







let StudProfilePageModule = class StudProfilePageModule {
};
StudProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stud_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudProfilePageRoutingModule"]
        ],
        declarations: [_stud_profile_page__WEBPACK_IMPORTED_MODULE_6__["StudProfilePage"]]
    })
], StudProfilePageModule);



/***/ }),

/***/ "./src/app/stud-profile/stud-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/stud-profile/stud-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-top: 50px;\n  margin-left: 200px;\n  height: 100px;\n  width: 30%;\n  background-color: #6afc8a;\n}\n\n#back {\n  float: right;\n  zoom: 2;\n}\n\n#add {\n  zoom: 4;\n  margin-top: 20px;\n  margin-left: 40%;\n}\n\n#upload {\n  zoom: 2;\n  margin-left: 50%;\n}\n\nion-label {\n  margin-top: 10px;\n}\n\n#names {\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: 20px;\n}\n\n#res {\n  height: 100px;\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: auto;\n  text-align: right;\n}\n\nion-item {\n  margin-top: 15px;\n  margin-left: 5px;\n  width: auto;\n  opacity: 0.8;\n}\n\n#back {\n  color: black;\n  zoom: 2;\n}\n\n#edit {\n  float: right;\n}\n\n#doc {\n  margin-left: 20%;\n}\n\nstrong {\n  font-weight: medium;\n}\n\nion-card:hover {\n  background-color: #6afc8a;\n  width: 180px;\n  height: 180px;\n  opacity: 1;\n}\n\nion-card {\n  color: black;\n  opacity: 0.8;\n  -webkit-transition: width 0.5s, height 0.5s;\n  transition: width 0.5s, height 0.5s;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZC1wcm9maWxlL0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxzdHVkLXByb2ZpbGVcXHN0dWQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0dWQtcHJvZmlsZS9zdHVkLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0FDRUo7O0FEQUE7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBRUksT0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURFQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURLQTtFQUdJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDSko7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQUEsbUNBQUE7QUNOSjs7QURTQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvc3R1ZC1wcm9maWxlL3N0dWQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCAyNTIsIDEzOCk7fVxyXG4vL2ljb25zXHJcbiNiYWNre1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgem9vbToyO1xyXG59XHJcbiNhZGR7XHJcbiAgICB6b29tOjQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG4jdXBsb2Fke1xyXG4gICAgXHJcbiAgICB6b29tOjI7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbiNuYW1lc3tcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4vL2lvbiBpcHV0XHJcbiNyZXN7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgXHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgIFxyXG59XHJcbi8vbGlua3NcclxuI2JhY2t7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB6b29tOjI7XHJcbn1cclxuXHJcbi8vZWRpdCBidXR0b25cclxuI2VkaXR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG4vL2lvbi1pdGVtXHJcbiNkb2N7XHJcbiAgICBtYXJnaW4tbGVmdDoyMCUgO1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgICBmb250LXdlaWdodDptZWRpdW07XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWNhcmQ6aG92ZXJcclxue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEwNiwgMjUyLCAxMzgpO1xyXG4gICAgd2lkdGg6MTgwcHg7XHJcbiAgICBoZWlnaHQ6MTgwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCBoZWlnaHQgMC41cztcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59IiwiaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWZjOGE7XG59XG5cbiNiYWNrIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAyO1xufVxuXG4jYWRkIHtcbiAgem9vbTogNDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxuI3VwbG9hZCB7XG4gIHpvb206IDI7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNuYW1lcyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuI3JlcyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuI2JhY2sge1xuICBjb2xvcjogYmxhY2s7XG4gIHpvb206IDI7XG59XG5cbiNlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZG9jIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbn1cblxuaW9uLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFmYzhhO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1jYXJkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/stud-profile/stud-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/stud-profile/stud-profile.page.ts ***!
  \***************************************************/
/*! exports provided: StudProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudProfilePage", function() { return StudProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StudProfilePage = class StudProfilePage {
    constructor(/*public navCtrl: NavController,*/ http) {
        this.http = http;
        this.result = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        var url = 'http://168.172.185.106:5000/getstud/40';
        this.data = this.http.get(url);
        //this.data.subscribe(data =>{
        //this.result=data;
        console.log("clicked");
        //});
    }
};
StudProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stud-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stud-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stud-profile.page.scss */ "./src/app/stud-profile/stud-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StudProfilePage);



/***/ })

}]);
//# sourceMappingURL=stud-profile-stud-profile-module-es2015.js.map