function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manageprop-manageprop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/manageprop.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/manageprop.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagepropManagepropPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" style=\"color: whitesmoke;\">\r\n        <ion-icon name=\"menu\" (click)=\"presentMenu()\"></ion-icon>\r\n    </ion-buttons> \r\n    <ion-title align=\"center\">Landlord Manage Properties</ion-title>\r\n     </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n   \r\n  \r\n\r\n    <ion-grid style=\"background-image: url('assets/pics/landlord.jpg');\" col=\"12\">\r\n\r\n      <ion-card   col=\"12\" *ngFor= \"let a of addProp\" style=\" background-color:rgb(27, 219, 245); color: black; opacity: 0.8;border-radius: 10px;\">\r\n      \r\n       \r\n        <br>\r\n        <ion-label>\r\n          PROPERTY NAME: {{a.username}}\r\n        </ion-label>\r\n   \r\n       <br>\r\n       <br>\r\n       <ion-label>\r\n        PROPERTY ADDRESS:{{a.phone}}\r\n       </ion-label>\r\n      \r\n       <br>\r\n       <br>\r\n       <ion-label>\r\n        PROPERTY ADMIN: {{a.name}}\r\n       </ion-label>\r\n       <br>\r\n       <br>\r\n       <a routerLink=\"/landloard-app\"><ion-button  (click)=\"add()\"><ion-icon name=\"add\">\r\n       </ion-icon></ion-button></a>\r\n       <a routerLink=\"/editprop\">\r\n       <ion-button color=\"success\" (click)=\"update()\">\r\n        <ion-icon name=\"create\"></ion-icon></ion-button></a>\r\n   \r\n\r\n       \r\n       <ion-button color=\"danger\" (click)=\"delete()\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n\r\n      \r\n\r\n      <!-- <ion-button  color=\"success\" (click)=\" accept()\">\r\n        <ion-label>Accept</ion-label>\r\n      </ion-button> -->\r\n\r\n\r\n      \r\n     </ion-card>\r\n  \r\n     <br>\r\n     <br>\r\n     <br>\r\n     <br>\r\n   </ion-grid>\r\n  \r\n  \r\n  \r\n  \r\n   \r\n      \r\n        \r\n      \r\n \r\n   \r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n    \r\n  \r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n</ion-content>\r\n<!-- <nav style=\"border-bottom: #08acea medium solid; border-top: #08acea medium solid;\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"nav-wrapper\">\r\n           <li><a id=\"new_bus_btn\">Register New Bus</a></li>\r\n      <li><a id=\"v_bus_duty_btn\">View Buses On Duty</a></li>\r\n      <li><a id=\"v_bus_btn\">View All Buses</a></li>\r\n  \r\n      </div>\r\n  </div>\r\n</nav> -->\r\n";
    /***/
  },

  /***/
  "./src/app/manageprop/manageprop-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/manageprop/manageprop-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ManagepropPageRoutingModule */

  /***/
  function srcAppManagepropManagepropRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagepropPageRoutingModule", function () {
      return ManagepropPageRoutingModule;
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


    var _manageprop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manageprop.page */
    "./src/app/manageprop/manageprop.page.ts");

    var routes = [{
      path: '',
      component: _manageprop_page__WEBPACK_IMPORTED_MODULE_3__["ManagepropPage"]
    }, {
      path: 'editprop',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editprop-editprop-module */
        "editprop-editprop-module").then(__webpack_require__.bind(null,
        /*! ./editprop/editprop.module */
        "./src/app/manageprop/editprop/editprop.module.ts")).then(function (m) {
          return m.EditpropPageModule;
        });
      }
    }];

    var ManagepropPageRoutingModule = function ManagepropPageRoutingModule() {
      _classCallCheck(this, ManagepropPageRoutingModule);
    };

    ManagepropPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManagepropPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/manageprop/manageprop.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/manageprop/manageprop.module.ts ***!
    \*************************************************/

  /*! exports provided: ManagepropPageModule */

  /***/
  function srcAppManagepropManagepropModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagepropPageModule", function () {
      return ManagepropPageModule;
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


    var _manageprop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manageprop-routing.module */
    "./src/app/manageprop/manageprop-routing.module.ts");
    /* harmony import */


    var _manageprop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manageprop.page */
    "./src/app/manageprop/manageprop.page.ts");

    var ManagepropPageModule = function ManagepropPageModule() {
      _classCallCheck(this, ManagepropPageModule);
    };

    ManagepropPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manageprop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagepropPageRoutingModule"]],
      declarations: [_manageprop_page__WEBPACK_IMPORTED_MODULE_6__["ManagepropPage"]]
    })], ManagepropPageModule);
    /***/
  },

  /***/
  "./src/app/manageprop/manageprop.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/manageprop/manageprop.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagepropManagepropPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  list-style: none;\n}\n\nul li {\n  display: inline-block;\n}\n\nion-icon {\n  zoom: 2;\n}\n\nion-toolbar {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-title {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcHJvcC9DOlxcVXNlcnNcXG1hZCBwb3dlci1jIExhbmdhXFxEZXNrdG9wXFx0cmVzXFxSTVNVUERBVEUvc3JjXFxhcHBcXG1hbmFnZXByb3BcXG1hbmFnZXByb3AucGFnZS5zY3NzIiwic3JjL2FwcC9tYW5hZ2Vwcm9wL21hbmFnZXByb3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUNBSjs7QURFQztFQUVFLHFCQUFBO0FDQUg7O0FERUM7RUFDQyxPQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBREFDO0VBQ0UsaUJBQUE7QUNHSCIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXByb3AvbWFuYWdlcHJvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bFxyXG57XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiB1bCBsaSBcclxuIHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gfVxyXG4gaW9uLWljb257XHJcbiAgem9vbTogMjtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcbiB9XHJcbiBpb24tdGl0bGV7XHJcbiAgIGNvbG9yOiB3aGl0ZXNtb2tlIDtcclxuIH0iLCJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24taWNvbiB7XG4gIHpvb206IDI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/manageprop/manageprop.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/manageprop/manageprop.page.ts ***!
    \***********************************************/

  /*! exports provided: ManagepropPage */

  /***/
  function srcAppManagepropManagepropPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagepropPage", function () {
      return ManagepropPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManagepropPage =
    /*#__PURE__*/
    function () {
      function ManagepropPage(alertCtrl, _serviceService, router, actionSheetCtrl, loadingCtrl) {
        _classCallCheck(this, ManagepropPage);

        this.alertCtrl = alertCtrl;
        this._serviceService = _serviceService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.addProp = [];
        this.addimg = [];
      }

      _createClass(ManagepropPage, [{
        key: "presentMenu",
        value: function presentMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Land-Lord Menu',
                      buttons: [{
                        text: 'Profile',
                        role: 'destrustctive',
                        icon: 'person-circle-outline',
                        handler: function handler() {
                          _this.router.navigateByUrl('landlord-dash');
                        }
                      }, {
                        text: 'Register Resident',
                        icon: 'add',
                        handler: function handler() {
                          _this.router.navigateByUrl('/landloard-app');
                        }
                      }, {
                        text: 'Manage Student',
                        icon: 'people',
                        handler: function handler() {
                          _this.router.navigateByUrl('managestud');
                        }
                      }, {
                        text: 'Manage Properties',
                        icon: 'business',
                        handler: function handler() {
                          _this.router.navigateByUrl('manageprop');
                        }
                      }, {
                        text: 'Edit Your Profile',
                        icon: 'person-add',
                        handler: function handler() {
                          _this.router.navigateByUrl('editlordprof');
                        }
                      }, {
                        text: 'Logout ',
                        icon: 'log-out',
                        handler: function handler() {
                          _this.router.navigateByUrl('/folder/folder');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.manageprop();
        }
      }, {
        key: "manageprop",
        value: function manageprop() {
          var _this2 = this;

          return this._serviceService.getAppliedstu().subscribe(function (apart) {
            _this2.addProp = apart;
            console.log(_this2.addProp);
            console.log(_this2.addProp.length);
            var number = _this2.addProp.length;
          });
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      message: 'Are you sure you want to delete this property?  ',
                      buttons: ['OK', 'cancel']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    _context2.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context2.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ManagepropPage;
    }();

    ManagepropPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    ManagepropPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manageprop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manageprop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/manageprop.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manageprop.page.scss */
      "./src/app/manageprop/manageprop.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], ManagepropPage);
    /***/
  }
}]);
//# sourceMappingURL=manageprop-manageprop-module-es5.js.map