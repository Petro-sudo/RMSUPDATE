(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landlord-reg-landlord-reg-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-reg/landlord-reg.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-reg/landlord-reg.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<!--\r\n<ion-header>\r\n  <ion-toolbar color = \"dark\">\r\n    <ion-title >Residential Management</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n-->\r\n\r\n  <!-- <div style=\"text-align:center;font-size: small; \">\r\n    <img src=\"assets/pics/logo.png\" width=\"100px\" height=\"50px\" alt=\"\">\r\n   </div> -->\r\n  <ion-content >\r\n\r\n    <ion-toolbar>\r\n      <div slot=\"start\" style=\"text-align:left;font-size: small; \">\r\n        <img src=\"assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\">\r\n       </div>\r\n      <ul class=\"sidebar-nav\" style=\"font-size: small\">\r\n        <li><a routerLink=\"/help/helplord\">HELP</a></li>\r\n        <li><a routerLink=\"#\">FAQS</a></li>\r\n        <li><a routerLink=\"/folder/home\">HOME</a></li>\r\n      </ul>\r\n    </ion-toolbar>\r\n    <br><br> <br> <br>\r\n  \r\n    <p style=\"color: white;\">Register to create an account</p>\r\n        \r\n  <br>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\r\n  <ion-list>\r\n  \r\n    <!-- <ion-item>\r\n    \r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input [(ngModel)] = \"lordData.fname\" name=\"fname\" type= \"text\" required ></ion-input>\r\n    </ion-item> -->\r\n    \r\n    <!-- <ion-item>\r\n      <ion-label position=\"floating\">Surname</ion-label>\r\n      <ion-input [(ngModel)] =\"lordData.lname\" name=\"lname\"  type= \"text\" required ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Gender</ion-label>\r\n      <ion-input [(ngModel)] =\"lordData.gender\" name=\"gender\"  type= \"text\" required ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Identity number </ion-label>\r\n      <ion-input [(ngModel)]= \"lordData.id_no\" name=\"id_no\" type= \"text\" required ></ion-input>\r\n    </ion-item> -->\r\n\r\n    <ion-item>\r\n      <ion-label position = \"floating\"><ion-icon name=\"mail\"></ion-icon> EMAIL</ion-label>\r\n      <ion-input [(ngModel)] = \"lordData.email\" name =\"email\"type= \"email\" \r\n      pattern =\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"land.lord@gmail.com\" required ></ion-input>\r\n    </ion-item>\r\n\r\n    \r\n    \r\n  \r\n \r\n\r\n    \r\n\r\n   \r\n\r\n    <ion-item>\r\n      <ion-label position= \"floating\"><ion-icon name=\"lock-closed\"></ion-icon> PASSWORD</ion-label>\r\n      <ion-input [(ngModel)] ='lordData.pwd' name =\"pwd\"type=\"password\" required></ion-input>\r\n    </ion-item>\r\n\r\n     <ion-item>\r\n      <ion-label position= \"floating\"><ion-icon name=\"lock-closed\"></ion-icon> CONFIRM PASSWORD</ion-label>\r\n      <ion-input  type=\"password\" [(ngModel)]='lordData.confirmPwd' name =\"confirmPwd\"  required></ion-input>  \r\n    </ion-item>\r\n    <br>\r\n    <p style=\"color: white;\">By signing up, you confirm that you've read\r\n       and accepted our <a href=\"https://tres-images-storage.s3-eu-west-1.amazonaws.com/Privacy+Policy+20200408.pdf\" style=\"color: rgb(8, 243, 106);;\">Terms of Service and Privacy Policy</a></p>\r\n    <br>\r\n\r\n    <!-- <ion-button  \r\n    color=\"secondary\" >\r\n      \r\n      SIGN UP\r\n    </ion-button> -->\r\n  \r\n      <ion-button type=\"submit\"  expand=\"block\" color=\"secondary\">SIGN UP</ion-button>\r\n    \r\n  <p style=\"color: white; text-align: right;\">Have an account? sign in <a routerLink=\"/login\" style=\"color: rgb(27, 219, 245);\">here</a></p>\r\n \r\n  </ion-list>\r\n</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/landlord-reg/landlord-reg-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/landlord-reg/landlord-reg-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LandlordRegPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordRegPageRoutingModule", function() { return LandlordRegPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landlord_reg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landlord-reg.page */ "./src/app/landlord-reg/landlord-reg.page.ts");




const routes = [
    {
        path: '',
        component: _landlord_reg_page__WEBPACK_IMPORTED_MODULE_3__["LandlordRegPage"]
    }
];
let LandlordRegPageRoutingModule = class LandlordRegPageRoutingModule {
};
LandlordRegPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandlordRegPageRoutingModule);



/***/ }),

/***/ "./src/app/landlord-reg/landlord-reg.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landlord-reg/landlord-reg.module.ts ***!
  \*****************************************************/
