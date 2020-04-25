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


    __webpack_exports__["default"] = "<!-- <ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n  \r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">{{ folder }} </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/folder/hom\">previous</ion-icon>\r\n  \r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content login-header ion-padding>\r\n  <ion-toolbar>\r\n    <div slot=\"start\" style=\"font-size: small; \">\r\n      <img src=\"assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\">\r\n     </div>\r\n    <ul class=\"sidebar-nav\" style=\" font-size: small\">\r\n      <li><a routerLink=\"/help/helplord\">HELP</a></li>\r\n      <li><a routerLink=\"#\">FAQS</a></li>\r\n      <li><a routerLink=\"/folder/home\">HOME</a></li>\r\n    </ul>\r\n  </ion-toolbar>\r\n  \r\n\r\n  \r\n  <br><br> <br> <br>\r\n\r\n  <p style=\"color: white;\">Sign in to access your account</p>\r\n      \r\n   \r\n  <form>\r\n\r\n    <div linespace></div>\r\n\r\n    <br>\r\n\r\n<ion-item transparent>\r\n  <ion-label position = \"floating\"><ion-icon name=\"mail\"></ion-icon> EMAIL</ion-label>\r\n<ion-input [(ngModel)] = \"loginUserData.email\" type=\"email\" id = \"email\" name =\"email\" class=\"form-control\"\r\n#email = \"ngModel\" autofocus required email ngModel></ion-input>    \r\n</ion-item>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n  Please enter a valid email.\r\n</div>\r\n\r\n<ion-item transparent> \r\n<ion-label position = \"floating\"><ion-icon name=\"lock-closed\"></ion-icon> PASSWORD</ion-label>\r\n<ion-input [(ngModel)]=\"loginUserData.email\" type=\"password\" name=\"password\" id=\"password\" class=\"form-control\"\r\nplaceholder=\"\" #Password=\"ngModel\" required minlength=\"8\" maxlength=\"20\" ngModel ></ion-input> \r\n</ion-item>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\" style=\"color:red\">\r\n  Please enter a valid password between 8 to 20 chars.\r\n</div>\r\n<br>\r\n\r\n<ion-button class = \"ion-text-center\" color=\"secondary\"  expand=\"block\"\r\n(click)=\"loginUser()\">Sign In</ion-button>\r\n<br>\r\n\r\n\r\n<p style=\"text-align: left; color: white;\">No account? sign up<a routerLink=\"/landlord-reg\" style=\"color: rgb(27, 219, 245);\">here</a></p>\r\n\r\n\r\n</form>\r\n\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-label {\n  color: #1bdbf5;\n}\n\nion-item {\n  color: white;\n  text-align: left;\n  color: #1bdbf5;\n  border-bottom: solid 2px;\n}\n\nion-input {\n  color: white;\n}\n\nion-button {\n  color: black;\n}\n\nion-icon {\n  color: white;\n}\n\nh1 {\n  background-color: #08f36a;\n  color: #030120;\n  margin-right: 340px;\n  margin-left: 340px;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 100px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n}\n\nimg {\n  text-align: left;\n  font-size: small;\n}\n\nion-toolbar {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  color: white;\n  padding: 8px 8px;\n  text-align: center;\n  font-style: initial;\n}\n\na:hover {\n  background-color: #8448f3;\n  color: black;\n}\n\nul {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxQZXRyb25lbGxhXFxEZXNrdG9wXFxSTVNVUERBVEUvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9DQUFBO0FDQUo7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUNGSjs7QURJQTtFQUVJLFlBQUE7QUNGSjs7QURJQTtFQUVBLFlBQUE7QUNGQTs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHQTtFQUNHLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUg7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0c7RUFDQyxvQ0FBQTtBQ0FKOztBREdFO0VBRUUsa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDMsIDEsIDMyKTtcclxuICAgXHJcbiAgICBcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6cmdiKDI3LCAyMTksIDI0NSlcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogcmdiKDI3LCAyMTksIDI0NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHg7XHJcbn1cclxuaW9uLWlucHV0XHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG5cclxuY29sb3I6IGJsYWNrO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAyNDMsIDEwNik7XHJcbiAgICBjb2xvcjpyZ2IoMywgMSwgMzIpIDtcclxuICAgIG1hcmdpbi1yaWdodDogMzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzQwcHg7XHJcbn1cclxubGl7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHdpZHRoOiAxMDBweDtcclxuICAgaGVpZ2h0OiAxNXB4O1xyXG4gICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBcclxuICBcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDsgXHJcbiAgIH1cclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcblxyXG4gICB9XHJcbiAgYSB7XHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMyLCA3MiwgMjQzKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgdWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGlvbi1jb250ZW50e1xyXG5cclxuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDk1LCAyNDgsIDk1KTtcclxuLy8gfVxyXG4vLyAubG9naW4taGVhZGVye1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbi8vIH1cclxuLy8gLmxvZ28taW1ne1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB3aWR0aDogMTIwcHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcbi8vIFtoZWFkaW5nLWNvbHVtbi1scl17XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nIDogMTVweDtcclxuLy8gfVxyXG4vLyBbbWVkaXVtLWhlYWRpbmdde1xyXG5cclxuLy8gICBmb250LWZhbWlseTogXCJIZWViby1Cb2xkXCIgIWltcG9ydGFudDsgIFxyXG4vLyAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibGFjayk7XHJcbi8vICAgZm9udC1zdHlsZTogYm9sZDtcclxuLy8gfVxyXG4vLyBbc21hbGwtaGVhZGluZ117XHJcbi8vICAgICBmb250LWZhbWlseTogXCJIZWViby1SZWd1bGFyXCIgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO3BhZGRpbmctcmlnaHQ6IDE1cHg7IGZvbnQtc2l6ZTogMTVweDsgO1xyXG4vLyAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuLy8gfVxyXG4vLyBbdHJhbnNwYXJlbnRdXHJcbi8vIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vIH1cclxuLy8gaW9uLWlucHV0XHJcbi8vIHtcclxuLy8gICAgIC0tY29sb3I6IzAwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICBwb3NpdGlvbjogZmxvYXRpbmc7XHJcbi8vICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIFxyXG4gICAgXHJcbi8vIH1cclxuLy8gW2ljb24tc21hbGxde1xyXG4vLyAgICAgd2lkdGg6MzVweDtcclxuLy8gfVxyXG4vLyBpb24taXRlbXtcclxuLy8gICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7XHJcbi8vICAgICBwYWRkaW5nOjEwcHg7XHJcbi8vIH1cclxuLy8gW2xpbmVzcGFjZV1cclxuLy8ge1xyXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyB9XHJcbi8vIGlvbi1sYWJlbHtcclxuLy8gICAgIGNvbG9yOiMwMDA7XHJcbi8vICAgICBvcGFjaXR5OiAuODtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcbi8vIC5mb3JnZXQtcGFzc3dvcmRcclxuLy8ge1xyXG4vLyAgICAgY29sb3I6IzAwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcbi8vIGlvbi1idXR0b25cclxuLy8ge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5sb2dcclxuLy8ge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH1cclxuLy8gaDFcclxuLy8ge1xyXG4vLyAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbi8vIH1cclxuLy8gLmlvbi1yYWRpb1xyXG4vLyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDMsIDEsIDMyKTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMxYmRiZjU7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzFiZGJmNTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGYzNmE7XG4gIGNvbG9yOiAjMDMwMTIwO1xuICBtYXJnaW4tcmlnaHQ6IDM0MHB4O1xuICBtYXJnaW4tbGVmdDogMzQwcHg7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuaW1nIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGluaXRpYWw7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ0OGYzO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
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

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(alertCtrl, router, _serviceService, userserviceService, _loaderservice) {
        _classCallCheck(this, LoginPage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this._serviceService = _serviceService;
        this.userserviceService = userserviceService;
        this._loaderservice = _loaderservice;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //@Input() postData= {email:" ", password:" "}

        this.loginUserData = {};
        this.error = false;
        this.errorMessage = " ";
        this.dataLoading = false;
        this.CheckArrary = "this.loginuser";
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _userservice_service__WEBPACK_IMPORTED_MODULE_5__["UserserviceService"], _loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])], LoginPage);
    ;
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map