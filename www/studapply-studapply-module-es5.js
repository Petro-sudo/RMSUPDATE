function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studapply-studapply-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/studapply/studapply.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studapply/studapply.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudapplyStudapplyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar    color=\"dark\"  >\r\n \r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title  align=\"center\" style=\"font-size: xx-large;\" > \r\n   \r\n      \r\n      APPLICATION</ion-title>\r\n      <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/stud-profile\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n<ion-slide style=\"background-image: url('assets/pics/student.jpg');\" >\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n\r\n<ion-button >\r\n  \r\n  <ion-label>ARCADIA CAMPUS</ion-label>\r\n</ion-button>\r\n\r\n    </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-col>\r\n\r\n      <ion-button >\r\n        \r\n        <ion-label>ARTS CAMPUS</ion-label>\r\n      </ion-button>\r\n      \r\n      \r\n          </ion-col>\r\n\r\n\r\n\r\n\r\n          <ion-col>\r\n\r\n            <ion-button >\r\n              \r\n              <ion-label>EMALAHLENI CAMPUS</ion-label>\r\n            </ion-button>\r\n            \r\n                </ion-col>\r\n\r\n\r\n\r\n\r\n                <ion-col>\r\n\r\n                  <ion-button >\r\n                    \r\n                    <ion-label>GA-RANKUWA CAMPUS</ion-label>\r\n                  </ion-button>\r\n                  \r\n                      </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                      <ion-col>\r\n\r\n                        <ion-button >\r\n                          \r\n                          <ion-label>MBOMBELA CAMPUS</ion-label>\r\n                        </ion-button>\r\n                        \r\n                            </ion-col>\r\n\r\n\r\n\r\n\r\n                            <ion-col>\r\n\r\n                              <ion-button >\r\n                                \r\n                                <ion-label>PRETORIA MAIN CAMPUS</ion-label>\r\n                              </ion-button>\r\n                              \r\n                                  </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                  <ion-col>\r\n\r\n                                    <ion-button>\r\n                                      \r\n                                      <ion-label>POLOKWANE CAMPUS</ion-label>\r\n                                    </ion-button>\r\n                                    \r\n                                        </ion-col>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                        <a routerLink=\"/process\">  <ion-col>\r\n\r\n                                          <ion-button >\r\n                                            \r\n                                            <ion-label>soshanguve south</ion-label>\r\n                                          </ion-button>\r\n                                          \r\n                                              </ion-col>\r\n                                            </a>\r\n\r\n\r\n\r\n\r\n\r\n                                          \r\n\r\n\r\n  </ion-row>\r\n\r\n\r\n  \r\n \r\n\r\n\r\n\r\n</ion-slide>\r\n\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n   \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/studapply/studapply-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/studapply/studapply-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: StudapplyPageRoutingModule */

  /***/
  function srcAppStudapplyStudapplyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudapplyPageRoutingModule", function () {
      return StudapplyPageRoutingModule;
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


    var _studapply_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./studapply.page */
    "./src/app/studapply/studapply.page.ts");

    var routes = [{
      path: '',
      component: _studapply_page__WEBPACK_IMPORTED_MODULE_3__["StudapplyPage"]
    }];

    var StudapplyPageRoutingModule = function StudapplyPageRoutingModule() {
      _classCallCheck(this, StudapplyPageRoutingModule);
    };

    StudapplyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudapplyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/studapply/studapply.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/studapply/studapply.module.ts ***!
    \***********************************************/

  /*! exports provided: StudapplyPageModule */

  /***/
  function srcAppStudapplyStudapplyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudapplyPageModule", function () {
      return StudapplyPageModule;
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


    var _studapply_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./studapply-routing.module */
    "./src/app/studapply/studapply-routing.module.ts");
    /* harmony import */


    var _studapply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./studapply.page */
    "./src/app/studapply/studapply.page.ts");

    var StudapplyPageModule = function StudapplyPageModule() {
      _classCallCheck(this, StudapplyPageModule);
    };

    StudapplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _studapply_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudapplyPageRoutingModule"]],
      declarations: [_studapply_page__WEBPACK_IMPORTED_MODULE_6__["StudapplyPage"]]
    })], StudapplyPageModule);
    /***/
  },

  /***/
  "./src/app/studapply/studapply.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/studapply/studapply.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudapplyStudapplyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  width: 200px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGFwcGx5L0M6XFxVc2Vyc1xcUGV0cm9uZWxsYVxcRGVza3RvcFxcUk1TVVBEQVRFL3NyY1xcYXBwXFxzdHVkYXBwbHlcXHN0dWRhcHBseS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0dWRhcHBseS9zdHVkYXBwbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksWUFBQTtFQUNILFlBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL3N0dWRhcHBseS9zdHVkYXBwbHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvblxyXG57XHJcblxyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiBoZWlnaHQ6IDgwcHg7ICAgXHJcbn0iLCJpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/studapply/studapply.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/studapply/studapply.page.ts ***!
    \*********************************************/

  /*! exports provided: StudapplyPage */

  /***/
  function srcAppStudapplyStudapplyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudapplyPage", function () {
      return StudapplyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudapplyPage =
    /*#__PURE__*/
    function () {
      function StudapplyPage() {
        _classCallCheck(this, StudapplyPage);
      }

      _createClass(StudapplyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudapplyPage;
    }();

    StudapplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-studapply',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./studapply.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/studapply/studapply.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./studapply.page.scss */
      "./src/app/studapply/studapply.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StudapplyPage);
    /***/
  }
}]);
//# sourceMappingURL=studapply-studapply-module-es5.js.map