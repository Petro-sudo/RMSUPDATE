(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studstatus-studstatus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" color=\"dark\">\r\n  <ion-header color=\"dark\" >\r\n    <ion-toolbar color=\"dark\">\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-card color=\"dark\" style=\"  background: linear-gradient(60deg, #00FF7F 50%, lightseagreen 50%);border-radius: 50%; \r\n  margin-left: 70px; text-align:center; margin-top: 40px;height:110px;width: 40%;\" > \r\n    hello50\r\n  </ion-card>\r\n\r\n  <ion-content color=\"dark\">\r\n  \r\n    <ion-list  color=\"dark\" lines=\"none\" *ngFor=\"let pages of navigate\"  >\r\n     \r\n    <ion-menu-toggle auto-hide=\"true\" color=\"dark\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\" lines=\"none\" color=\"dark\"  >\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\" color=\"dark\" ></ion-router-outlet>\r\n\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\" style=\"color: rgb(6, 2, 73);\">\r\n      <ion-menu-button sytle=\"background-color:white\"></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n    <ul class=\"sidebar-nav\" style=\" font-size: small\">\r\n      <li><a routerLink=\"/folder/Home\"><ion-icon name=\"log-out-outline\" style=\"font-size: 20px; background-color:rgb(6, 2, 73)\r\n      ; color: white ;\" >previous</ion-icon></a></li>\r\n      <li><a routerLink=\"/help/helpstud\">HELP</a></li>\r\n    </ul>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n <ion-grid>\r\n\r\n\r\n  <ion-card style=\"margin-left:60px ;border-radius: 20px; height:50px ;background-color: white;color: rgb(6, 2, 73);\">\r\n   \r\n    <ion-label style=\"color: rgb(6, 2, 73) ;margin-left: 60px;margin-top:-30px;font-size:14px; text-align: left;\">\r\n     Dashboard\r\n    </ion-label>\r\n   </ion-card>\r\n <ion-card style=\"background-color: rgb(6, 2, 73);\r\n margin-left: 250px;margin-top: -60px;\r\n border-radius: 20px; height:50px ;\" >\r\n  \r\n  <ion-label style=\"color: black ;margin-left: 60px;margin-top:-30px;color:white; font-size:14px;\">\r\n   My Room\r\n  </ion-label>\r\n </ion-card>\r\n    \r\n  \r\n    <h1 style=\"font-size: 18px; font-weight: bold;color: rgb(6, 2, 73);margin-left: 20px; \r\n    margin-top:-10px; margin-left: 40px;border-left: 10px \trgb(83, 218, 83) solid;\">My Room</h1>\r\n  \r\n    <!-- <ion-button ><ion-icon name=\"heart-outline\"></ion-icon>n</ion-button> \r\n    \r\n    love\r\n    <ion-icon name=\"heart-outline\"></ion-icon> <div class=\"\">\r\n  \r\n      sad\r\n      <ion-icon name=\"heart-outline\"></ion-icon>\r\n  \r\n      happy\r\n      <ion-icon name=\"happy-outline\"></ion-icon>\r\n  \r\n      delete x\r\n      \r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </div>-->\r\n  \r\n    \r\n  \r\n  \r\n   \r\n    \r\n   \r\n  \r\n    <ion-row>\r\n        <ion-col size=\"12\" size-sm>\r\n          <ion-card>\r\n            <ion-slide  class=\"mySlides\"  style=\"background-image:url(assets/pics/sl.jpg) ;background-size: cover;\">\r\n                   <!-- <a routerLink=\"/login1\"> -->\r\n             <ion-toolbar>\r\n               <div slot=\"start\" class=\"bstyle\">\r\n                  <ion-button  color=\"primary\" shape=\"round\" (click)= \"popOver($event)\">\r\n                     <ion-icon name=\"heart\" color=\"light\"></ion-icon>Rate\r\n                  </ion-button>\r\n                 </div>\r\n              </ion-toolbar>\r\n\r\n                    <!-- </a> -->\r\n      \r\n                        <br><br><br><br>\r\n                           <br><br><br><br>\r\n                                   <br>  <br>\r\n                                     \r\n                                     <br><br>\r\n             </ion-slide>\r\n          </ion-card> \r\n       </ion-col>\r\n\r\n      <ion-col size=\"12\" size-sm style=\"text-align: center;\"> \r\n          <ion-card>\r\n            <h1 style=\"font-size: 14px; font-weight: bold;color: black; \">TUTEH Residence</h1>\r\n               <ion-toolbar>\r\n                  <div slot=\"start\">\r\n                     <p style=\"font-size: 14px; font-weight: bold;color: black; margin-left: 20px;\">\r\n                      Contact Person: Aaron </p>\r\n                  </div >\r\n\r\n                  <div style=\"color: rgb(6, 2, 73);\">\r\n                    <ul class=\"sidebar-nav\" style=\" font-size: small\">\r\n                      <li><ion-button color=\"light\"><ion-icon name=\"mail\" color=\"tertiary\" \r\n                       ></ion-icon></ion-button></li>\r\n                      <li><ion-button color=\"light\"><ion-icon name=\"call\" \r\n                          ></ion-icon></ion-button></li>\r\n                    </ul>\r\n                 </div>\r\n                 \r\n                </ion-toolbar>\r\n<br>\r\n                <ion-button color=\"dark\" expand=\"block\" shape=\"round\">\r\n                    <ion-icon name=\"chevron-forward-outline\"color=\"success\" style=\"margin-right: 40px;\"></ion-icon>\r\n                    I would like to move to a different residence\r\n                </ion-button>\r\n\r\n               <ion-button color=\"dark\" expand=\"block\" shape=\"round\" >\r\n                 <ion-icon slot=\"start\" name=\"chevron-forward-outline\" color=\"success\" style=\"margin-right: 50px;\"></ion-icon>\r\n                \r\n                   I would like to transfer to a different room\r\n                </ion-button>\r\n\r\n              <ion-button color=\"dark\" expand=\"block\" shape=\"round\">\r\n                \r\n                  <ion-icon name=\"chevron-forward-outline\" color=\"success\" style=\"margin-right: 60px;\"></ion-icon>\r\n                \r\n                  I would like to reserve my current room</ion-button>\r\n\r\n                  <br>\r\n                  \r\n         </ion-card>\r\n        </ion-col>\r\n   </ion-row>\r\n  \r\n    \r\n    \r\n  </ion-grid>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"background-color: red;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"dark\" style=\"color: white;\" align=\"center\">\r\n       <h1>\r\n        RESIDENCE ADMISSION STATUS\r\n     </h1 >\r\n    </ion-title>\r\n    <ion-icon style=\"font-size: 30px;\" slot=\"end\" name=\"arrow-undo\" routerLink=\"/stud-profile\">previous</ion-icon>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"background-image: url('assets/pics/student.jpg');\">\r\n\r\n\r\n\r\n \r\n \r\n  \r\n  <ion-card  style=\"background-color: lightgray; text-align:center; opacity: 0.8;color: black;\" >\r\n    <p>Student Number:{{result.id}}</p>\r\n    <p>Surname Name:{{result.id}}</p>\r\n  \r\n  </ion-card>\r\n\r\n<br>\r\n\r\n\r\n<br>\r\n  <ion-card  style=\"background-color: lightgray; text-align:center; opacity: 0.8;\" >\r\n    \r\n    <form  >\r\n      <ion-item >\r\n       <ion-label >\r\n        STATUS:{{result.id}}\r\n       </ion-label>\r\n      </ion-item>\r\n     <br>\r\n      \r\n     \r\n     \r\n     <ion-item><ion-label >\r\n      YEAR:{{result.id}}\r\n     </ion-label></ion-item>\r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n      RESIDENT PERIOD:{{result.id}}\r\n     </ion-label></ion-item>\r\n      <br>\r\n     \r\n     \r\n     <ion-item><ion-label >\r\n      RESIDENT ADDRESS:{{result.id}}\r\n     </ion-label></ion-item>\r\n     <br>\r\n     <ion-item><ion-label >\r\n       ROOM NUMBER:{{result.id}}\r\n     </ion-label></ion-item>\r\n     \r\n      \r\n     \r\n     <br>\r\n     <ion-item><ion-label >\r\n       ROOM TYPE:{{result.id}}\r\n     </ion-label>\r\n     </ion-item>\r\n     \r\n     \r\n    \r\n     \r\n     \r\n     \r\n     </form>\r\n  </ion-card>\r\n\r\n<br><br>\r\n\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<ion-footer  class=\"ion-footer\">\r\n  <ion-toolbar color=\"dark\" >\r\n    <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n</ion-content>\r\n\r\n\r\n -->\r\n");

