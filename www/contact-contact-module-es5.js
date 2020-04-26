function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button ></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"dark\" style=\"color: white;text-align: center;\" >Contact </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content style=\"text-align: center;text-decoration: solid;text-size-adjust: unset;\" align=\"center;\">\r\n  <br>Full Name\r\n  <ion-input type=\"text\" placeholder=\"e.g john Doe\" >\r\n  </ion-input >\r\n\r\n <ion-label>\r\n  Email\r\n </ion-label> \r\n    \r\n  <ion-input type=\"email\" placeholder=\"e.g user@mail.com\">\r\n  </ion-input>\r\n\r\n  Message\r\n  <ion-textarea type=\"text\" placeholder=\"start typing...\" > \r\n  </ion-textarea>\r\n\r\n  <ion-button style=\"text-align: center;\">\r\n    Send\r\n  </ion-button>\r\n\r\n  <ion-card style=\"text-align: left; text-decoration-color: black;\">\r\n   <h1 style=\"color: black;\">TUT Enterprise Holdings,building 23</h1>\r\n    23 Meiring Naude Rd,Scientia 627-jr<br>\r\n    Pretoria<br>\r\n    0184\r\n    <br><br>0121117860<br>applyfor2020@tutenterprise.co.za\r\n    <ion-icon name=\"Phone\"> 0121117860</ion-icon><br>\r\n    <ion-icon name=\"Email\">applyfor2020@tutenterprise.co.za</ion-icon> \r\n  </ion-card>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/contact/contact-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/contact/contact-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactPageRoutingModule */

  /***/
  function srcAppContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
      return ContactPageRoutingModule;
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


    var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var routes = [{
      path: '',
      component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }];

    var ContactPageRoutingModule = function ContactPageRoutingModule() {
      _classCallCheck(this, ContactPageRoutingModule);
    };

    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/contact/contact-routing.module.ts");
    /* harmony import */


    var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })], ContactPageModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  border-color: black;\n  width: 280px;\n  background: #204083;\n  font: inherit;\n  color: white;\n  box-shadow: goldenrod;\n  border: 0;\n  outline: 0;\n  padding: 14px 18px;\n  margin: 13px 8px;\n  align-self: center;\n  margin-left: 60px;\n  align-content: center;\n}\n\nion-textarea {\n  width: 280px;\n  height: 180px;\n  background: #204083;\n  margin-left: 60px;\n  color: white;\n  align-content: center;\n}\n\nion-card {\n  border-color: black;\n  border-width: 80px;\n  border-color: #204083;\n  height: 150px;\n  -webkit-text-decoration-color: white;\n          text-decoration-color: white;\n  background-origin: padding-box;\n}\n\nion-button {\n  width: 100px;\n}\n\nion-content {\n  --ion-background-color:chartreuse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0RKOztBRElBO0VBRUksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSw4QkFBQTtBQ0ZKOztBRE1BO0VBQ0ksWUFBQTtBQ0hKOztBREtBO0VBRUksaUNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XHJcblxyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAyODBweCA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA0MDgzO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGdvbGRlbnJvZDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBtYXJnaW46IDEzcHggOHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYXtcclxuXHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIwNDA4MztcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuXHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiMyMDQwODMgO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3g7XHJcbiAgICBcclxuXHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmNoYXJ0cmV1c2U7XHJcbn0iLCJpb24taW5wdXQge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMjgwcHg7XG4gIGJhY2tncm91bmQ6ICMyMDQwODM7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogZ29sZGVucm9kO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDE0cHggMThweDtcbiAgbWFyZ2luOiAxM3B4IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6ICMyMDQwODM7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1jb2xvcjogIzIwNDA4MztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPage =
    /*#__PURE__*/
    function () {
      function ContactPage() {
        _classCallCheck(this, ContactPage);
      }

      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactPage;
    }();

    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContactPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map