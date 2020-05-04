(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login1-login1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n\r\n  <ion-toolbar>\r\n    <div slot=\"start\" style=\"font-size: small; \">\r\n      <img src=\"assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\">\r\n     </div>\r\n     <div >\r\n    <ul class=\"sidebar-nav\" style=\"font-size: small; float: right;\">\r\n      <li><a routerLink=\"/help/helpstud\">HELP</a></li>\r\n      <li><a routerLink=\"#\">FAQS</a></li>\r\n      <li><a routerLink=\"/folder/home\">HOME</a></li>\r\n    </ul>\r\n  </div>\r\n  </ion-toolbar>\r\n\r\n  <br><br> <br> <br>\r\n\r\n  <p style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;color: white;text-align: left;\">   Sign in to access your account</p>\r\n  <ion-card style=\"background-color: white; color:black; border: solid rgb(8, 243, 106) 2px;\">\r\n    \r\n     \r\n     <p><ion-icon name=\"warning\" style=\"color: yellow;text-align: left; width: 30; height: 30;\"></ion-icon> Please take note only TUT in off campus resident can register</p>\r\n    \r\n    </ion-card>\r\n\r\n  <form>\r\n\r\n    \r\n\r\n    <br>\r\n\r\n<ion-item transparent>\r\n  <ion-label position = \"floating\"><ion-icon name=\"person\"></ion-icon> STUDENT NUMBER</ion-label>\r\n<ion-input ></ion-input>    \r\n</ion-item>\r\n<!-- [(ngModel)] = \"loginUserData.email\" type=\"email\" id = \"email\" name =\"email\" class=\"form-control\"\r\n#email = \"ngModel\" autofocus required email ngModel\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n  Please enter a valid email.\r\n</div> -->\r\n\r\n<ion-item transparent> \r\n<ion-label position = \"floating\"><ion-icon name=\"lock-closed\"></ion-icon> PASSWORD</ion-label>\r\n<ion-input  ></ion-input> \r\n</ion-item>\r\n<!--[(ngModel)]=\"loginUserData.password\" type=\"password\" name=\"password\" id=\"password\" class=\"form-control\"\r\nplaceholder=\"\" #Password=\"ngModel\" required minlength=\"8\" maxlength=\"20\" ngModel\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" style=\"color:red\">\r\n  Please enter a valid password between 8 to 20 chars.\r\n</div> -->\r\n<br>\r\n<div class=\"hover\">\r\n<a routerLink = \"/resproof\">\r\n<ion-button class = \"ion-text-center\" expand=\"block\" color=\"success\" \r\n(click)=\"loginStud()\">Sign In</ion-button></a>\r\n</div>\r\n<br>\r\n\r\n<ion-toolbar>\r\n  <div slot=\"end\"  >\r\n    <a routerLink=\"/sturegister\" style=\"color: rgb(8, 243, 106);\">\r\n    <p style=\"color: rgb(8, 243, 106);border-bottom: solid 2px;\">No account? sign up here</p>\r\n    </a>\r\n  </div>\r\n\r\n  <div slot=\"start\" >\r\n    <!-- <a routerLink=\"/popemail\" ><p style=\"color: rgb(8, 243, 106);border-bottom: solid 2px;\">Forget your password</p></a>\r\n   -->\r\n   <p><ion-button style=\"color: rgb(8, 243, 106);border-bottom: solid 2px;text-transform: none;\" size=\"small\"\r\n    color= \"transparent\" (click)= \"popOver($event)\" >Forgot your password</ion-button></p>\r\n  \r\n  </div>\r\n  </ion-toolbar>\r\n\r\n\r\n\r\n\r\n\r\n</form>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login1/login1-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login1/login1-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Login1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1PageRoutingModule", function() { return Login1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login1.page */ "./src/app/login1/login1.page.ts");




const routes = [
    {
        path: '',
        component: _login1_page__WEBPACK_IMPORTED_MODULE_3__["Login1Page"]
    }
];
let Login1PageRoutingModule = class Login1PageRoutingModule {
};
Login1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Login1PageRoutingModule);



/***/ }),

/***/ "./src/app/login1/login1.module.ts":
/*!*****************************************!*\
  !*** ./src/app/login1/login1.module.ts ***!
  \*****************************************/