/***/ }),

/***/ "./src/app/studstatus/studstatus-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/studstatus/studstatus-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StudstatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPageRoutingModule", function() { return StudstatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _studstatus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studstatus.page */ "./src/app/studstatus/studstatus.page.ts");




const routes = [
    {
        path: '',
        component: _studstatus_page__WEBPACK_IMPORTED_MODULE_3__["StudstatusPage"]
    }
];
let StudstatusPageRoutingModule = class StudstatusPageRoutingModule {
};
StudstatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudstatusPageRoutingModule);



/***/ }),

/***/ "./src/app/studstatus/studstatus.module.ts":
/*!*************************************************!*\
  !*** ./src/app/studstatus/studstatus.module.ts ***!
  \*************************************************/
/*! exports provided: StudstatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPageModule", function() { return StudstatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _studstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studstatus-routing.module */ "./src/app/studstatus/studstatus-routing.module.ts");
/* harmony import */ var _studstatus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studstatus.page */ "./src/app/studstatus/studstatus.page.ts");







let StudstatusPageModule = class StudstatusPageModule {
};
StudstatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _studstatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudstatusPageRoutingModule"]
        ],
        declarations: [_studstatus_page__WEBPACK_IMPORTED_MODULE_6__["StudstatusPage"]]
    })
], StudstatusPageModule);



