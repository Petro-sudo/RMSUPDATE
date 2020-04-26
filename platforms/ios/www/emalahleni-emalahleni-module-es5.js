function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emalahleni-emalahleni-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/emalahleni/emalahleni.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/emalahleni/emalahleni.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderEmalahleniEmalahleniPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Emalahleni</ion-title>\r\n    <ion-icon name=\"arrow-undo\" routerLink=\"./folder\">previous</ion-icon>\r\n  </ion-toolbar>\r\n\r\n  \r\n</ion-header>\r\n\r\n<ion-content style=\"color: goldenrod;\">\r\n\r\n<ion-grid style=\"color: black;\" col=\"12\">\r\n\r\n    <ion-card>\r\n      <h1 style=\"color: black;\">CORRIDOR HILL</h1>\r\n      9 Ilanga Crescent, Corridor Hill\r\nContact Person: Fortunate Nokhipha\r\nfortunatenokhipha@gmail.com\r\n0818361979</ion-card>\r\n\r\n    <ion-card>\r\n      <h1 style=\"color: black;\">MAKOTI VILLAGE</h1>\r\n      73 Mandela Drive, Witbank, 1035\r\n      Contact Person: Jenny Taljaard\r\n      admin@ovecon.co.za\r\n      0716875026</ion-card>\r\n\r\n    <ion-card>\r\n      <h1 style=\"color: black;\">YEYE HOUSE</h1>\r\n      3 Windsor Avenue, Witbank, Emalahleni\r\nContact Person: Godfrey\r\nyeye@telkomsa.ne\r\n0798591427</ion-card>\r\n    </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/folder/emalahleni/emalahleni-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/folder/emalahleni/emalahleni-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: EmalahleniPageRoutingModule */

  /***/
  function srcAppFolderEmalahleniEmalahleniRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmalahleniPageRoutingModule", function () {
      return EmalahleniPageRoutingModule;
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


    var _emalahleni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emalahleni.page */
    "./src/app/folder/emalahleni/emalahleni.page.ts");

    var routes = [{
      path: '',
      component: _emalahleni_page__WEBPACK_IMPORTED_MODULE_3__["EmalahleniPage"]
    }];

    var EmalahleniPageRoutingModule = function EmalahleniPageRoutingModule() {
      _classCallCheck(this, EmalahleniPageRoutingModule);
    };

    EmalahleniPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmalahleniPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/emalahleni/emalahleni.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/folder/emalahleni/emalahleni.module.ts ***!
    \********************************************************/

  /*! exports provided: EmalahleniPageModule */

  /***/
  function srcAppFolderEmalahleniEmalahleniModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmalahleniPageModule", function () {
      return EmalahleniPageModule;
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


    var _emalahleni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./emalahleni-routing.module */
    "./src/app/folder/emalahleni/emalahleni-routing.module.ts");
    /* harmony import */


    var _emalahleni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./emalahleni.page */
    "./src/app/folder/emalahleni/emalahleni.page.ts");

    var EmalahleniPageModule = function EmalahleniPageModule() {
      _classCallCheck(this, EmalahleniPageModule);
    };

    EmalahleniPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _emalahleni_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmalahleniPageRoutingModule"]],
      declarations: [_emalahleni_page__WEBPACK_IMPORTED_MODULE_6__["EmalahleniPage"]]
    })], EmalahleniPageModule);
    /***/
  },

  /***/
  "./src/app/folder/emalahleni/emalahleni.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/folder/emalahleni/emalahleni.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderEmalahleniEmalahleniPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9lbWFsYWhsZW5pL2VtYWxhaGxlbmkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/folder/emalahleni/emalahleni.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/folder/emalahleni/emalahleni.page.ts ***!
    \******************************************************/

  /*! exports provided: EmalahleniPage */

  /***/
  function srcAppFolderEmalahleniEmalahleniPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmalahleniPage", function () {
      return EmalahleniPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EmalahleniPage =
    /*#__PURE__*/
    function () {
      function EmalahleniPage() {
        _classCallCheck(this, EmalahleniPage);
      }

      _createClass(EmalahleniPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmalahleniPage;
    }();

    EmalahleniPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-emalahleni',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./emalahleni.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/emalahleni/emalahleni.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./emalahleni.page.scss */
      "./src/app/folder/emalahleni/emalahleni.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EmalahleniPage);
    /***/
  }
}]);
//# sourceMappingURL=emalahleni-emalahleni-module-es5.js.map