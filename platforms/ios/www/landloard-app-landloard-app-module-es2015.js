(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landloard-app-landloard-app-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landloard-app/landloard-app.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landloard-app/landloard-app.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\" color = \"success\">\r\n      <ion-icon name=\"menu\" (click)=\"presentMenu()\"></ion-icon>\r\n   </ion-buttons>\r\n    <ion-title align=\"center\">Landlord Application</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div style=\"background-image: url('assets/pics/landlord.jpg');\">\r\n    <br>\r\n    <br>\r\n  \r\n\r\n  \r\n   \r\n\r\n    \r\n<ion-item>\r\n    <ion-label  position = \"floating\">Name of your property:</ion-label>\r\n    <br>\r\n    <ion-input [(ngModel)] =\"lordApply.propName\" name = \"property\" type = \"text\"  ></ion-input>\r\n    \r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-row>\r\n    <ion-col style=\"border-radius: 1px;\">\r\n      <ion-label >Enter Full Address</ion-label>\r\n      <br>\r\n      <ion-label position = \"fixed\">Number</ion-label>\r\n      <br>\r\n      <ion-input [(ngModel)] =\"lordApply.add1\" name = \"add1\" placeholder=\"Address 1\"></ion-input>\r\n      <br>\r\n      <ion-label position = \"fixed\">Street/Block</ion-label>\r\n     <br>\r\n      <ion-input [(ngModel)] =\"lordApply.add2\" name = \"add2\" placeholder=\"Address 2\"></ion-input>\r\n      <br>\r\n      <ion-label position = \"fixed\">City</ion-label>\r\n      <br>\r\n      <ion-input [(ngModel)] =\"lordApply.city\" name = \"city\" placeholder=\"City\"></ion-input>\r\n      <br>\r\n      <ion-label position = \"fixed\">Code</ion-label>\r\n      <br>\r\n      <ion-input [(ngModel)] =\"lordApply.code\" name = \"code\" placeholder=\"Code\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label > How far is your property from selected campus in kilometers</ion-label>\r\n  <br><br>\r\n  <ion-input [(ngModel)] = \"lordApply.distance\" name=\"distance\" FormControl = \"distance\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position = \"floating\" > Annaul fee single room in R?</ion-label>\r\n  <br>\r\n  <ion-input [(ngModel)] = \"lordApply.feeSingle\" name=\"feeSingle\" FormControl = \"feeSingle\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position = \"floating\" > Annaul fee sharing room in R?</ion-label>\r\n  <br>\r\n  <ion-input [(ngModel)] = \"lordApply.feeSharing\" name=\"feeSharing\" FormControl = \"feeSharing\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position = \"floating\"  > Number of sharing rooms?</ion-label>\r\n <br>\r\n  <ion-input [(ngModel)] = \"lordApply.numSharing\" name=\"numSharing\" FormControl = \"numSharing\"></ion-input>\r\n</ion-item>\r\n\r\n\r\n<ion-item>\r\n  <ion-label position = \"floating\" > Number of single rooms?</ion-label>\r\n  <br>\r\n  <ion-input [(ngModel)] = \"lordApply.numSingle\" name=\"numSingle\" FormControl = \"numSingle\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position = \"floating\" > How many rooms in total?</ion-label>\r\n <br>\r\n  <ion-input [(ngModel)] = \"lordApply.totalBed\" name=\"totalBed\" FormControl = \"totalBed\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <h1 style=\"color: red; text-align: center;background-color: aliceblue;\">NB: please scan the \r\n    certified copies of the following documents and send them as PDF in order for your application to be processed</h1>\r\n  </ion-item>\r\n  <div style=\"border-bottom: transparent;\">\r\n\r\n  \r\n\r\n  <ion-item>\r\n    <ion-label>\r\n        Lastest copy of municipal account\r\n        <br>\r\n\r\n        \r\n    </ion-label>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Building plans approved by municipality:\r\n      <br>\r\n      \r\n    </ion-label>\r\n  </ion-item> \r\n\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Occupational certificate:\r\n      <br>\r\n     \r\n    </ion-label>\r\n  </ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n    <ion-label>\r\n      Zoning certificate:\r\n      <br>\r\n      \r\n    </ion-label>\r\n</ion-item>    \r\n \r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n      ID copy:\r\n      <br>\r\n      \r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  \r\n  \r\n<ion-item>\r\n    <ion-label>\r\n      Proof of ownership:\r\n      <br>\r\n      \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Tax clearance:\r\n    <br>\r\n    \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Company registration document:\r\n    <br>\r\n    \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Proof of public liability cover for an amount of no less than R5 Million:\r\n    <br>\r\n    \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Proof of payment of R1000.00:\r\n    <br>\r\n    \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Latest copy of municipal amount(water/electricity):\r\n    <br>\r\n    \r\n  </ion-label>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Valid B-BBEE certificate:\r\n    <br>\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n<ion-input    [(ngModel)] = \"lordApply.docs\" type=\"file\" name=\"docs\" accept=\".pdf\"  required ></ion-input>\r\n</ion-item>  \r\n\r\n\r\n\r\n    \r\n  </div>\r\n\r\n\r\n<ion-button class = \"ion-text-center\" color=\"primary\" (click) = \"registerProp()\" >SUBMIT</ion-button>\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/landloard-app/landloard-app-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/landloard-app/landloard-app-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LandloardAppPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandloardAppPageRoutingModule", function() { return LandloardAppPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landloard_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landloard-app.page */ "./src/app/landloard-app/landloard-app.page.ts");




const routes = [
    {
        path: '',
        component: _landloard_app_page__WEBPACK_IMPORTED_MODULE_3__["LandloardAppPage"]
    }
];
let LandloardAppPageRoutingModule = class LandloardAppPageRoutingModule {
};
LandloardAppPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandloardAppPageRoutingModule);



/***/ }),

/***/ "./src/app/landloard-app/landloard-app.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landloard-app/landloard-app.module.ts ***!
  \*******************************************************/
/*! exports provided: LandloardAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandloardAppPageModule", function() { return LandloardAppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landloard_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landloard-app-routing.module */ "./src/app/landloard-app/landloard-app-routing.module.ts");
/* harmony import */ var _landloard_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landloard-app.page */ "./src/app/landloard-app/landloard-app.page.ts");







let LandloardAppPageModule = class LandloardAppPageModule {
};
LandloardAppPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landloard_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandloardAppPageRoutingModule"]
        ],
        declarations: [_landloard_app_page__WEBPACK_IMPORTED_MODULE_6__["LandloardAppPage"]]
    })
], LandloardAppPageModule);



/***/ }),

/***/ "./src/app/landloard-app/landloard-app.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/landloard-app/landloard-app.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border: thick black;\n}\n\nul {\n  list-style: none;\n}\n\nul li {\n  display: inline-block;\n}\n\nform {\n  opacity: 0.9;\n  color: black;\n}\n\nion-input {\n  border: solid 1px black;\n}\n\nion-item {\n  border-style: unset !important;\n}\n\nion-icon {\n  zoom: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGxvYXJkLWFwcC9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcbGFuZGxvYXJkLWFwcFxcbGFuZGxvYXJkLWFwcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmRsb2FyZC1hcHAvbGFuZGxvYXJkLWFwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQ0FKOztBRElBO0VBRUksZ0JBQUE7QUNGSjs7QURJQztFQUVFLHFCQUFBO0FDRkg7O0FESUM7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0RIOztBREdDO0VBQ0UsdUJBQUE7QUNBSDs7QURFQztFQUNDLDhCQUFBO0FDQ0Y7O0FEQ0M7RUFDQyxPQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9sYW5kbG9hcmQtYXBwL2xhbmRsb2FyZC1hcHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJvcmRlcjogdGhpY2sgYmxhY2sgO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG51bFxyXG57XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiB1bCBsaSBcclxuIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gfVxyXG4gZm9ybXtcclxuICAgb3BhY2l0eTogMC45O1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBpb24taW5wdXR7XHJcbiAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gfVxyXG4gaW9uLWl0ZW17XHJcbiAgYm9yZGVyLXN0eWxlOiB1bnNldCAhaW1wb3J0YW50XHJcbiB9XHJcbiBpb24taWNvbntcclxuICB6b29tOiAyO1xyXG59XHJcbiAiLCJpb24tY29udGVudCB7XG4gIGJvcmRlcjogdGhpY2sgYmxhY2s7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZvcm0ge1xuICBvcGFjaXR5OiAwLjk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gIHpvb206IDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/landloard-app/landloard-app.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/landloard-app/landloard-app.page.ts ***!
  \*****************************************************/