/***/ }),

/***/ "./src/app/studstatus/studstatus.page.scss":
/*!*************************************************!*\
  !*** ./src/app/studstatus/studstatus.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:transparent;\n}\n\n.cards {\n  margin-right: 200px;\n  margin-left: 0px;\n  color: black;\n  background-color: lightgray;\n}\n\n.ion-text-center {\n  text-align: right;\n}\n\n.ion-label {\n  color: black;\n  background-color: grey;\n  margin-right: 100;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 70px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-weight: bold;\n}\n\na {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  padding: 8px 8px;\n  font-style: initial;\n  text-align: center;\n  color: #060249;\n}\n\nion-button {\n  font-size: 12px;\n  text-align: center;\n  text-transform: none;\n}\n\n.data {\n  margin-left: 200;\n}\n\n.bstyle {\n  margin-top: 0px;\n}\n\nion-card {\n  border-radius: 10% 10%;\n}\n\n.card1 {\n  margin-right: 100;\n  border-radius: 5% 5%/5% 5%;\n}\n\n.card2 {\n  margin-right: 100;\n  border-radius: 5% 5%/5% 5%;\n}\n\n#back {\n  float: right;\n  zoom: 2;\n}\n\n#add {\n  zoom: 4;\n  margin-top: 20px;\n  margin-left: 40%;\n}\n\n#upload {\n  zoom: 2;\n  margin-left: 50%;\n}\n\nion-label {\n  margin-top: 10px;\n}\n\n#names {\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: 20px;\n}\n\n#res {\n  height: 100px;\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  width: auto;\n  text-align: right;\n}\n\n#back {\n  color: black;\n  zoom: 2;\n}\n\n#edit {\n  float: right;\n}\n\n#doc {\n  margin-left: 20%;\n}\n\nstrong {\n  font-weight: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHN0YXR1cy9DOlxcVXNlcnNcXG1hZCBwb3dlci1jIExhbmdhXFxEZXNrdG9wXFx0cmVzXFxSTVNVUERBVEUvc3JjXFxhcHBcXHN0dWRzdGF0dXNcXHN0dWRzdGF0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9zdHVkc3RhdHVzL3N0dWRzdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0NBQUE7QUNBSjs7QURFQTtFQUdJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURLQTtFQUVJLGlCQUFBO0FDSEo7O0FES0E7RUFFSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURPRTtFQUVFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUU7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0xOOztBRFFJO0VBQ0ksZ0JBQUE7QUNMUjs7QURRSTtFQUNBLGVBQUE7QUNMSjs7QURPQTtFQUNJLHNCQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FDSko7O0FEUUk7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FDTFI7O0FEVUk7RUFDSSxZQUFBO0VBQ0EsT0FBQTtBQ1BSOztBRFNJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURRSTtFQUVJLE9BQUE7RUFDQSxnQkFBQTtBQ05SOztBRFNJO0VBQ0ksZ0JBQUE7QUNOUjs7QURVSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDUFI7O0FEV0k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1JSOztBRFlJO0VBQ0ksWUFBQTtFQUNBLE9BQUE7QUNUUjs7QURhSTtFQUNJLFlBQUE7QUNWUjs7QURhSTtFQUNJLGdCQUFBO0FDVlI7O0FEYUk7RUFDSSxtQkFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHN0YXR1cy9zdHVkc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNhcmRzXHJcbntcclxuICAgLy8gbWFyZ2luLWxlZnQ6MHB4IDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xyXG5cclxuICAgXHJcbn1cclxuLmlvbi10ZXh0LWNlbnRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaW9uLWxhYmVsXHJcbntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMDtcclxufVxyXG5saXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICBcclxuICBcclxuICB9XHJcbiBcclxuICBhIHtcclxuXHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOnJnYig2LCAyLCA3Myk7XHJcblxyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmRhdGF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMDtcclxuICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIC5ic3R5bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbmlvbi1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlIDEwJSBcclxufVxyXG5cclxuLmNhcmQxe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JSA1JSAvNSUgNSU7XHJcbn1cclxuICAgIFxyXG5cclxuICAgIC5jYXJkMntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1JSA1JSAvNSUgNSU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAjYmFja3tcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgem9vbToyO1xyXG4gICAgfVxyXG4gICAgI2FkZHtcclxuICAgICAgICB6b29tOjQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgfVxyXG4gICAgI3VwbG9hZHtcclxuICAgICAgICBcclxuICAgICAgICB6b29tOjI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICNuYW1lc3tcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICNyZXN7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAjYmFja3tcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgem9vbToyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICNlZGl0e1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjZG9je1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwJSA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0cm9uZ3tcclxuICAgICAgICBmb250LXdlaWdodDptZWRpdW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICBcclxuICAgICIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuLmNhcmRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWFyZ2luLXJpZ2h0OiAxMDA7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzA2MDI0OTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmRhdGEge1xuICBtYXJnaW4tbGVmdDogMjAwO1xufVxuXG4uYnN0eWxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwJSAxMCU7XG59XG5cbi5jYXJkMSB7XG4gIG1hcmdpbi1yaWdodDogMTAwO1xuICBib3JkZXItcmFkaXVzOiA1JSA1JS81JSA1JTtcbn1cblxuLmNhcmQyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUlIDUlLzUlIDUlO1xufVxuXG4jYmFjayB7XG4gIGZsb2F0OiByaWdodDtcbiAgem9vbTogMjtcbn1cblxuI2FkZCB7XG4gIHpvb206IDQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG59XG5cbiN1cGxvYWQge1xuICB6b29tOiAyO1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jbmFtZXMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiNyZXMge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jYmFjayB7XG4gIGNvbG9yOiBibGFjaztcbiAgem9vbTogMjtcbn1cblxuI2VkaXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNkb2Mge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogbWVkaXVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/studstatus/studstatus.page.ts":
/*!***********************************************!*\
  !*** ./src/app/studstatus/studstatus.page.ts ***!
  \***********************************************/