/*! exports provided: LandlordRegPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordRegPageModule", function() { return LandlordRegPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landlord_reg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landlord-reg-routing.module */ "./src/app/landlord-reg/landlord-reg-routing.module.ts");
/* harmony import */ var _landlord_reg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landlord-reg.page */ "./src/app/landlord-reg/landlord-reg.page.ts");







let LandlordRegPageModule = class LandlordRegPageModule {
};
LandlordRegPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landlord_reg_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandlordRegPageRoutingModule"]
        ],
        declarations: [_landlord_reg_page__WEBPACK_IMPORTED_MODULE_6__["LandlordRegPage"]]
    })
], LandlordRegPageModule);



/***/ }),

/***/ "./src/app/landlord-reg/landlord-reg.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/landlord-reg/landlord-reg.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-input {\n  color: white;\n}\n\nion-button {\n  color: black;\n}\n\nion-icon {\n  color: white;\n}\n\nh1 {\n  background-color: #08f36a;\n  color: #030120;\n  margin-right: 340px;\n  margin-left: 340px;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 100px;\n  height: 15px;\n  color: aliceblue;\n}\n\nion-label {\n  color: #1bdbf5;\n}\n\nion-item {\n  color: white;\n  text-align: left;\n  color: #1bdbf5;\n  border-bottom: solid 2px;\n}\n\na {\n  color: white;\n  padding: 8px 8px;\n  text-align: center;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\nimg {\n  text-align: left;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGxvcmQtcmVnL0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxsYW5kbG9yZC1yZWdcXGxhbmRsb3JkLXJlZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmRsb3JkLXJlZy9sYW5kbG9yZC1yZWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURHQTtFQUVJLFlBQUE7QUNESjs7QURHQTtFQUVBLFlBQUE7QUNEQTs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNHLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBQ0FIOztBREtFO0VBQ0UsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDRko7O0FESUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNESjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRsb3JkLXJlZy9sYW5kbG9yZC1yZWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcbiAgIFxyXG59XHJcblxyXG5pb24taW5wdXRcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcblxyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGNvbG9yOnJnYigzLCAxLCAzMikgO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxufVxyXG5saXtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgd2lkdGg6IDEwMHB4O1xyXG4gICBoZWlnaHQ6IDE1cHg7XHJcbiAgLy8gbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgIFxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjpyZ2IoMjcsIDIxOSwgMjQ1KVxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiByZ2IoMjcsIDIxOSwgMjQ1KTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcclxufVxyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lOyAgXHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7IFxyXG4gICB9XHJcbiAgXHJcbiAgLy8gYTpob3ZlciB7XHJcbiAgICBcclxuICAvLyAgICBjb2xvcjogYmxhY2s7XHJcbiAgLy8gfVxyXG4gXHJcblxyXG4gICIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGYzNmE7XG4gIGNvbG9yOiAjMDMwMTIwO1xuICBtYXJnaW4tcmlnaHQ6IDM0MHB4O1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzFiZGJmNTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMWJkYmY1O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHg7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/landlord-reg/landlord-reg.page.ts":
/*!***************************************************!*\
  !*** ./src/app/landlord-reg/landlord-reg.page.ts ***!
  \***************************************************/
/*! exports provided: LandlordRegPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordRegPage", function() { return LandlordRegPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
// tslint:disable-next-line: comment-format
//step 2






let LandlordRegPage = class LandlordRegPage {
    constructor(_serviceService, formBuilder, router, http) {
        this._serviceService = _serviceService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.lordData = { email: " ", pwd: " ", confirmPwd: " " };
        this.addLords = [];
    }
    // public registerForm = this.formBuilder.group({
    //   email:['',Validators.compose([Validators.required])],
    //   pwd:["",Validators.compose([Validators.required,Validators.minLength(8)])],
    //   confirmPwd:["",Validators.compose([Validators.required,Validators.minLength(8)])]
    // })
    ngOnInit() {
        this.getlandLords();
    }
    getlandLords() {
        this._serviceService.postLandlord(this.addLords).subscribe((data) => {
            this.addLords = data;
            console.log(this.addLords);
        });
    }
    register(form) {
        this._serviceService.postLandlord(form.value).subscribe((res) => {
            this.router.navigateByUrl('folder/home');
        });
        this._serviceService.postLandlord(this.lordData).subscribe(data => console.log(data));
        console.log(this.lordData.email);
        console.log(this.lordData.pwd);
        console.log(this.lordData.confirmPwd);
    }
};
LandlordRegPage.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LandlordRegPage.prototype, "lordData", void 0);
LandlordRegPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landlord-reg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landlord-reg.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-reg/landlord-reg.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landlord-reg.page.scss */ "./src/app/landlord-reg/landlord-reg.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
], LandlordRegPage);



/***/ })

}]);
//# sourceMappingURL=landlord-reg-landlord-reg-module-es2015.js.map