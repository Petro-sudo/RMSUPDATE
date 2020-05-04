(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editlordprof-editlordprof-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editlordprof/editlordprof.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editlordprof/editlordprof.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      \r\n        <ion-icon name=\"menu\" (click)=\"presentMenu()\"></ion-icon>\r\n     \r\n      </ion-buttons> \r\n    <ion-title align=\"center\">Landlord Edit Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div style=\"background-image: url('assets/pics/landlord.jpg');\">\r\n  <ion-item>\r\n  <h3 align =\"center\">Edit Details</h3>\r\n</ion-item>\r\n  <br>\r\n \r\n\r\n    <form action=\"\" method=\"post\" enctype=\"multipart/form-data\">\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"email\">Email:</ion-label>\r\n        <ion-input value={{edit.email}} type=\"email\" class=\"form-control\" name=\"lord_email\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"email\">Title:</ion-label>\r\n        <ion-input value={{edit.id}} type=\"email\" class=\"form-control\" name=\"lord_email\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"firstname\">Fullnames:</ion-label>\r\n        <ion-input value={{edit.name}} type=\"text\" class=\"form-control\" name=\"lord_firstname\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"lastname\">Surname:</ion-label>\r\n        <ion-input value={{edit.name}} type=\"text\" class=\"form-control\" name=\"lord_lastname\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"contact\">CellNumbers:</ion-label>\r\n        <ion-input value={{edit.phone}} type=\"text\" class=\"form-control\" name=\"lord_cellno\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"contact\">Number of Properties</ion-label>\r\n        <ion-input value={{edit.id}} type=\"text\" class=\"form-control\" name=\"lord_cellno\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"password\">Password</ion-label>\r\n        <ion-input value={{edit.phone}} id=\"myInput\" type=\"password\" class=\"form-control\" name=\"lord_password\"></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <!-- show password in ionic do the function -->\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-input type=\"checkbox\" onclick= \" \">Show Password</ion-input>\r\n      </ion-item>\r\n            </div>\r\n\r\n      <div class=\"form-group\">\r\n        <img width=\"100\" src=\"../../assets/pics/user1.jpg\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-item>\r\n        <ion-label for=\"bus-image\">User Image</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"file\" name=\"images\" ></ion-input>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <ion-button class = \"ion-text-center\" color=\"primary\" \r\n          (click)=\"update()\">Update</ion-button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n</div>\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-content>\r\n\r\n\r\n<!-- <script>\r\n\r\n\r\n\r\n\r\nfunction openCity(evt, tabName) {\r\nvar i, tabcontent, tablinks;\r\ntabcontent = document.getElementsByClassName(\"tabcontent\");\r\nfor (i = 0; i < tabcontent.length; i++) {\r\n    tabcontent[i].style.display = \"none\";\r\n}\r\ntablinks = document.getElementsByClassName(\"tablinks\");\r\nfor (i = 0; i < tablinks.length; i++) {\r\n    tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\r\n}\r\ndocument.getElementById(tabName).style.display = \"block\";\r\nevt.currentTarget.className += \" active\";\r\n}\r\n</script> -->\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/editlordprof/editlordprof-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/editlordprof/editlordprof-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditlordprofPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlordprofPageRoutingModule", function() { return EditlordprofPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editlordprof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editlordprof.page */ "./src/app/editlordprof/editlordprof.page.ts");




const routes = [
    {
        path: '',
        component: _editlordprof_page__WEBPACK_IMPORTED_MODULE_3__["EditlordprofPage"]
    }
];
let EditlordprofPageRoutingModule = class EditlordprofPageRoutingModule {
};
EditlordprofPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditlordprofPageRoutingModule);



/***/ }),

/***/ "./src/app/editlordprof/editlordprof.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/editlordprof/editlordprof.module.ts ***!
  \*****************************************************/
/*! exports provided: EditlordprofPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlordprofPageModule", function() { return EditlordprofPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _editlordprof_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editlordprof-routing.module */ "./src/app/editlordprof/editlordprof-routing.module.ts");
/* harmony import */ var _editlordprof_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editlordprof.page */ "./src/app/editlordprof/editlordprof.page.ts");







let EditlordprofPageModule = class EditlordprofPageModule {
};
EditlordprofPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editlordprof_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditlordprofPageRoutingModule"]
        ],
        declarations: [_editlordprof_page__WEBPACK_IMPORTED_MODULE_6__["EditlordprofPage"]]
    })
], EditlordprofPageModule);



/***/ }),

/***/ "./src/app/editlordprof/editlordprof.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/editlordprof/editlordprof.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: transparent;\n}\n\nion-item {\n  opacity: 0.7;\n  margin-right: 0px;\n}\n\nion-icon {\n  zoom: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGxvcmRwcm9mL0M6XFxVc2Vyc1xcbWFkIHBvd2VyLWMgTGFuZ2FcXERlc2t0b3BcXHRyZXNcXFJNU1VQREFURS9zcmNcXGFwcFxcZWRpdGxvcmRwcm9mXFxlZGl0bG9yZHByb2YucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0bG9yZHByb2YvZWRpdGxvcmRwcm9mLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDZCQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLE9BQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2VkaXRsb3JkcHJvZi9lZGl0bG9yZHByb2YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgIFxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICBcclxufVxyXG5pb24taWNvbntcclxuICAgIHpvb206IDI7XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taXRlbSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgem9vbTogMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/editlordprof/editlordprof.page.ts":
/*!***************************************************!*\
  !*** ./src/app/editlordprof/editlordprof.page.ts ***!
  \***************************************************/
/*! exports provided: EditlordprofPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlordprofPage", function() { return EditlordprofPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditlordprofPage = class EditlordprofPage {
    constructor(navCtrl, http, _serviceService, router, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this._serviceService = _serviceService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.edit = [];
    }
    presentMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Land-Lord Menu',
                buttons: [{
                        text: 'Profile',
                        role: 'destrustctive',
                        icon: 'person-circle-outline',
                        handler: () => {
                            this.router.navigateByUrl('landlord-dash');
                        }
                    }, {
                        text: 'Register Resident',
                        icon: 'add',
                        handler: () => {
                            this.router.navigateByUrl('/landloard-app');
                        }
                    }, {
                        text: 'Manage Student',
                        icon: 'people',
                        handler: () => {
                            this.router.navigateByUrl('managestud');
                        }
                    },
                    {
                        text: 'Manage Properties',
                        icon: 'business',
                        handler: () => {
                            this.router.navigateByUrl('manageprop');
                        }
                    },
                    {
                        text: 'Edit Your Profile',
                        icon: 'person-add',
                        handler: () => {
                            this.router.navigateByUrl('editlordprof');
                        }
                    },
                    {
                        text: 'Logout ',
                        icon: 'log-out',
                        handler: () => {
                            this.router.navigateByUrl('/folder/folder');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._serviceService.lordprofile().subscribe(data => {
            this.edit = data;
        });
    }
};
EditlordprofPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
EditlordprofPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editlordprof',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editlordprof.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editlordprof/editlordprof.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editlordprof.page.scss */ "./src/app/editlordprof/editlordprof.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], EditlordprofPage);



/***/ })

}]);
//# sourceMappingURL=editlordprof-editlordprof-module-es2015.js.map