/*! exports provided: StudstatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudstatusPage", function() { return StudstatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _popover_poprate_poprate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/poprate/poprate.page */ "./src/app/popover/poprate/poprate.page.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");








let StudstatusPage = class StudstatusPage {
    constructor(navCtrl, http, popoverController, _serviceService, platform, splashScreen, statusBar) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.popoverController = popoverController;
        this._serviceService = _serviceService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.result = [];
        this.value = 0;
    }
    ngOnInit() {
        this.getData();
        this.initializeApp();
        this.sideMenu();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Profile",
                    url: "/stud-profile",
                    icon: "person-outline"
                },
                {
                    title: "Overview",
                    url: "/resproof",
                    icon: "eye-outline"
                },
                {
                    title: "My rooms",
                    url: "/studstatus",
                    icon: "bed-outline"
                },
                {
                    title: "Issues",
                    url: "/stud-app",
                    icon: "add"
                },
            ];
    }
    getData() {
        this._serviceService.status().subscribe(data => {
            this.result = data;
        });
    }
    //pop
    popOver(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const poprate = yield this.popoverController.create({
                component: _popover_poprate_poprate_page__WEBPACK_IMPORTED_MODULE_6__["PopratePage"],
                componentProps: {
                    custom_id: this.value
                },
            });
            poprate.present();
        });
    }
};
StudstatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
StudstatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-studstatus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studstatus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/studstatus/studstatus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studstatus.page.scss */ "./src/app/studstatus/studstatus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
], StudstatusPage);



/***/ })

}]);
//# sourceMappingURL=studstatus-studstatus-module-es2015.js.map