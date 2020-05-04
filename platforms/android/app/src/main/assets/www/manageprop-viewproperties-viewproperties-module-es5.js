function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manageprop-viewproperties-viewproperties-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/viewproperties/viewproperties.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/viewproperties/viewproperties.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagepropViewpropertiesViewpropertiesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" color=\"dark\">\r\n  <ion-header color=\"dark\" >\r\n    <ion-toolbar color=\"dark\">\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-card color=\"dark\" style=\"  background: linear-gradient(60deg, #00FF7F 50%, lightseagreen 50%);border-radius: 50%; margin-left: 70px; text-align:center\" > \r\n    hello50\r\n    <a routerLink = \"/landlord-dash\"><ion-button shape =\"round\" color=\"light\" style=\"margin-top: 45px;margin-left: 45px;\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></a>\r\n      \r\n  </ion-card>\r\n\r\n  <ion-content color=\"dark\">\r\n  \r\n    <ion-list  color=\"dark\" lines=\"none\" *ngFor=\"let pages of navigate\"  >\r\n     \r\n    <ion-menu-toggle auto-hide=\"true\" color=\"dark\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\" lines=\"none\" color=\"dark\"  >\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\" color=\"dark\" ></ion-router-outlet>\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\" style=\"color: rgb(6, 2, 73);\">\r\n      <ion-menu-button sytle=\"background-color:white\"></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n    \r\n      <li><a routerLink=\"/folder/Home\"><ion-icon name=\"log-out-outline\" style=\"font-size: 20px; background-color:rgb(6, 2, 73)\r\n      ; color: white ;\" >previous</ion-icon></a></li>\r\n      <li> <div class=\"border\">\r\n        <ion-input type=\"text\" placeholder=\"Search\">\r\n        <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon></ion-input>\r\n            </div>\r\n      </li>\r\n\r\n      <li><a routerLink=\"/help/helplord\">HELP</a></li>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n <ion-grid>\r\n\r\n\r\n  <ion-card style=\"margin-left:60px ;border-radius: 20px; height:50px ;background-color: white;color: rgb(6, 2, 73);\">\r\n   \r\n    <ion-label style=\"color: rgb(6, 2, 73) ;margin-left: 60px;margin-top:-30px;font-size:14px; text-align: left;\">\r\n     Dashboard\r\n    </ion-label>\r\n   </ion-card>\r\n <ion-card style=\"background-color: rgb(6, 2, 73);\r\n margin-left: 250px;margin-top: -60px;\r\n border-radius: 20px; height:50px ;\" >\r\n  \r\n  <ion-label style=\"color: black ;margin-left: 60px;margin-top:-30px;color:white;\r\n   font-size:14px;margin-left: 30px;\">\r\n   Properties\r\n  </ion-label>\r\n </ion-card>  \r\n   \r\n    <div class=\"card11\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm style=\"text-align: center;\"> \r\n        <ion-card>\r\n           <ion-toolbar>\r\n                <div slot=\"start\">\r\n                  <ion-title style=\"font-size: 18px; font-weight: bold;color: \r\n                  rgb(6, 2, 73) ;margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(6, 2, 73)solid\">Bed Statistics</ion-title>\r\n                </div >\r\n                <div style=\"color: rgb(6, 2, 73);margin-right: 10px;\" slot=\"end\" >\r\n                  <ion-button color=\"dark\" shape=\"round\"><ion-icon name=\"bed-outline\"></ion-icon> \r\n                  </ion-button>\r\n               </div>\r\n              </ion-toolbar>\r\n              <ion-card-content>\r\n                <canvas #doughnutCanvas></canvas>\r\n              </ion-card-content>\r\n              \r\n              <br><br><br><br>\r\n              <br>\r\n       </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-sm style=\"text-align: center;\"> \r\n          <ion-card>\r\n             <ion-toolbar>\r\n                  <div slot=\"start\">\r\n                    <ion-title style=\"font-size: 18px; font-weight: bold;color: \r\n                    rgb(6, 2, 73);margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(6, 2, 73)solid \">Issues</ion-title>\r\n                  </div >\r\n\r\n                  <div style=\"color: rgb(6, 2, 73);margin-right: 10px;\" slot=\"end\">\r\n                      <ion-button shape=\"round\" color=\"dark\">\r\n                        <ion-icon name=\"hammer-outline\"></ion-icon>\r\n                         1</ion-button>             \r\n                 </div>\r\n                </ion-toolbar>\r\n                <ion-card-content>\r\n                  <canvas #doughnutCanvas1></canvas>\r\n                </ion-card-content>\r\n                <br><br><br><br>\r\n                <br>\r\n         </ion-card>\r\n        </ion-col>\r\n   </ion-row>\r\n  </div>\r\n<br>\r\n  <h1 style=\"font-size: 20px; font-weight: bold;color: rgb(6, 2, 73);margin-top:-10px; \r\n  margin-left: 40px;border-left: 10px \trgb(6, 2, 73)solid \">Communique & Report</h1>\r\n  \r\n  <div class=\"card11\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm style=\"text-align: center;\"> \r\n        <ion-card>\r\n           <ion-toolbar>\r\n                <div slot=\"start\">\r\n                  <ion-title style=\"font-size: 18px; font-weight: bold;color: \r\n                  rgb(6, 2, 73);margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(6, 2, 73)solid \">Tenants Issues</ion-title>\r\n                </div >\r\n\r\n                <div style=\"color: rgb(6, 2, 73);margin-right: 10px;\" slot=\"end\">\r\n                  \r\n                    <ion-button shape=\"round\" color=\"dark\">\r\n                      <ion-icon name=\"notifications-outline\"></ion-icon> 0</ion-button>\r\n               </div>\r\n              </ion-toolbar>\r\n              <p style=\"font-size: 14px;color: black\">\r\n                No issues posted </p>\r\n              \r\n              <br><br><br><br>\r\n              <br>\r\n       </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-sm style=\"text-align: center;\"> \r\n          <ion-card>\r\n             <ion-toolbar>\r\n                  <div slot=\"start\">\r\n                    <ion-title style=\"font-size: 18px; font-weight: bold;color: \r\n                    rgb(6, 2, 73); margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(6, 2, 73)solid \">queries</ion-title>\r\n                  </div >\r\n\r\n                  <div style=\"color: rgb(6, 2, 73);margin-right: 10px;\" slot=\"end\">\r\n                      <ion-button shape=\"round\" color=\"dark\"><ion-icon name=\"notifications-outline\"></ion-icon> 0\r\n                      </ion-button>\r\n                 </div>\r\n                </ion-toolbar>\r\n                <p style=\"font-size: 14px;color: black\">\r\n                  No on going queries </p>\r\n                \r\n                <br><br><br><br>\r\n                <br>\r\n         </ion-card>\r\n        </ion-col>\r\n   </ion-row>\r\n  </div>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n  <!-- <ion-content color = \"dark\"> -->\r\n  <!-- <div class=\"mycard\">\r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n  \r\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n  \r\n    <div class=\"ion-padding\">\r\n     \r\n  \r\n      <ion-card color = \"light\">\r\n        <ion-card-header>\r\n          Head to Head comparisons\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <canvas #doughnutCanvas1></canvas>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  \r\n      \r\n    </div>\r\n  </div> -->\r\n   <!-- </ion-content> -->\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title align=\"center\">VIEW PROPERTIES</ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/manageprop\">previous</ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"background-image: url('assets/pics/landlord.jpg');\">\r\n    <br>\r\n\r\n   \r\n    <br>\r\n  \r\n\r\n    \r\n      <ul id=\"nav-mobile\" class=\"hide-on-med-and-down\">\r\n      <li><a routerLink=\"/landloard-app\"> <ion-button class = \"ion-text-center\" color=\"primary\" \r\n        (click)=\"addprop()\">ADD PROPERTIES</ion-button></a></li>\r\n      \r\n      <li><a routerLink=\"/viewproperties\"> <ion-button class = \"ion-text-center\" color=\"secondary\" \r\n        (click)=\"viewprop()\">VIEW PROPERTIES</ion-button></a></li>\r\n     \r\n      <li><a routerLink=\"/updateproperties\"> <ion-button class = \"ion-text-center\" color=\"warning\"\r\n        (click)=\"updateprop()\">UPDATE PROPERTIES</ion-button></a></li>\r\n        \r\n    </ul>\r\n<br>\r\n<h1 style=\"color: aliceblue; font-size: x-large;text-align: center;\"></h1>\r\n    <br>\r\n    <ion-card text-center padding >\r\n      <ion-label style=\"font-size: x-large;\"><li class=\"list-group-item\">\r\n        {{edit.title}}\r\n       <ion-button class=\"btn btn-xs  pull-right\" color = \"danger\"\r\n       (click)=\"actions.deleteprop( prop.id)\">\r\n         delete\r\n       </ion-button>\r\n       <ion-button class=\"btn btn-xs  pull-right\" color = \"warning\"\r\n       (click)=\"actions.editprop( prop.id)\">\r\n         Edit\r\n       </ion-button>\r\n      </li></ion-label>\r\n\r\n    \r\n        \r\n    </ion-card>\r\n\r\n<ion-card>\r\n \r\n</ion-card> \r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</div>\r\n</ion-content> -->\r\n";
    /***/
  },

  /***/
  "./src/app/manageprop/viewproperties/viewproperties-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/manageprop/viewproperties/viewproperties-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ViewpropertiesPageRoutingModule */

  /***/
  function srcAppManagepropViewpropertiesViewpropertiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpropertiesPageRoutingModule", function () {
      return ViewpropertiesPageRoutingModule;
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


    var _viewproperties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./viewproperties.page */
    "./src/app/manageprop/viewproperties/viewproperties.page.ts");

    var routes = [{
      path: '',
      component: _viewproperties_page__WEBPACK_IMPORTED_MODULE_3__["ViewpropertiesPage"]
    }];

    var ViewpropertiesPageRoutingModule = function ViewpropertiesPageRoutingModule() {
      _classCallCheck(this, ViewpropertiesPageRoutingModule);
    };

    ViewpropertiesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewpropertiesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/manageprop/viewproperties/viewproperties.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/manageprop/viewproperties/viewproperties.module.ts ***!
    \********************************************************************/

  /*! exports provided: ViewpropertiesPageModule */

  /***/
  function srcAppManagepropViewpropertiesViewpropertiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpropertiesPageModule", function () {
      return ViewpropertiesPageModule;
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


    var _viewproperties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./viewproperties-routing.module */
    "./src/app/manageprop/viewproperties/viewproperties-routing.module.ts");
    /* harmony import */


    var _viewproperties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./viewproperties.page */
    "./src/app/manageprop/viewproperties/viewproperties.page.ts");

    var ViewpropertiesPageModule = function ViewpropertiesPageModule() {
      _classCallCheck(this, ViewpropertiesPageModule);
    };

    ViewpropertiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viewproperties_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewpropertiesPageRoutingModule"]],
      declarations: [_viewproperties_page__WEBPACK_IMPORTED_MODULE_6__["ViewpropertiesPage"]]
    })], ViewpropertiesPageModule);
    /***/
  },

  /***/
  "./src/app/manageprop/viewproperties/viewproperties.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/manageprop/viewproperties/viewproperties.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagepropViewpropertiesViewpropertiesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin-top: 40px;\n  height: 110px;\n  width: 40%;\n}\n\n.card11 ion-card {\n  width: 350px;\n  height: 300px;\n}\n\nion-card {\n  border-radius: 10% 10%;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 100px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-weight: bold;\n}\n\nion-card {\n  border-radius: 5%;\n}\n\n.border {\n  color: black;\n}\n\n.mycard ion-card {\n  height: 400px;\n}\n\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-style: initial;\n  color: #070353;\n}\n\nion-label {\n  margin-left: 20px;\n}\n\nh1 {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcHJvcC92aWV3cHJvcGVydGllcy9DOlxcVXNlcnNcXG1hZCBwb3dlci1jIExhbmdhXFxEZXNrdG9wXFx0cmVzXFxSTVNVUERBVEUvc3JjXFxhcHBcXG1hbmFnZXByb3BcXHZpZXdwcm9wZXJ0aWVzXFx2aWV3cHJvcGVydGllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hbmFnZXByb3Avdmlld3Byb3BlcnRpZXMvdmlld3Byb3BlcnRpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREtNO0VBRUUsWUFBQTtFQUNBLGFBQUE7QUNIUjs7QURRSTtFQUNFLHNCQUFBO0FDTE47O0FEUUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRE9JO0VBQ0UsaUJBQUE7QUNKTjs7QURNRTtFQU1JLFlBQUE7QUNSTjs7QURhTTtFQUNJLGFBQUE7QUNWVjs7QURhSTtFQUVFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNYTjs7QURlSTtFQUNJLGlCQUFBO0FDWlI7O0FEY0k7RUFDSSxpQkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlcHJvcC92aWV3cHJvcGVydGllcy92aWV3cHJvcGVydGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OjExMHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICBcclxuICAgIH1cclxuICAgIC5jYXJkMTFcclxuICAgIHtcclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDM1MHB4OyBcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwJSAxMCUgXHJcbiAgfVxyXG4gIFxyXG4gIGxpe1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1JSBcclxuICB9XHJcbiAgLmJvcmRlclxyXG4gIHtcclxuICAgIC8vICAgYm9yZGVyLWJvdHRvbTogc29saWQgO1xyXG4gICAgLy8gICBib3JkZXItdG9wOiBzb2xpZCA7XHJcbiAgICAvLyAgIGJvcmRlci1sZWZ0OiBzb2xpZCA7XHJcbiAgICAvLyAgIGJvcmRlci1yaWdodDogc29saWQgO1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgICAgXHJcblxyXG4gIH1cclxuICAubXljYXJke1xyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICBhIHtcclxuICBcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICAgIGNvbG9yOnJnYig3LCAzLCA4Myk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNhcmQxMSBpb24tY2FyZCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMCUgMTAlO1xufVxuXG5saSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmJvcmRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm15Y2FyZCBpb24tY2FyZCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgY29sb3I6ICMwNzAzNTM7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/manageprop/viewproperties/viewproperties.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/manageprop/viewproperties/viewproperties.page.ts ***!
    \******************************************************************/

  /*! exports provided: ViewpropertiesPage */

  /***/
  function srcAppManagepropViewpropertiesViewpropertiesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewpropertiesPage", function () {
      return ViewpropertiesPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__); //import { type } from 'os';
    // import { async } from 'rxjs/internal/scheduler/async';
    // import { profile } from 'console';


    var ViewpropertiesPage =
    /*#__PURE__*/
    function () {
      function ViewpropertiesPage(menu, modalCtrl, navCtrl, http, _serviceService, platform, splashScreen, statusBar, alertCtrl, router) {
        _classCallCheck(this, ViewpropertiesPage);

        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this._serviceService = _serviceService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.momentjs = moment__WEBPACK_IMPORTED_MODULE_9__;
        this.edit = [];
      }

      _createClass(ViewpropertiesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.profile();
          this.initializeApp();
          this.sideMenu();
          this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
              labels: ['Male', 'Female'],
              datasets: [{
                label: ['71%', '21%'],
                data: [71, 29],
                backgroundColor: ['rgb(5, 238, 64)', 'rgb(3, 18, 83)'] //  ,
                //  title:['71%', '21%']
                //  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']

              }]
            }
          });
          this.issueChart = new chart_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](this.doughnutCanvas1.nativeElement, {
            type: 'doughnut',
            data: {
              labels: ['Resolved', 'In progress', 'Pending', 'Rejected'],
              datasets: [{
                label: '# of Votes',
                data: [0, 0, 100, 0],
                backgroundColor: ['rgb(5, 238, 64)', 'rgb(3, 18, 83)', 'rgb(146, 61, 243)', 'rgb(69, 200, 240)']
              }]
            }
          });
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
          this.navigate = [// {
          //   title : "Profile",
          //   url   : "/landlord-dash",
          //   icon :"person-outline"
          // },
          {
            title: "Overview",
            url: "/viewproperties",
            icon: "eye-outline"
          }, {
            title: "My Proparties",
            url: "/propertyinfo",
            icon: "business"
          }, {
            title: "Accreditation",
            url: "/landloard-app",
            icon: "clipboard"
          }];
        }
      }, {
        key: "profile",
        value: function profile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Profile Dialog',
                      message: 'Please complete your profile',
                      buttons: [{
                        text: 'Update',
                        role: 'update',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm update: blah');

                          _this2.router.navigate(['/landlord-dash']);
                        }
                      }, {
                        text: 'Later',
                        handler: function handler() {
                          console.log('Confirm later');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    _context.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    result = _context.sent;
                    console.log(result);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this3 = this;

          this._serviceService.lordprofile().subscribe(function (data) {
            _this3.edit = data;
          });
        }
      }]);

      return ViewpropertiesPage;
    }();

    ViewpropertiesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doughnutCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ViewpropertiesPage.prototype, "doughnutCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doughnutCanvas1', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ViewpropertiesPage.prototype, "doughnutCanvas1", void 0);
    ViewpropertiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewproperties',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewproperties.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/viewproperties/viewproperties.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewproperties.page.scss */
      "./src/app/manageprop/viewproperties/viewproperties.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ViewpropertiesPage);
    /***/
  }
}]);
//# sourceMappingURL=manageprop-viewproperties-viewproperties-module-es5.js.map