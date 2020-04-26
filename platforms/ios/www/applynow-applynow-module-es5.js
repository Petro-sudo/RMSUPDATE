function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applynow-applynow-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplynowApplynowPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar    color=\"dark\"  >\r\n \r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n\r\n    <ion-title  align=\"center\" > \r\n    \r\n      Apply Now\r\n     \r\n    \r\n    </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/process\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n\r\n  <ion-grid style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n \r\n      \r\n    <ion-row>\r\n       <ion-col col=12> \r\n    \r\n<br>\r\n\r\n  <ion-item style=\"opacity: 0.8;\">\r\n    <ion-label position=\"floating\">ID Number:</ion-label>\r\n     <ion-input  [(ngModel)] = \"stuApply.id\"   name=\"id\"  type=\"Number\" required></ion-input>\r\n   </ion-item>\r\n   <br>\r\n   <ion-item style=\"opacity: 0.8;\">\r\n   <ion-label position=\"floating\">Student Number:</ion-label>\r\n   <ion-input  [(ngModel)] = \"stuApply.studno\"  FormControl=\"studno\" type=\"Number\" required></ion-input>\r\n </ion-item>\r\n<br>\r\n  \r\n <ion-item style=\"opacity: 0.8;\">\r\n\r\n<ion-label>\r\n  Upload Proof of registration & ID copy as one Pdf\r\n</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"opacity: 0.8;\" >\r\n    <ion-input  style=\" opacity: 0.8;\"  [(ngModel)] = \"stuApply.stuapplication\" type=\"file\" name=\"stuapplication\" accept=\".pdf\"  required >\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n\r\n    <ion-button type=\"submit\"    (click)=\" add()\">submit</ion-button>\r\n  \r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n \r\n</ion-col >\r\n</ion-row>\r\n\r\n</ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/applynow/applynow-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/applynow/applynow-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ApplynowPageRoutingModule */

  /***/
  function srcAppApplynowApplynowRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplynowPageRoutingModule", function () {
      return ApplynowPageRoutingModule;
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


    var _applynow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./applynow.page */
    "./src/app/applynow/applynow.page.ts");

    var routes = [{
      path: '',
      component: _applynow_page__WEBPACK_IMPORTED_MODULE_3__["ApplynowPage"]
    }];

    var ApplynowPageRoutingModule = function ApplynowPageRoutingModule() {
      _classCallCheck(this, ApplynowPageRoutingModule);
    };

    ApplynowPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ApplynowPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/applynow/applynow.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/applynow/applynow.module.ts ***!
    \*********************************************/

  /*! exports provided: ApplynowPageModule */

  /***/
  function srcAppApplynowApplynowModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplynowPageModule", function () {
      return ApplynowPageModule;
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


    var _applynow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./applynow-routing.module */
    "./src/app/applynow/applynow-routing.module.ts");
    /* harmony import */


    var _applynow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./applynow.page */
    "./src/app/applynow/applynow.page.ts");

    var ApplynowPageModule = function ApplynowPageModule() {
      _classCallCheck(this, ApplynowPageModule);
    };

    ApplynowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _applynow_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplynowPageRoutingModule"]],
      declarations: [_applynow_page__WEBPACK_IMPORTED_MODULE_6__["ApplynowPage"]]
    })], ApplynowPageModule);
    /***/
  },

  /***/
  "./src/app/applynow/applynow.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/applynow/applynow.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplynowApplynowPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHlub3cvQzpcXFVzZXJzXFxQZXRyb25lbGxhXFxEZXNrdG9wXFxSTVNVUERBVEUvc3JjXFxhcHBcXGFwcGx5bm93XFxhcHBseW5vdy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FwcGx5bm93L2FwcGx5bm93LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLDRCQUFBO0VBQThCLDRCQUFBO0FDQ25DIiwiZmlsZSI6InNyYy9hcHAvYXBwbHlub3cvYXBwbHlub3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/applynow/applynow.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/applynow/applynow.page.ts ***!
    \*******************************************/

  /*! exports provided: ApplynowPage */

  /***/
  function srcAppApplynowApplynowPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplynowPage", function () {
      return ApplynowPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ApplynowPage =
    /*#__PURE__*/
    function () {
      function ApplynowPage(alertCtrl, _serviceService) {
        _classCallCheck(this, ApplynowPage);

        this.alertCtrl = alertCtrl;
        this._serviceService = _serviceService;
        this.loading = false;
        this.stuApply = {
          id: " ",
          studno: " ",
          stuapplication: " "
        };
        this.addstu = [];
        this.studno = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      } // id=new FormControl;


      _createClass(ApplynowPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert, result, _alert, _result, _alert2, _result2;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.stuApply.id.length == 1 || this.stuApply.studno.length == 1)) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 3;
                    return this.alertCtrl.create({
                      message: ' please fill in all the fields ',
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                    _context.next = 8;
                    return alert.onDidDismiss();

                  case 8:
                    result = _context.sent;
                    console.log(result);
                    _context.next = 40;
                    break;

                  case 12:
                    if (!(this.stuApply.stuapplication.length < 2)) {
                      _context.next = 24;
                      break;
                    }

                    _context.next = 15;
                    return this.alertCtrl.create({
                      message: ' please  Upload Your Documents ',
                      buttons: ['OK']
                    });

                  case 15:
                    _alert = _context.sent;
                    _context.next = 18;
                    return _alert.present();

                  case 18:
                    _context.next = 20;
                    return _alert.onDidDismiss();

                  case 20:
                    _result = _context.sent;
                    console.log(_result);
                    _context.next = 40;
                    break;

                  case 24:
                    this._serviceService.poststu(this.stuApply).subscribe(function (data) {
                      return console.log(data);
                    });

                    console.log(this.stuApply.stuapplication.length);
                    console.log(this.stuApply.studno);
                    console.log(this.stuApply.id);
                    _context.next = 30;
                    return this.alertCtrl.create({
                      message: ' Application Sent successfully  ',
                      buttons: ['OK']
                    });

                  case 30:
                    _alert2 = _context.sent;
                    _context.next = 33;
                    return _alert2.present();

                  case 33:
                    _context.next = 35;
                    return _alert2.onDidDismiss();

                  case 35:
                    _result2 = _context.sent;
                    console.log(_result2);
                    this.stuApply.stuapplication = " ";
                    this.stuApply.studno = " ";
                    this.stuApply.id = " ";

                  case 40:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ApplynowPage;
    }();

    ApplynowPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ApplynowPage.prototype, "stuApply", void 0);
    ApplynowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-applynow',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./applynow.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/applynow/applynow.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./applynow.page.scss */
      "./src/app/applynow/applynow.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])], ApplynowPage);
    /***/
  }
}]);
//# sourceMappingURL=applynow-applynow-module-es5.js.map