function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n  \r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">{{ folder }} </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/folder/hom\">previous</ion-icon>\r\n  \r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content login-header ion-padding>\r\n  <ion-toolbar>\r\n    <div slot=\"start\" style=\"font-size: small; \">\r\n      <img src=\"assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\">\r\n     </div>\r\n    <ul class=\"sidebar-nav\" style=\" font-size: small\">\r\n      <li><a routerLink=\"/help/helplord\">HELP</a></li>\r\n      <li><a routerLink=\"#\">FAQS</a></li>\r\n      <li><a routerLink=\"/folder/home\">HOME</a></li>\r\n    </ul>\r\n  </ion-toolbar>\r\n  \r\n\r\n  \r\n  <br><br> <br> <br>\r\n\r\n  <p style=\"color: white;margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(27, 219, 245)solid;\">Sign in to access your account</p>\r\n      \r\n   \r\n  <form>\r\n\r\n    <div linespace></div>\r\n\r\n    <br>\r\n\r\n<ion-item transparent>\r\n  <ion-label position = \"floating\"><ion-icon name=\"mail\"></ion-icon> EMAIL</ion-label>\r\n<ion-input [(ngModel)] = \"loginUserData.email\" type=\"email\" id = \"email\" name =\"email\" class=\"form-control\"\r\n#email = \"ngModel\" autofocus required email ngModel></ion-input>    \r\n</ion-item>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n  Please enter a valid email.\r\n</div>\r\n\r\n<ion-item transparent> \r\n<ion-label position = \"floating\"><ion-icon name=\"lock-closed\"></ion-icon> PASSWORD</ion-label>\r\n<ion-input [(ngModel)]=\"loginUserData.email\" type=\"password\" name=\"password\" id=\"password\" class=\"form-control\"\r\nplaceholder=\"\" #Password=\"ngModel\" required minlength=\"8\" maxlength=\"20\" ngModel ></ion-input> \r\n</ion-item>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" style=\"color:red\">\r\n  Please enter a valid password between 8 to 20 chars.\r\n</div>\r\n<br>\r\n<div class =\"ahover\">\r\n<a routerLink = \"/viewproperties\"><ion-button class = \"ion-text-center\" color=\"secondary\"  expand=\"block\"\r\n(click)=\"loginUser()\">Sign In</ion-button></a>\r\n</div>\r\n<ion-toolbar>\r\n<div slot=\"start\" >\r\n   <p style=\"text-align: left; color: white;\">No account? sign up<a routerLink=\"/landlord-reg\" style=\"color: rgb(27, 219, 245);\">here</a></p>\r\n</div>\r\n\r\n\r\n<div slot=\"end\" >\r\n  <!-- <a routerLink=\"/popemail\" ><p style=\"color: rgb(27, 219, 245);border-bottom: solid 2px;\">Forget your password</p></a>\r\n   -->\r\n  <p><ion-button style=\"color: rgb(27, 219, 245);border-bottom: solid 2px; text-transform: none;\" size=\"small\"\r\n    color= \"transparent\" (click)= \"popover($event)\" >Forgot your password</ion-button></p>\r\n  \r\n</div>\r\n</ion-toolbar>\r\n\r\n</form>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/loader.service.ts":
  /*!***********************************!*\
    !*** ./src/app/loader.service.ts ***!
    \***********************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(LoaderService, [{
        key: "display",
        value: function display(value) {
          this.status.next(value);
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoaderService);
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-label {\n  color: #1bdbf5;\n}\n\nion-item {\n  color: white;\n  text-align: left;\n  color: #1bdbf5;\n  border-bottom: solid 2px;\n}\n\nion-input {\n  color: white;\n}\n\nion-button {\n  color: black;\n}\n\nion-icon {\n  color: white;\n}\n\nh1 {\n  background-color: #08f36a;\n  color: #030120;\n  margin-right: 340px;\n  margin-left: 340px;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 95px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n}\n\nimg {\n  text-align: left;\n  font-size: small;\n}\n\nion-toolbar {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  color: white;\n  padding: 8px 8px;\n  text-align: center;\n  font-style: initial;\n}\n\n.ahover a:hover {\n  background-color: transparent;\n}\n\na:hover {\n  background-color: #8448f3;\n  color: black;\n}\n\nul {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxtYWQgcG93ZXItYyBMYW5nYVxcRGVza3RvcFxcdHJlc1xcUk1TVVBEQVRFL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQ0FBQTtBQ0FKOztBREtBO0VBQ0ksY0FBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDRko7O0FESUE7RUFFSSxZQUFBO0FDRko7O0FESUE7RUFFQSxZQUFBO0FDRkE7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0E7RUFDRyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FIOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdHO0VBQ0Msb0NBQUE7QUNBSjs7QURHRTtFQUVFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FETUU7RUFDRSw2QkFBQTtBQ0hKOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSEY7O0FES0U7RUFDRSxrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xyXG4gICBcclxuICAgIFxyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjpyZ2IoMjcsIDIxOSwgMjQ1KVxyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiByZ2IoMjcsIDIxOSwgMjQ1KTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcclxufVxyXG5pb24taW5wdXRcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcblxyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGNvbG9yOnJnYigzLCAxLCAzMikgO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxufVxyXG5saXtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgd2lkdGg6IDk1cHg7XHJcbiAgIGhlaWdodDogMTVweDtcclxuICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7IFxyXG4gICB9XHJcbiAgIGlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xyXG5cclxuICAgfVxyXG4gIGEge1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFob3ZlcntcclxuICBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5hOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMyLCA3MiwgMjQzKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuICB1bHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcblxyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTUsIDI0OCwgOTUpO1xyXG4vLyB9XHJcbi8vIC5sb2dpbi1oZWFkZXJ7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuLy8gfVxyXG4vLyAubG9nby1pbWd7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIHdpZHRoOiAxMjBweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vIH1cclxuLy8gW2hlYWRpbmctY29sdW1uLWxyXXtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmcgOiAxNXB4O1xyXG4vLyB9XHJcbi8vIFttZWRpdW0taGVhZGluZ117XHJcblxyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIkhlZWJvLUJvbGRcIiAhaW1wb3J0YW50OyAgXHJcbi8vICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6IHZhcigtLXRoZW1lLWJsYWNrKTtcclxuLy8gICBmb250LXN0eWxlOiBib2xkO1xyXG4vLyB9XHJcbi8vIFtzbWFsbC1oZWFkaW5nXXtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkhlZWJvLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IGF1dG87cGFkZGluZy1yaWdodDogMTVweDsgZm9udC1zaXplOiAxNXB4OyA7XHJcbi8vICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4vLyB9XHJcbi8vIFt0cmFuc3BhcmVudF1cclxuLy8ge1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG4vLyBpb24taW5wdXRcclxuLy8ge1xyXG4vLyAgICAgLS1jb2xvcjojMDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgIHBvc2l0aW9uOiBmbG9hdGluZztcclxuLy8gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgXHJcbiAgICBcclxuLy8gfVxyXG4vLyBbaWNvbi1zbWFsbF17XHJcbi8vICAgICB3aWR0aDozNXB4O1xyXG4vLyB9XHJcbi8vIGlvbi1pdGVte1xyXG4vLyAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp0cmFuc3BhcmVudDtcclxuLy8gICAgIHBhZGRpbmc6MTBweDtcclxuLy8gfVxyXG4vLyBbbGluZXNwYWNlXVxyXG4vLyB7XHJcbi8vICAgICBoZWlnaHQ6IDIwcHg7XHJcbi8vIH1cclxuLy8gaW9uLWxhYmVse1xyXG4vLyAgICAgY29sb3I6IzAwMDtcclxuLy8gICAgIG9wYWNpdHk6IC44O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuLy8gLmZvcmdldC1wYXNzd29yZFxyXG4vLyB7XHJcbi8vICAgICBjb2xvcjojMDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vIH1cclxuLy8gaW9uLWJ1dHRvblxyXG4vLyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuLy8gLmxvZ1xyXG4vLyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gfVxyXG4vLyBoMVxyXG4vLyB7XHJcbi8vICAgIHRleHQtYWxpZ246Y2VudGVyOyBcclxuLy8gfVxyXG4vLyAuaW9uLXJhZGlvXHJcbi8vIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzFiZGJmNTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMWJkYmY1O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjM2YTtcbiAgY29sb3I6ICMwMzAxMjA7XG4gIG1hcmdpbi1yaWdodDogMzQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNDBweDtcbn1cblxubGkge1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmltZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpbml0aWFsO1xufVxuXG4uYWhvdmVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDQ4ZjM7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _userservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../userservice.service */
    "./src/app/userservice.service.ts");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _popover_popemail_popemail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../popover/popemail/popemail.page */
    "./src/app/popover/popemail/popemail.page.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(alertCtrl, router, _serviceService, userserviceService, _loaderservice, popoverController) {
        _classCallCheck(this, LoginPage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this._serviceService = _serviceService;
        this.userserviceService = userserviceService;
        this._loaderservice = _loaderservice;
        this.popoverController = popoverController;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //@Input() postData= {email:" ", password:" "}

        this.loginUserData = {};
        this.error = false;
        this.errorMessage = " ";
        this.dataLoading = false;
        this.CheckArrary = "this.loginuser";
        this.value = 0;
        this.addprofile = [];
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.getstu();
          this._loaderservice.display(true);
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          this._loaderservice.display(false);

          this.userserviceService.userLogin(this.loginUserData).subscribe(function (res) {
            if (res["errorCode"] != 0) {
              _this.loginuser = res.email[0];
              _this.email = _this.loginuser;
              console.log(_this.loginuser);
              _this.error = false;
              _this.errorMessage = " ";

              _this._loaderservice.display(false);

              if (_this.email = _this.loginUser) {
                _this.router.navigate(['/landlord-dash']);

                localStorage.setItem('token', res.token);
              } else {
                _this.router.navigate(['/login']);
              }
            }
          } // ,
          //  err=>{console.log(err)
          //  this.error  = true;
          //  this.errorMessage = err.message;
          //  this._loaderservice.display(false);
          //  }
          //  ,
          //  ()=>{
          //   this._loaderservice.display(false);
          //  } 
          );
        } //  getUserType(e){
        //    this.userID = e;
        //    console.log(e);
        //  }
        //  getstu(){
        //   this._serviceService.postLogin(this.addprofile).subscribe((data: any)=>
        //   {this.addprofile=data;
        //   console.log(this.addprofile);
        //   });
        // }
        //  loginAction(){
        //   this._serviceService.postLogin(this.postData).subscribe(
        //     data =>
        //     console.log(data));
        //   console.log(this.postData);
        //    }
        //  popover

      }, {
        key: "popover",
        value: function popover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popo;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _popover_popemail_popemail_page__WEBPACK_IMPORTED_MODULE_7__["PopemailPage"],
                      componentProps: {
                        custom_id: this.value
                      }
                    });

                  case 2:
                    popo = _context.sent;
                    popo.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: _userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserserviceService"]
      }, {
        type: _loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('change'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LoginPage.prototype, "change", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserserviceService"], _loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], LoginPage);
    ;
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map