/*! exports provided: Login1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1PageModule", function() { return Login1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login1-routing.module */ "./src/app/login1/login1-routing.module.ts");
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login1.page */ "./src/app/login1/login1.page.ts");







let Login1PageModule = class Login1PageModule {
};
Login1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Login1PageRoutingModule"]
        ],
        declarations: [_login1_page__WEBPACK_IMPORTED_MODULE_6__["Login1Page"]]
    })
], Login1PageModule);



/***/ }),

/***/ "./src/app/login1/login1.page.scss":
/*!*****************************************!*\
  !*** ./src/app/login1/login1.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:rgb(3, 1, 32);\n  text-align: center;\n}\n\nion-item {\n  color: white;\n  text-align: left;\n  color: #08f36a;\n  border-bottom: solid 2px;\n}\n\nion-input {\n  color: white;\n}\n\nion-button {\n  color: black;\n}\n\nion-icon {\n  color: white;\n}\n\nh1 {\n  background-color: #08f36a;\n  color: #030120;\n  margin-right: 340px;\n  margin-left: 340px;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 95px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n}\n\nimg {\n  text-align: left;\n  font-size: small;\n}\n\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  color: white;\n  padding: 8px 8px;\n  font-style: initial;\n  text-align: center;\n}\n\n.hover a:hover {\n  background-color: transparent;\n}\n\na:hover {\n  background-color: #f4f1f8;\n  color: black;\n}\n\nul {\n  text-align: center;\n}\n\nion-input {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4xL0M6XFxVc2Vyc1xcbWFkIHBvd2VyLWMgTGFuZ2FcXERlc2t0b3BcXHRyZXNcXFJNU1VQREFURS9zcmNcXGFwcFxcbG9naW4xXFxsb2dpbjEucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbjEvbG9naW4xLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0RKOztBREdBO0VBRUksWUFBQTtBQ0RKOztBREdBO0VBRUEsWUFBQTtBQ0RBOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFRTtFQUVFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0k7RUFDRSw2QkFBQTtBQ0FOOztBREdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBRUksWUFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbG9naW4xL2xvZ2luMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcclxufVxyXG5pb24taW5wdXRcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcblxyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGNvbG9yOnJnYigzLCAxLCAzMikgO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxufVxyXG5saXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBpbWd7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsOyBcclxuICAgfVxyXG4gIGEge1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob3ZlcntcclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0MSwgMjQ4KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgdWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgaW9uLWlucHV0XHJcbiAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzA4ZjM2YTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGYzNmE7XG4gIGNvbG9yOiAjMDMwMTIwO1xuICBtYXJnaW4tcmlnaHQ6IDM0MHB4O1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG5pbWcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG92ZXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjFmODtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG51bCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login1/login1.page.ts":
/*!***************************************!*\
  !*** ./src/app/login1/login1.page.ts ***!
  \***************************************/
/*! exports provided: Login1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Page", function() { return Login1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _popover_popstd_popstd_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover/popstd/popstd.page */ "./src/app/popover/popstd/popstd.page.ts");





let Login1Page = class Login1Page {
    // credentials = { 
    //   email: 'petro,malele@gmail.com',
    //   pwd: '123'
    // };
    constructor(alertCtrl, router, popoverController) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.value = 0;
    }
    ngOnInit() {
    }
    // login(){
    //   this.auth.login(this.credentials).subscribe(async res =>{
    //     if(res){
    //       this.router.navigateByUrl('/stud-profile');
    //     }
    //     else{
    //       const alert =await this.alertCtrl.create({
    //         header: 'Login failed',
    //         message: 'Wrong credentials.',
    //         buttons:['OK']
    //       });
    //       await alert.present();
    //     }
    //   });
    // }pop
    popOver(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pop = yield this.popoverController.create({
                component: _popover_popstd_popstd_page__WEBPACK_IMPORTED_MODULE_4__["PopstdPage"],
                componentProps: {
                    custom_id: this.value
                },
            });
            pop.present();
        });
    }
};
Login1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
Login1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login1.page.scss */ "./src/app/login1/login1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], Login1Page);



/***/ })

}]);
//# sourceMappingURL=login1-login1-module-es2015.js.map