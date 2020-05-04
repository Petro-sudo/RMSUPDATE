function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stud-profile-stud-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudProfileStudProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" color=\"dark\">\r\n  <ion-header color=\"dark\" >\r\n    <ion-toolbar color=\"dark\">\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-card color=\"dark\" style=\"  background: linear-gradient(60deg, #00FF7F 50%, lightseagreen 50%);border-radius: 50%; margin-left: 70px; text-align:center\" > \r\n    hello50\r\n  </ion-card>\r\n\r\n  <ion-content color=\"dark\">\r\n  \r\n    <ion-list  color=\"dark\" lines=\"none\" *ngFor=\"let pages of navigate\"  >\r\n     \r\n    <ion-menu-toggle auto-hide=\"true\" color=\"dark\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\" lines=\"none\" color=\"dark\"  >\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\" color=\"dark\" ></ion-router-outlet>\r\n\r\n<ion-header color=\"dark\">\r\n  <ion-toolbar color=\"dark\">\r\n  \r\n      <ion-buttons slot=\"start\" color=\"dark\">\r\n      <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      \r\n  </ion-toolbar>\r\n</ion-header>\r\n      \r\n<ion-content style=\"background-image: url('assets/pics/student.jpg'); ; padding-top: -200px;\" >\r\n\r\n\r\n\r\n  <ion-card style=\"margin-left:60px ;border-radius: 20px; height:50px ;background-color: white;color: rgb(6, 2, 73);\">\r\n   \r\n    <ion-label style=\"color: rgb(6, 2, 73) ;margin-left: 60px;margin-top:-30px;font-size:14px; text-align: left;\">\r\n    Profile\r\n    </ion-label>\r\n   </ion-card>\r\n  <ion-card style=\"background-color: rgb(6, 2, 73);\r\n  margin-left: 250px;margin-top: -60px;\r\n  border-radius: 20px; height:50px ;\" >\r\n  \r\n  <ion-label style=\"color: black ;margin-left: 60px;margin-top:-30px;color:white; font-size:14px\">\r\n  Update\r\n  </ion-label>\r\n  </ion-card>\r\n  \r\n  <ion-label style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;font-size: 30px;color: rgb(4, 4, 78); font-weight: bold;\"> Update Profile</ion-label>\r\n  \r\n  <br>\r\n  <br>\r\n  <ion-card style=\"width: 500px;height: 400px;\">\r\n  <form action=\"\">\r\n    <ion-label style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;font-size: 30px;color: rgb(4, 4, 78);font-weight: bold;\"> Personal Details</ion-label>\r\n  <br>\r\n    <ion-input style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Student Number\"></ion-input>\r\n  <br>\r\n  <ion-input style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Last Name\"></ion-input>\r\n  <br>\r\n  <ion-select style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Select gender\">\r\n    <ion-select-option value=\"FEMALE\">FEMALE</ion-select-option>\r\n    <ion-select-option value=\"MALE\">MALE</ion-select-option>\r\n  </ion-select>\r\n  <br>\r\n  \r\n  \r\n  <ion-label style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;font-size: 30px;color: rgb(4, 4, 78);font-weight: bold;\"> Disability Details</ion-label>\r\n  <br>\r\n  \r\n  <ion-toggle checked=\"false\"size=\"\">\r\n   \r\n  </ion-toggle>\r\n  <ion-label> Do you have disability?</ion-label>\r\n  <br>\r\n  \r\n  \r\n  </form>\r\n  \r\n  </ion-card>\r\n  <br>\r\n  <ion-card  style=\"width: 500px;height: 200px;\">\r\n   \r\n    <ion-item >\r\n     \r\n     <ion-label>\r\n      Contact Details\r\n     </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>\r\n        Medical Details\r\n       </ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label>\r\n        Course Details\r\n       </ion-label>\r\n    </ion-item>\r\n  \r\n  </ion-card>\r\n  \r\n  <br>\r\n  \r\n  <ion-label style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;font-size: 30px;color: rgb(4, 4, 78);font-weight: bold;\"> Update Profile</ion-label>\r\n  <br>\r\n  \r\n  \r\n  \r\n  \r\n  <ion-card  style=\"width: 500px;height: 200px;\">\r\n   \r\n    <ion-item >\r\n     \r\n     <ion-label>\r\n      Personal Details\r\n     </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>\r\n        Contact Details\r\n       </ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label>\r\n        Medical Details\r\n       </ion-label>\r\n    </ion-item>\r\n  \r\n  </ion-card>\r\n  <br>\r\n  <ion-label style=\"margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;font-size: 30px;color: rgb(4, 4, 78);font-weight: bold;\"> Course Details</ion-label>\r\n  <br>\r\n  <ion-card  style=\"width: 500px;height: 400px;\">\r\n  \r\n    <ion-select style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Campus of study\">\r\n      <ion-select-option value=\"FEMALE\">Soshanguve south</ion-select-option>\r\n      <ion-select-option value=\"MALE\">Arcadia</ion-select-option>\r\n      <ion-select-option value=\"MALE\">Main Camp</ion-select-option>\r\n    </ion-select>\r\n    <br>\r\n    <ion-select style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Select your course\">\r\n      <ion-select-option value=\"FEMALE\">Information Technology</ion-select-option>\r\n      <ion-select-option value=\"MALE\">Electrical engineering</ion-select-option>\r\n      <ion-select-option value=\"MALE\">Bio-Tech</ion-select-option>\r\n    </ion-select>\r\n    <br>\r\n    <ion-select style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Select your sponsor\">\r\n      <ion-select-option value=\"FEMALE\">NSFAS</ion-select-option>\r\n      <ion-select-option value=\"MALE\">Other bursaries</ion-select-option>\r\n     \r\n    </ion-select>\r\n  \r\n  \r\n  \r\n    <br>\r\n    <ion-select style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Select your faculty\">\r\n      <ion-select-option value=\"ICT\">ICT</ion-select-option>\r\n      <ion-select-option value=\"Science\">Science</ion-select-option>\r\n     \r\n    </ion-select>\r\n    <br>\r\n    <ion-input style=\"border:2px grey solid ;\" position=\"floating\"type=\"text\" placeholder=\"Year of adimission\"></ion-input>\r\n  \r\n    <br>\r\n  \r\n    <ion-button outline color=\"danger\">Previous</ion-button>\r\n    <ion-button outline color=\"primary\">Finish</ion-button>\r\n  </ion-card>\r\n  </ion-content>\r\n \r\n\r\n\r\n \r\n<!--   \r\n \r\n  \r\n\r\n    <ion-grid style=\"background-image: url('assets/pics/student.jpg');  background-repeat: no-repeat; background-attachment: fixed;\">\r\n     \r\n      \r\n    <ion-row>\r\n       <ion-col col=6> \r\n<form style=\" border-right: 10px solid black;\">\r\n\r\n  <ion-icon style=\"margin-left: 30px; zoom: 7;\"  name=\"person\"></ion-icon>\r\n\r\n<ion-item> <h1 style=\"margin-left: 50px; font-weight: bold; color: black\">PERSONAL INFORMATION</h1></ion-item> \r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"fixed\">Name </ion-label><br/>\r\n\r\n      <ion-label  class=\"ion-padding\" id=\"names\"></ion-label>  \r\n    </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"fixed\">Surname </ion-label><br/>\r\n      <ion-label  class=\"ion-padding\" id=\"names\"> </ion-label>   </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">ID </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\">  </ion-label>  </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">Campus </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\"> </ion-label>    </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"fixed\">Cell </ion-label><br/>\r\n          <ion-label  class=\"ion-padding\" id=\"names\">  </ion-label>   </ion-item>\r\n\r\n      \r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"fixed\">Email </ion-label><br/>\r\n        <ion-label  class=\"ion-padding\" id=\"names\">   </ion-label>  </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"fixed\">Residence </ion-label><br/>\r\n          <ion-label   class=\"ion-padding\" id=\"res\"></ion-label>        \r\n        </ion-item>\r\n        <br><br><br>\r\n\r\n       <br>\r\n       <br>\r\n       <br>\r\n\r\n   \r\n      </form>\r\n</ion-col>\r\n\r\n\r\n\r\n<ion-col  col=6> \r\n <br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<a routerLink=\"/studapply\">\r\n  <ion-card align=\"center\" style=\"border-radius: 20px;  height: 150px;\">\r\n   <ion-icon style=\"zoom: 3;\" name=\"book\"></ion-icon>\r\n   <h2>Apply for Accomodation</h2>\r\n </ion-card>\r\n</a>\r\n\r\n  <a routerLink=\"/resproof\"><ion-card align=\"center\"\r\n     style=\"border-radius: 20px; height: 150px;\">\r\n    <ion-icon style=\"zoom: 3;\" name=\"home\"></ion-icon>\r\n    <h2>Residence Report</h2>\r\n  </ion-card>\r\n </a>\r\n\r\n\r\n\r\n\r\n\r\n<a routerLink=\"/studstatus\">\r\n\r\n  <ion-card align=\"center\" style=\"border-radius: 20px;  height: 150px; \">\r\n  <ion-icon style=\"zoom: 3;\" name=\"eye\"></ion-icon>\r\n  <h2>Residence Status</h2>\r\n</ion-card></a>\r\n\r\n\r\n</ion-col>\r\n</ion-row>\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-grid>  -->\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/stud-profile/stud-profile-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/stud-profile/stud-profile-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: StudProfilePageRoutingModule */

  /***/
  function srcAppStudProfileStudProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudProfilePageRoutingModule", function () {
      return StudProfilePageRoutingModule;
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


    var _stud_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stud-profile.page */
    "./src/app/stud-profile/stud-profile.page.ts");

    var routes = [{
      path: '',
      component: _stud_profile_page__WEBPACK_IMPORTED_MODULE_3__["StudProfilePage"]
    }];

    var StudProfilePageRoutingModule = function StudProfilePageRoutingModule() {
      _classCallCheck(this, StudProfilePageRoutingModule);
    };

    StudProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/stud-profile/stud-profile.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/stud-profile/stud-profile.module.ts ***!
    \*****************************************************/

  /*! exports provided: StudProfilePageModule */

  /***/
  function srcAppStudProfileStudProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudProfilePageModule", function () {
      return StudProfilePageModule;
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


    var _stud_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stud-profile-routing.module */
    "./src/app/stud-profile/stud-profile-routing.module.ts");
    /* harmony import */


    var _stud_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stud-profile.page */
    "./src/app/stud-profile/stud-profile.page.ts");

    var StudProfilePageModule = function StudProfilePageModule() {
      _classCallCheck(this, StudProfilePageModule);
    };

    StudProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stud_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudProfilePageRoutingModule"]],
      declarations: [_stud_profile_page__WEBPACK_IMPORTED_MODULE_6__["StudProfilePage"]]
    })], StudProfilePageModule);
    /***/
  },

  /***/
  "./src/app/stud-profile/stud-profile.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/stud-profile/stud-profile.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudProfileStudProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin-top: 40px;\n  height: 110px;\n  width: 40%;\n}\n\n#back {\n  float: right;\n  zoom: 2;\n}\n\n#add {\n  zoom: 4;\n  margin-top: 20px;\n  margin-left: 40%;\n}\n\n#upload {\n  zoom: 2;\n  margin-left: 50%;\n}\n\nion-label {\n  margin-top: 10px;\n}\n\n#names {\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: 20px;\n}\n\n#res {\n  height: 100px;\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: auto;\n  text-align: right;\n}\n\n#back {\n  color: black;\n  zoom: 2;\n}\n\n#edit {\n  float: right;\n}\n\n#doc {\n  margin-left: 20%;\n}\n\nstrong {\n  font-weight: medium;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZC1wcm9maWxlL0M6XFxVc2Vyc1xcbWFkIHBvd2VyLWMgTGFuZ2FcXERlc2t0b3BcXHRyZXNcXFJNU1VQREFURS9zcmNcXGFwcFxcc3R1ZC1wcm9maWxlXFxzdHVkLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9zdHVkLXByb2ZpbGUvc3R1ZC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBRUEsYUFBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0FDREo7O0FER0E7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUksT0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRElBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNESjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRko7O0FEYUE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtBQ1ZKOztBRGNBO0VBQ0ksWUFBQTtBQ1hKOztBRGNBO0VBQ0ksZ0JBQUE7QUNYSjs7QURjQTtFQUNJLG1CQUFBO0FDWEo7O0FEZ0NBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDN0JKIiwiZmlsZSI6InNyYy9hcHAvc3R1ZC1wcm9maWxlL3N0dWQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OjExMHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICBcclxuICAgIH1cclxuLy9pY29uc1xyXG4jYmFja3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHpvb206MjtcclxufVxyXG4jYWRke1xyXG4gICAgem9vbTo0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuI3VwbG9hZHtcclxuICAgIFxyXG4gICAgem9vbToyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4jbmFtZXN7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLy9pb24gaXB1dFxyXG4jcmVze1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIFxyXG59XHJcbi8vIGlvbi1pdGVte1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgb3BhY2l0eTogMC44O1xyXG4gICBcclxuLy8gfVxyXG4vL2xpbmtzXHJcbiNiYWNre1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgem9vbToyO1xyXG59XHJcblxyXG4vL2VkaXQgYnV0dG9uXHJcbiNlZGl0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuLy9pb24taXRlbVxyXG4jZG9je1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlIDtcclxufVxyXG5cclxuc3Ryb25ne1xyXG4gICAgZm9udC13ZWlnaHQ6bWVkaXVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi8vIGlvbi1jYXJkOmhvdmVyXHJcbi8vIHtcclxuXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDYsIDI1MiwgMTM4KTtcclxuLy8gICAgIHdpZHRoOjE4MHB4O1xyXG4vLyAgICAgaGVpZ2h0OjE4MHB4O1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBpb24tY2FyZHtcclxuLy8gICAgIGNvbG9yOmJsYWNrO1xyXG4vLyAgICAgb3BhY2l0eTogMC44O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cywgaGVpZ2h0IDAuNXM7XHJcbi8vIH1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuI2JhY2sge1xuICBmbG9hdDogcmlnaHQ7XG4gIHpvb206IDI7XG59XG5cbiNhZGQge1xuICB6b29tOiA0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuXG4jdXBsb2FkIHtcbiAgem9vbTogMjtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI25hbWVzIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jcmVzIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2JhY2sge1xuICBjb2xvcjogYmxhY2s7XG4gIHpvb206IDI7XG59XG5cbiNlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZG9jIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/stud-profile/stud-profile.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/stud-profile/stud-profile.page.ts ***!
    \***************************************************/

  /*! exports provided: StudProfilePage */

  /***/
  function srcAppStudProfileStudProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudProfilePage", function () {
      return StudProfilePage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudProfilePage =
    /*#__PURE__*/
    function () {
      function StudProfilePage(
      /*public navCtrl: NavController,*/
      http, platform, splashScreen, statusBar, alertCtrl, router) {
        _classCallCheck(this, StudProfilePage);

        this.http = http;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.result = [];
      }

      _createClass(StudProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.initializeApp();
          this.sideMenu(); // this.profile();
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
            url: "/stud-profile",
            icon: "person-outline"
          }, {
            title: "Overview",
            url: "/resproof",
            icon: "eye-outline"
          }, {
            title: "My rooms",
            url: "/studstatus",
            icon: "bed-outline"
          }, {
            title: "Issues",
            url: "/stud-app",
            icon: "add"
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

                          _this2.router.navigate(['/profile']);
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
          var url = 'http://168.172.185.106:5000/getstud/40';
          this.data = this.http.get(url); //this.data.subscribe(data =>{
          //this.result=data;

          console.log("clicked"); //});
        }
      }]);

      return StudProfilePage;
    }();

    StudProfilePage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    StudProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stud-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stud-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stud-profile/stud-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stud-profile.page.scss */
      "./src/app/stud-profile/stud-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], StudProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=stud-profile-stud-profile-module-es5.js.map