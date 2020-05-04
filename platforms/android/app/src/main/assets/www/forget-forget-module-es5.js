function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgetForgetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">{{ folder }} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content login-header ion-padding>\r\n  <div class = \"login-header ion-padding\">\r\n    <img class = \"logo-img\" src=\"assets/icon/tut.png\" alt=\"\">\r\n  </div>\r\n  <div class = \"ion-text-center\">\r\n      <div heading-column-lr>\r\n       <h1 medium-heading>TUTEH PROPERTIES</h1>\r\n      </div>\r\n\r\n      <br>\r\n    \r\n      <ion-item transparent>\r\n      <ion-label position=\"floating\"></ion-label>\r\n         <ion-input ngModel name = \"loginData.email\" #email = \"ngModel\" placeholder = \"E-MAIL\" type= \"text\" required></ion-input>\r\n         <div *ngIf = \"!email.valid && email.touched\">\r\n           <div *ngIf = \"email.errors.required\">email required</div>\r\n\r\n           <div *ngIf = \"email != loginData.password\">\r\n            <div *ngIf = \"email.errors\">email doesn't exist</div>\r\n          </div>\r\n\r\n         </div>\r\n        </ion-item>\r\n        <p>check your e-mail for reseting your password</p>\r\n     <br><br>\r\n     \r\n    <ion-button class = \"ion-text-center\" color=\"primary\" \r\n     (click)=\"forgot\">submit</ion-button>\r\n    <br>\r\n<br><br>\r\n     \r\n\r\n      \r\n  </div> \r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/forget/forget-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/forget/forget-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ForgetPageRoutingModule */

  /***/
  function srcAppForgetForgetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPageRoutingModule", function () {
      return ForgetPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forget_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget.page */
    "./src/app/forget/forget.page.ts");

    var routes = [{
      path: '',
      component: _forget_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPage"]
    }];

    var ForgetPageRoutingModule = function ForgetPageRoutingModule() {
      _classCallCheck(this, ForgetPageRoutingModule);
    };

    ForgetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forget/forget.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/forget/forget.module.ts ***!
    \*****************************************/

  /*! exports provided: ForgetPageModule */

  /***/
  function srcAppForgetForgetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function () {
      return ForgetPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-routing.module */
    "./src/app/forget/forget-routing.module.ts");
    /* harmony import */


    var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forget.page */
    "./src/app/forget/forget.page.ts");

    var ForgetPageModule = function ForgetPageModule() {
      _classCallCheck(this, ForgetPageModule);
    };

    ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPageRoutingModule"]],
      declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
    })], ForgetPageModule);
    /***/
  },

  /***/
  "./src/app/forget/forget.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/forget/forget.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgetForgetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:chartreuse;\n}\n\n.login-header {\n  position: relative;\n}\n\n.logo-img {\n  display: block;\n  width: 120px;\n  text-align: left;\n}\n\n.h {\n  text-align: center;\n}\n\n.ion-input {\n  border: solid;\n  text-align: center;\n  position: \"floating\";\n}\n\n[transparent] {\n  --background: transparent;\n}\n\nion-input {\n  --color:#000;\n  font-size: 15px;\n  position: floating;\n  text-align: center;\n  border: solid #0d0d0f 0.5px;\n}\n\n[icon-small] {\n  width: 35px;\n}\n\nion-item {\n  --highlight-color-focused:transparent;\n  padding: 10px;\n}\n\n[linespace] {\n  height: 20px;\n}\n\nion-label {\n  color: #000;\n  opacity: 0.8;\n  font-size: 15px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L0M6XFxVc2Vyc1xcbWFkIHBvd2VyLWMgTGFuZ2FcXERlc2t0b3BcXHRyZXNcXFJNU1VQREFURS9zcmNcXGFwcFxcZm9yZ2V0XFxmb3JnZXQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlDQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDR0o7O0FEREE7RUFFSSx5QkFBQTtBQ0dKOztBRERBO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNHTDs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLHFDQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZBO0VBRUksWUFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmNoYXJ0cmV1c2U7XHJcbn1cclxuLmxvZ2luLWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5sb2dvLWltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBcImZsb2F0aW5nXCI7XHJcbn1cclxuW3RyYW5zcGFyZW50XVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1pbnB1dFxyXG57XHJcbiAgICAtLWNvbG9yOiMwMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgcG9zaXRpb246IGZsb2F0aW5nO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBib3JkZXI6IHNvbGlkIHJnYigxMywgMTMsIDE1KSAwLjVweDtcclxuICAgIFxyXG59XHJcbltpY29uLXNtYWxsXXtcclxuICAgIHdpZHRoOjM1cHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbltsaW5lc3BhY2VdXHJcbntcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpjaGFydHJldXNlO1xufVxuXG4ubG9naW4taGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nby1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IFwiZmxvYXRpbmdcIjtcbn1cblxuW3RyYW5zcGFyZW50XSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IzAwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogZmxvYXRpbmc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAjMGQwZDBmIDAuNXB4O1xufVxuXG5baWNvbi1zbWFsbF0ge1xuICB3aWR0aDogMzVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5bbGluZXNwYWNlXSB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/forget/forget.page.ts":
  /*!***************************************!*\
    !*** ./src/app/forget/forget.page.ts ***!
    \***************************************/

  /*! exports provided: ForgetPage */

  /***/
  function srcAppForgetForgetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPage", function () {
      return ForgetPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgetPage =
    /*#__PURE__*/
    function () {
      function ForgetPage() {
        _classCallCheck(this, ForgetPage);
      }

      _createClass(ForgetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetPage;
    }();

    ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget.page.scss */
      "./src/app/forget/forget.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ForgetPage);
    /***/
  }
}]);
//# sourceMappingURL=forget-forget-module-es5.js.map