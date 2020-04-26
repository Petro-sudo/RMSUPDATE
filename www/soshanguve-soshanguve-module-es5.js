function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["soshanguve-soshanguve-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/soshanguve/soshanguve.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/soshanguve/soshanguve.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSoshanguveSoshanguvePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>soshanguve</ion-title>\r\n    <ion-icon style=\"font-size: 200px;\"  name=\"arrow-undo\" routerLink=\"/folder/home\">previous</ion-icon>\r\n  </ion-toolbar>\r\n\r\n  \r\n</ion-header>\r\n\r\n<ion-content style=\"color: goldenrod;\">\r\n\r\n<ion-grid style=\"color: black;\" col=\"12\">\r\n\r\n   <ion-card col=\"12\" *ngFor= \"let a of addProp\" style=\"font-weight: bold;\">\r\n    <h1 style=\"color: black;\" >{{a.property_name}} </h1>\r\n    \r\n\r\n    <ion-label>\r\n       \r\n      PROPERTY OWNER: {{a.images}}\r\n     </ion-label>\r\n     <br>\r\n    \r\n\r\n\r\n\r\n    <br>\r\n    <ion-label>\r\n       \r\n     PROPERTY OWNER:{{a.title }} \r\n     <!-- property_owner -->\r\n    </ion-label>\r\n    <br>\r\n    <ion-label>\r\n    CITY: {{a.city}} \r\n    </ion-label>\r\n    <br>\r\n    <ion-label>\r\n      STREET ADDRESS: {{a.street_address}}\r\n    </ion-label>\r\n    <br>\r\n    <ion-label>\r\n      POSTAL CODE: {{a.postal_code}}\r\n    </ion-label>\r\n    <br>\r\n    <a routerLink=\"/login\">\r\n    <ion-button >\r\n      <ion-label>apply</ion-label>\r\n    </ion-button>\r\n</a>\r\n\r\n  </ion-card>\r\n</ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/soshanguve/soshanguve-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/soshanguve/soshanguve-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SoshanguvePageRoutingModule */

  /***/
  function srcAppSoshanguveSoshanguveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoshanguvePageRoutingModule", function () {
      return SoshanguvePageRoutingModule;
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


    var _soshanguve_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./soshanguve.page */
    "./src/app/soshanguve/soshanguve.page.ts");

    var routes = [{
      path: '',
      component: _soshanguve_page__WEBPACK_IMPORTED_MODULE_3__["SoshanguvePage"]
    }];

    var SoshanguvePageRoutingModule = function SoshanguvePageRoutingModule() {
      _classCallCheck(this, SoshanguvePageRoutingModule);
    };

    SoshanguvePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SoshanguvePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/soshanguve/soshanguve.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/soshanguve/soshanguve.module.ts ***!
    \*************************************************/

  /*! exports provided: SoshanguvePageModule */

  /***/
  function srcAppSoshanguveSoshanguveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoshanguvePageModule", function () {
      return SoshanguvePageModule;
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


    var _soshanguve_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./soshanguve-routing.module */
    "./src/app/soshanguve/soshanguve-routing.module.ts");
    /* harmony import */


    var _soshanguve_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./soshanguve.page */
    "./src/app/soshanguve/soshanguve.page.ts");

    var SoshanguvePageModule = function SoshanguvePageModule() {
      _classCallCheck(this, SoshanguvePageModule);
    };

    SoshanguvePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _soshanguve_routing_module__WEBPACK_IMPORTED_MODULE_5__["SoshanguvePageRoutingModule"]],
      declarations: [_soshanguve_page__WEBPACK_IMPORTED_MODULE_6__["SoshanguvePage"]]
    })], SoshanguvePageModule);
    /***/
  },

  /***/
  "./src/app/soshanguve/soshanguve.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/soshanguve/soshanguve.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSoshanguveSoshanguvePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  -webkit-text-size-adjust: solid;\n     -moz-text-size-adjust: solid;\n      -ms-text-size-adjust: solid;\n          text-size-adjust: solid;\n  width: 35px;\n  height: 35px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29zaGFuZ3V2ZS9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcc29zaGFuZ3V2ZVxcc29zaGFuZ3V2ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nvc2hhbmd1dmUvc29zaGFuZ3V2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtLQUFBLDRCQUFBO01BQUEsMkJBQUE7VUFBQSx1QkFBQTtFQUF5QixXQUFBO0VBQVksWUFBQTtFQUFjLFlBQUE7QUNJdkQiLCJmaWxlIjoic3JjL2FwcC9zb3NoYW5ndXZlL3Nvc2hhbmd1dmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICB0ZXh0LXNpemUtYWRqdXN0OiBzb2xpZDsgd2lkdGg6IDM1cHg7aGVpZ2h0OiAzNXB4OyBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxufSIsImlvbi1pY29uIHtcbiAgdGV4dC1zaXplLWFkanVzdDogc29saWQ7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/soshanguve/soshanguve.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/soshanguve/soshanguve.page.ts ***!
    \***********************************************/

  /*! exports provided: SoshanguvePage */

  /***/
  function srcAppSoshanguveSoshanguvePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoshanguvePage", function () {
      return SoshanguvePage;
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

    var SoshanguvePage =
    /*#__PURE__*/
    function () {
      function SoshanguvePage(_serviceService) {
        _classCallCheck(this, SoshanguvePage);

        this._serviceService = _serviceService;
        this.addProp = [];
        this.addimg = [];
      }

      _createClass(SoshanguvePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProperty();
          this.img();
        }
      }, {
        key: "getProperty",
        value: function getProperty() {
          var _this = this;

          return this._serviceService.getApartment().subscribe(function (apart) {
            _this.addProp = apart;
            console.log(_this.addProp);
          });
        }
      }, {
        key: "img",
        value: function img() {
          var _this2 = this;

          return this._serviceService.getApartment().subscribe(function (img) {
            _this2.addProp = img;
            console.log(_this2.addimg);
          });
        }
      }]);

      return SoshanguvePage;
    }();

    SoshanguvePage.ctorParameters = function () {
      return [{
        type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }];
    };

    SoshanguvePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-soshanguve',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./soshanguve.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/soshanguve/soshanguve.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./soshanguve.page.scss */
      "./src/app/soshanguve/soshanguve.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])], SoshanguvePage);
    /***/
  }
}]);
//# sourceMappingURL=soshanguve-soshanguve-module-es5.js.map