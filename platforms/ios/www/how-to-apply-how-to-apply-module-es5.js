function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["how-to-apply-how-to-apply-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-apply/how-to-apply.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-apply/how-to-apply.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHowToApplyHowToApplyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar    color=\"dark\"  >\r\n \r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title  align=\"center\" > \r\n     How To Apply\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    \r\n      <img class = \"logo-img\" src=\"assets/icon/tut2.jpg\" alt=\"\">\r\n    \r\n  \r\n\r\n      <ion-item lines=\"none\">\r\n    <strong><p id=\"step1\">Step 1 </p></strong>\r\n    <strong><p color=\"primary\"> – Go to the nearest TUT campus, Below are off-campus Accommodation offices</p></strong>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>PRETORIA WEST, ARTS & ARCADIA CAMPUS - Building 52 (next to tennis court)</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>SOSHANGUVE CAMPUS - Building 03 – G32 South Campus</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>GA-RANKUWA CAMPUS - Building 22 – G05</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>MBOMBELA CAMPUS - Counter 5 (next to admin office)</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>EMALAHLENI CAMPUS - Building 3 – Counter 1 (I-Centre)</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon  name=\"ellipse\"></ion-icon><p>POLOKWANE CAMPUS - Office 3A (next to the Bookshop</p>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <strong><p id=\"step1\">Step 2 </p></strong>\r\n    <strong><p color=\"primary\"> – Provide Proof of Registration.</p></strong>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <strong><p id=\"step1\">Step 3 </p></strong>\r\n    <strong><p color=\"primary\"> –NSFAS Funded Stiudents may enquire of their funding status at the off campus accreditation center.</p></strong>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <strong><p id=\"step1\">Step 4 </p></strong>\r\n    <strong><p color=\"primary\"> – Students to contact service provider direclty (CALL, WHATSAPP OR EMAIL)</p></strong>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <strong><p id=\"step1\">Step 5 </p></strong>\r\n    <strong><p color=\"primary\"> – Students signs lease agreement with the service provider</p></strong>\r\n  </ion-item>\r\n  \r\n  \r\n  \r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/how-to-apply/how-to-apply-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/how-to-apply/how-to-apply-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: HowToApplyPageRoutingModule */

  /***/
  function srcAppHowToApplyHowToApplyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowToApplyPageRoutingModule", function () {
      return HowToApplyPageRoutingModule;
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


    var _how_to_apply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./how-to-apply.page */
    "./src/app/how-to-apply/how-to-apply.page.ts");

    var routes = [{
      path: '',
      component: _how_to_apply_page__WEBPACK_IMPORTED_MODULE_3__["HowToApplyPage"]
    }];

    var HowToApplyPageRoutingModule = function HowToApplyPageRoutingModule() {
      _classCallCheck(this, HowToApplyPageRoutingModule);
    };

    HowToApplyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HowToApplyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/how-to-apply/how-to-apply.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/how-to-apply/how-to-apply.module.ts ***!
    \*****************************************************/

  /*! exports provided: HowToApplyPageModule */

  /***/
  function srcAppHowToApplyHowToApplyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowToApplyPageModule", function () {
      return HowToApplyPageModule;
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


    var _how_to_apply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./how-to-apply-routing.module */
    "./src/app/how-to-apply/how-to-apply-routing.module.ts");
    /* harmony import */


    var _how_to_apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./how-to-apply.page */
    "./src/app/how-to-apply/how-to-apply.page.ts");

    var HowToApplyPageModule = function HowToApplyPageModule() {
      _classCallCheck(this, HowToApplyPageModule);
    };

    HowToApplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _how_to_apply_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowToApplyPageRoutingModule"]],
      declarations: [_how_to_apply_page__WEBPACK_IMPORTED_MODULE_6__["HowToApplyPage"]]
    })], HowToApplyPageModule);
    /***/
  },

  /***/
  "./src/app/how-to-apply/how-to-apply.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/how-to-apply/how-to-apply.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHowToApplyHowToApplyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid {\n  border: 5px solid red;\n  height: 250px;\n}\n\n#step1 {\n  border: 3px solid blue;\n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n}\n\nion-content {\n  --ion-background-color:#ddb636f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvLWFwcGx5L0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxob3ctdG8tYXBwbHlcXGhvdy10by1hcHBseS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvdy10by1hcHBseS9ob3ctdG8tYXBwbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFFSSxnQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG93LXRvLWFwcGx5L2hvdy10by1hcHBseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi8vcFxyXG4jc3RlcDF7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkZGI2MzZmMztcclxufSIsImlvbi1ncmlkIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4jc3RlcDEge1xuICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkZGI2MzZmMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/how-to-apply/how-to-apply.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/how-to-apply/how-to-apply.page.ts ***!
    \***************************************************/

  /*! exports provided: HowToApplyPage */

  /***/
  function srcAppHowToApplyHowToApplyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowToApplyPage", function () {
      return HowToApplyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HowToApplyPage =
    /*#__PURE__*/
    function () {
      function HowToApplyPage() {
        _classCallCheck(this, HowToApplyPage);
      }

      _createClass(HowToApplyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HowToApplyPage;
    }();

    HowToApplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-how-to-apply',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./how-to-apply.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-apply/how-to-apply.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./how-to-apply.page.scss */
      "./src/app/how-to-apply/how-to-apply.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HowToApplyPage);
    /***/
  }
}]);
//# sourceMappingURL=how-to-apply-how-to-apply-module-es5.js.map