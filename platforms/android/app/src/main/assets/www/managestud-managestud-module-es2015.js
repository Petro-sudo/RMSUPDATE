(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managestud-managestud-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managestud/managestud.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managestud/managestud.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-icon name=\"menu\" (click)=\"presentMenu()\"></ion-icon>\r\n    </ion-buttons> \r\n    <ion-title align=\"center\"> Manage Student\r\n      <ion-button   size=\"small\" shape=\"round\" color=\"danger\" style=\"height: 30px; \">{{addimg}}</ion-button>\r\n    </ion-title>\r\n   \r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-grid style=\"background-image: url('assets/pics/landlord.jpg');\" col=\"12\">\r\n\r\n    <ion-card   col=\"12\" *ngFor= \"let a of addProp\" style=\" background-color:rgb(3, 1, 32) ; color: white; opacity: 0.8;border-radius: 10px;\">\r\n    \r\n     \r\n \r\n \r\n     <br>\r\n     <ion-label>\r\n      STUDENT NUMBER:{{a.phone}}\r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n     ID COPY: {{a.phone}} \r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n       STUDENT SURNAME: {{a.username}}\r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n      STUDENT NAME: {{a.name}}\r\n     </ion-label>\r\n     <br>\r\n     <ion-label>\r\n      STUDENT EMAIL: {{a.email}}\r\n     </ion-label>\r\n     <br>\r\n\r\n     <ion-button  color=\"danger\" (click)=\"delete()\">\r\n      <ion-label>Decline  </ion-label>\r\n    </ion-button>\r\n    <ion-button  color=\"success\" (click)=\" accept()\">\r\n      <ion-label>Accept</ion-label>\r\n    </ion-button>\r\n    \r\n   </ion-card>\r\n\r\n   <br>\r\n   <br>\r\n   <br>\r\n   <br>\r\n </ion-grid>\r\n\r\n\r\n\r\n\r\n  \r\n</ion-content>\r\n\r\n\r\n\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/managestud/managestud-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/managestud/managestud-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagestudPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestudPageRoutingModule", function() { return ManagestudPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _managestud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managestud.page */ "./src/app/managestud/managestud.page.ts");




const routes = [
    {
        path: '',
        component: _managestud_page__WEBPACK_IMPORTED_MODULE_3__["ManagestudPage"]
    }
];
let ManagestudPageRoutingModule = class ManagestudPageRoutingModule {
};
ManagestudPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManagestudPageRoutingModule);



/***/ }),

/***/ "./src/app/managestud/managestud.module.ts":
/*!*************************************************!*\
  !*** ./src/app/managestud/managestud.module.ts ***!
  \*************************************************/
/*! exports provided: ManagestudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestudPageModule", function() { return ManagestudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _managestud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managestud-routing.module */ "./src/app/managestud/managestud-routing.module.ts");
/* harmony import */ var _managestud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managestud.page */ "./src/app/managestud/managestud.page.ts");







let ManagestudPageModule = class ManagestudPageModule {
};
ManagestudPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _managestud_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagestudPageRoutingModule"]
        ],
        declarations: [_managestud_page__WEBPACK_IMPORTED_MODULE_6__["ManagestudPage"]]
    })
], ManagestudPageModule);



/***/ }),

/***/ "./src/app/managestud/managestud.page.scss":
/*!*************************************************!*\
  !*** ./src/app/managestud/managestud.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  zoom: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlc3R1ZC9DOlxcVXNlcnNcXG1hZCBwb3dlci1jIExhbmdhXFxEZXNrdG9wXFx0cmVzXFxSTVNVUERBVEUvc3JjXFxhcHBcXG1hbmFnZXN0dWRcXG1hbmFnZXN0dWQucGFnZS5zY3NzIiwic3JjL2FwcC9tYW5hZ2VzdHVkL21hbmFnZXN0dWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlc3R1ZC9tYW5hZ2VzdHVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgem9vbTogMjtcclxufSIsImlvbi1pY29uIHtcbiAgem9vbTogMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/managestud/managestud.page.ts":
/*!***********************************************!*\
  !*** ./src/app/managestud/managestud.page.ts ***!
  \***********************************************/
/*! exports provided: ManagestudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestudPage", function() { return ManagestudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManagestudPage = class ManagestudPage {
    constructor(alertCtrl, _serviceService, router, actionSheetCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this._serviceService = _serviceService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.addProp = [];
        this.addimg = [];
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
        this.applidstu();
    }
    applidstu() {
        return this._serviceService.getAppliedstu().
            subscribe((apart) => {
            this.addProp = apart;
            console.log(this.addProp);
            console.log(this.addProp.length);
            this.addimg = this.addProp.length;
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Are you sure you want to decline this Application?  ',
                buttons: ['OK', 'cancel']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    accept() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Are you sure you want to Accept this Application?  ',
                buttons: ['OK', 'cancel']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
};
ManagestudPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ManagestudPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managestud',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managestud.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/managestud/managestud.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managestud.page.scss */ "./src/app/managestud/managestud.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], ManagestudPage);



/***/ })

}]);
//# sourceMappingURL=managestud-managestud-module-es2015.js.map