function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propertyinfo-propertyinfo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/propertyinfo/propertyinfo.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/propertyinfo/propertyinfo.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPropertyinfoPropertyinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" color=\"dark\">\r\n  <ion-header color=\"dark\" >\r\n    <ion-toolbar color=\"dark\">\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-card color=\"dark\" style=\"  background: linear-gradient(60deg, #00FF7F 50%, lightseagreen 50%);border-radius: 50%; margin-left: 70px; text-align:center\" > \r\n    hello50\r\n  </ion-card>\r\n\r\n  <ion-content color=\"dark\">\r\n  \r\n    <ion-list  color=\"dark\" lines=\"none\" *ngFor=\"let pages of navigate\"  >\r\n     \r\n    <ion-menu-toggle auto-hide=\"true\" color=\"dark\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\" lines=\"none\" color=\"dark\"  >\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\" color=\"dark\" ></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar >\r\n  \r\n      <ion-buttons slot=\"start\" color=\"dark\">\r\n      <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-label routerLink=\"/help/helplord\" slot=\"end\">\r\n      \r\n      HELP\r\n      </ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-card style=\"margin-left:80px ; width:220px ;border-radius: 20px; height:50px ;background-color: white;color: rgb(6, 2, 73);\">\r\n   \r\n    <ion-label style=\"color:black ; ;margin-left: 60px;margin-top:-30px;font-size:14px; text-align: left;\">\r\n     Dashboard\r\n    </ion-label>\r\n   </ion-card>\r\n <ion-card style=\"background-color: rgb(6, 2, 73);\r\n margin-left: 280px;margin-top: -60px;\r\n border-radius: 20px; height:50px ; width:220px ; \" >\r\n  \r\n  <ion-label style=\"margin-left: 60px;margin-top:-30px;color:white;\r\n   font-size:14px;margin-left: 30px;width:50px ;\">\r\n   Overview\r\n  </ion-label>\r\n </ion-card> \r\n\r\n\r\n  <ion-grid>\r\n<ion-row>\r\n<ion-col col=6>\r\n  \r\n  <h1 style=\"border-left:10px solid rgb(6, 2, 73);\">Properties</h1>\r\n<ion-card routerLink=\"/properties\" >\r\n  <img style=\"border-radius: 10px;\" src=\"assets/pics/build1.jpg\" alt=\"\" >\r\n  <h1 style=\"margin-left: 250px; margin-top: -250px;color:black ;\"> TUTEH Residence</h1>\r\n  <h3 style=\"margin-left: 220px; color:black\">statistics</h3>\r\n <ion-label style=\"margin-left: 220px; color:black\">Occupied beds    7 of 7</ion-label>\r\n <ion-label style=\"margin-left: 220px; color:black\"> Vacant beds      0</ion-label>\r\n <ion-label style=\"margin-left: 220px; color:black\">Applications       0</ion-label>\r\n </ion-card>\r\n</ion-col>\r\n\r\n\r\n\r\n</ion-row>\r\n\r\n  </ion-grid>\r\n  </ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/propertyinfo/propertyinfo-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/propertyinfo/propertyinfo-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PropertyinfoPageRoutingModule */

  /***/
  function srcAppPropertyinfoPropertyinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyinfoPageRoutingModule", function () {
      return PropertyinfoPageRoutingModule;
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


    var _propertyinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./propertyinfo.page */
    "./src/app/propertyinfo/propertyinfo.page.ts");

    var routes = [{
      path: '',
      component: _propertyinfo_page__WEBPACK_IMPORTED_MODULE_3__["PropertyinfoPage"]
    }];

    var PropertyinfoPageRoutingModule = function PropertyinfoPageRoutingModule() {
      _classCallCheck(this, PropertyinfoPageRoutingModule);
    };

    PropertyinfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PropertyinfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/propertyinfo/propertyinfo.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/propertyinfo/propertyinfo.module.ts ***!
    \*****************************************************/

  /*! exports provided: PropertyinfoPageModule */

  /***/
  function srcAppPropertyinfoPropertyinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyinfoPageModule", function () {
      return PropertyinfoPageModule;
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


    var _propertyinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./propertyinfo-routing.module */
    "./src/app/propertyinfo/propertyinfo-routing.module.ts");
    /* harmony import */


    var _propertyinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./propertyinfo.page */
    "./src/app/propertyinfo/propertyinfo.page.ts");

    var PropertyinfoPageModule = function PropertyinfoPageModule() {
      _classCallCheck(this, PropertyinfoPageModule);
    };

    PropertyinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _propertyinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropertyinfoPageRoutingModule"]],
      declarations: [_propertyinfo_page__WEBPACK_IMPORTED_MODULE_6__["PropertyinfoPage"]]
    })], PropertyinfoPageModule);
    /***/
  },

  /***/
  "./src/app/propertyinfo/propertyinfo.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/propertyinfo/propertyinfo.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPropertyinfoPropertyinfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5aW5mby9wcm9wZXJ0eWluZm8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/propertyinfo/propertyinfo.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/propertyinfo/propertyinfo.page.ts ***!
    \***************************************************/

  /*! exports provided: PropertyinfoPage */

  /***/
  function srcAppPropertyinfoPropertyinfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyinfoPage", function () {
      return PropertyinfoPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PropertyinfoPage =
    /*#__PURE__*/
    function () {
      function PropertyinfoPage(platform, splashScreen, statusBar, alertCtrl, router) {
        _classCallCheck(this, PropertyinfoPage);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.router = router;
      }

      _createClass(PropertyinfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeApp();
          this.sideMenu();
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "sideMenu",
        value: function sideMenu() {
          this.navigate = [{
            title: "Profile",
            url: "/landlord-dash",
            icon: "person-outline"
          }, {
            title: "Overview",
            url: "/viewproperties",
            icon: "eye-outline"
          }, {
            title: "My Proparties",
            url: "/propertyinfo",
            icon: "business"
          }, {
            title: "Accreditation",
            url: "#",
            icon: "add"
          }];
        }
      }]);

      return PropertyinfoPage;
    }();

    PropertyinfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PropertyinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-propertyinfo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./propertyinfo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/propertyinfo/propertyinfo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./propertyinfo.page.scss */
      "./src/app/propertyinfo/propertyinfo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], PropertyinfoPage);
    /***/
  }
}]);
//# sourceMappingURL=propertyinfo-propertyinfo-module-es5.js.map