/*! exports provided: LandloardAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandloardAppPage", function() { return LandloardAppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");





let LandloardAppPage = class LandloardAppPage {
    constructor(alertCtrl, router, _serviceService, actionSheetCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this._serviceService = _serviceService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loading = false;
        this.lordApply = { propName: " ", add1: " ", add2: " ",
            city: " ", code: " ", distance: " ", feesSingle: " ", feeSharing: " ",
            numSingle: " ", numSharing: " ", totalBed: " ", docs: " " };
        this.addlord = [];
    }
    // propName: FormControl;
    // add1: FormControl;
    // add2: FormControl;
    // city: FormControl;
    // code=new FormControl;
    //  distance= new FormControl;
    //  feeSingle= new FormControl;
    //  feeSharing=new FormControl;
    //  numSingle= new FormControl;
    //  numSharing= new FormControl;
    //  totalBed= new FormControl;
    // docs= new FormControl;
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
    }
    registerProp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.lordApply.propName.length == 1 || this.lordApply.add1.length == 1 || this.lordApply.add2.length == 1 ||
                this.lordApply.city.length == 1 || this.lordApply.code.length == 1 || this.lordApply.distance.length == 1 ||
                this.lordApply.feeSharing.length == 1) {
                const alert = yield this.alertCtrl.create({
                    message: 'please fill in all the fields',
                    buttons: ['Ok']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
            else if (this.lordApply.docs.length < 2) {
                const alert = yield this.alertCtrl.create({
                    message: ' You did not upload your documents ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
            else {
                this._serviceService.postLandlord(this.lordApply).subscribe(data => console.log(data));
                console.log(this.lordApply.docs.length);
                console.log(this.lordApply.add1);
                console.log(this.lordApply.add2);
                console.log(this.lordApply.city);
                console.log(this.lordApply.code);
                console.log(this.lordApply.distance);
                console.log(this.lordApply.feeSharing);
                console.log(this.lordApply.feesSingle);
                console.log(this.lordApply.numSharing);
                console.log(this.lordApply.numSingle);
                console.log(this.lordApply.propName);
                console.log(this.lordApply.totalBed);
                const alert = yield this.alertCtrl.create({
                    message: ' Your Application was successfully Sent, you will receive feetback in 2 days ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
                this.lordApply.add1 = " ";
                this.lordApply.add2 = " ";
                this.lordApply.propName = " ";
                this.lordApply.city = " ";
                this.lordApply.code = " ";
                this.lordApply.numSharing = " ";
                this.lordApply.numSingle = " ";
                this.lordApply.feeSharing = " ";
                this.lordApply.feesSingle = " ";
                this.lordApply.distance = " ";
                this.lordApply.totalBed = " ";
                this.lordApply.docs = " ";
            }
        });
    }
};
LandloardAppPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LandloardAppPage.prototype, "lordApply", void 0);
LandloardAppPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landloard-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landloard-app.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landloard-app/landloard-app.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landloard-app.page.scss */ "./src/app/landloard-app/landloard-app.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LandloardAppPage);



/***/ })

}]);
//# sourceMappingURL=landloard-app-landloard-app-module-es2015.js.map