function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-managesystem-managesystem-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/managesystem/managesystem.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/managesystem/managesystem.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminManagesystemManagesystemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>managesystem</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/admin/managesystem/managesystem-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/managesystem/managesystem-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ManagesystemPageRoutingModule */

  /***/
  function srcAppAdminManagesystemManagesystemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagesystemPageRoutingModule", function () {
      return ManagesystemPageRoutingModule;
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


    var _managesystem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./managesystem.page */
    "./src/app/admin/managesystem/managesystem.page.ts");

    var routes = [{
      path: '',
      component: _managesystem_page__WEBPACK_IMPORTED_MODULE_3__["ManagesystemPage"]
    }];

    var ManagesystemPageRoutingModule = function ManagesystemPageRoutingModule() {
      _classCallCheck(this, ManagesystemPageRoutingModule);
    };

    ManagesystemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManagesystemPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/managesystem/managesystem.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/managesystem/managesystem.module.ts ***!
    \***********************************************************/

  /*! exports provided: ManagesystemPageModule */

  /***/
  function srcAppAdminManagesystemManagesystemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagesystemPageModule", function () {
      return ManagesystemPageModule;
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


    var _managesystem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./managesystem-routing.module */
    "./src/app/admin/managesystem/managesystem-routing.module.ts");
    /* harmony import */


    var _managesystem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./managesystem.page */
    "./src/app/admin/managesystem/managesystem.page.ts");

    var ManagesystemPageModule = function ManagesystemPageModule() {
      _classCallCheck(this, ManagesystemPageModule);
    };

    ManagesystemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _managesystem_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagesystemPageRoutingModule"]],
      declarations: [_managesystem_page__WEBPACK_IMPORTED_MODULE_6__["ManagesystemPage"]]
    })], ManagesystemPageModule);
    /***/
  },

  /***/
  "./src/app/admin/managesystem/managesystem.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/admin/managesystem/managesystem.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminManagesystemManagesystemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hbmFnZXN5c3RlbS9tYW5hZ2VzeXN0ZW0ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/managesystem/managesystem.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/managesystem/managesystem.page.ts ***!
    \*********************************************************/

  /*! exports provided: ManagesystemPage */

  /***/
  function srcAppAdminManagesystemManagesystemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagesystemPage", function () {
      return ManagesystemPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ManagesystemPage =
    /*#__PURE__*/
    function () {
      function ManagesystemPage() {
        _classCallCheck(this, ManagesystemPage);
      }

      _createClass(ManagesystemPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManagesystemPage;
    }();

    ManagesystemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managesystem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./managesystem.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/managesystem/managesystem.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./managesystem.page.scss */
      "./src/app/admin/managesystem/managesystem.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ManagesystemPage);
    /***/
  }
}]);
//# sourceMappingURL=admin-managesystem-managesystem-module-es5.js.map