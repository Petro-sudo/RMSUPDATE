(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sturegister-sturegister-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sturegister/sturegister.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sturegister/sturegister.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n<!-- <ion-card>\r\n  <img src=\"assets/pics/tut1.jpg\" width=\"1500px\" height=\"200px\" alt=\"\">\r\n</ion-card> -->\r\n\r\n <ion-content >\r\n  <ion-toolbar>\r\n    <div slot=\"start\" style=\"font-size: small; \">\r\n      <img src=\" assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\">\r\n     </div>\r\n    <ul class=\"sidebar-nav\" style=\"text-align: center;font-size: small\">\r\n      <li><a routerLink=\"/help/helpstud\">HELP</a></li>\r\n      <li><a routerLink=\"#\">FAQS</a></li>\r\n      <li><a routerLink=\"/folder/home\">HOME</a></li>\r\n    </ul>\r\n    <br>\r\n  </ion-toolbar>\r\n\r\n  <br><br> <br> <br>\r\n\r\n  <p style=\"color: white;\">Register to create an account</p>\r\n  <div class=\"container\">\r\n  <form novalidate\r\n      [formGroup]=\"myform\" >\r\n\r\n  \r\n\r\n\r\n\r\n  \r\n <!-- <fieldset formGroupName=\"name\">\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{\r\n        'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\r\n        'has-success': firstName.valid && (firstName.dirty || firstName.touched)\r\n      }\">\r\n      <ion-item>\r\n      <ion-label position=\"fixed\">First Name:</ion-label>\r\n    <br>\r\n      <ion-input type=\"text\"\r\n      \r\n             class=\"form-control\"\r\n             formControlName=\"firstName\"\r\n             required  [(ngModel)] = \"stuData.firstName\">\r\n            </ion-input>\r\n      <div class=\"form-control-feedback\"\r\n           *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\" color=\"warning\">\r\n        <p  style=\"color:red\" *ngIf=\"firstName.errors.required\" >First Name is required</p>\r\n      </div>\r\n\r\n      \r\n    </ion-item>\r\n\r\n\r\n\r\n\r\n      \r\n        <pre>Valid? {{ myform.controls.name.controls.firstName.valid }}</pre>\r\n        <pre>Dirty? {{ myform.controls.name.controls.firstName.dirty }}</pre>\r\n     \r\n    </div> -->\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"form-group\"\r\n         [ngClass]=\"{\r\n        'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\r\n        'has-success': lastName.valid && (lastName.dirty || lastName.touched)\r\n      }\">\r\n      <ion-item>\r\n      <ion-label position=\"fixed\">Last Name:</ion-label>\r\n      \r\n      <br>\r\n      <ion-input type=\"text\"\r\n      required  [(ngModel)] = \"stuData.lastName\"\r\n             class=\"form-control\"\r\n             formControlName=\"lastName\"\r\n             required>\r\n            </ion-input>\r\n      <div class=\"form-control-feedback\"\r\n           *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\r\n        <p style=\"color:red\" *ngIf=\"lastName.errors.required\">Last Name is required</p>\r\n      </div>\r\n    </ion-item>\r\n    </div>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Gender</ion-label>\r\n      <br>\r\n      <ion-input [(ngModel)] = \"stuData.gender\" type=\"gender\"\r\n       \r\n             \r\n             required>\r\n             </ion-input></ion-item>\r\n\r\n  </fieldset>\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': email.invalid && (email.dirty || email.touched),\r\n        'has-success': email.valid && (email.dirty || email.touched)\r\n   }\">\r\n   <ion-item>\r\n   <ion-label position=\"fixed\">Email:</ion-label>\r\n   <br>\r\n    \r\n    <ion-input type=\"email\"\r\n    required  [(ngModel)] = \"stuData.email\"\r\n           class=\"form-control\"\r\n           formControlName=\"email\"\r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"email.errors.required\">Email is required</p>\r\n      <p style=\"color:red\" *ngIf=\"password.errors.pattern\">email must contain at least the @ character</p>\r\n    </div>\r\n  </ion-item>\r\n\r\n    \r\n      <pre>Valid? {{ myform.controls.email.valid }}</pre>\r\n      <pre>Dirty? {{ myform.controls.email.dirty }}</pre>\r\n   \r\n\r\n  </div> -->\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': studno.invalid && (studno.dirty || studno.touched),\r\n        'has-success': studno.valid && (studno.dirty || studno.touched)\r\n   }\">\r\n   <ion-item>\r\n   <ion-label position=\"floating\"><ion-icon name=\"person\"></ion-icon> STUDENT NUMBER</ion-label>\r\n    <ion-input type=\"number\"\r\n    required  [(ngModel)] = \"stuData.studno\"\r\n           class=\"form-control\"\r\n           formControlName=\"studno\"\r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"studno.errors && (studno.dirty || studno.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"studno.errors.required\">Student Number is required</p>\r\n     \r\n    </div>\r\n  </ion-item>\r\n\r\n    <!--\r\n      <pre>Valid? {{ myform.controls.studno.valid }}</pre>\r\n      <pre>Dirty? {{ myform.controls.studno.dirty }}</pre>\r\n    -->\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': id_no.invalid && (id_no.dirty || id_no.touched),\r\n        'has-success': id_no.valid && (id_no.dirty || id_no.touched)\r\n   }\">\r\n   <ion-item>\r\n   <ion-label position=\"fixed\">ID Number:</ion-label>\r\n  \r\n    <br>\r\n    <ion-input type=\"number\"\r\n    required  [(ngModel)] = \"stuData.id_no\"\r\n           class=\"form-control\"\r\n           formControlName=\"id_no\"\r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"id_no.errors && (id_no.dirty || id_no.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"id_no.errors.required\">ID is required</p>\r\n     \r\n    </div>\r\n  </ion-item>\r\n\r\n    \r\n      <pre>Valid? {{ myform.controls.email.valid }}</pre>\r\n      <pre>Dirty? {{ myform.controls.email.dirty }}</pre>\r\n   \r\n\r\n  </div> -->\r\n  <!-- <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': cell_no.invalid && (cell_no.dirty || cell_no.touched),\r\n        'has-success': cell_no.valid && (cell_no.dirty || cell_no.touched)\r\n   }\">\r\n   <ion-label position=\"fixed\">cell Number:</ion-label>\r\n  \r\n    \r\n    <ion-input type=\"number\"\r\n    required  [(ngModel)] = \"stuData.cell_no\"\r\n           class=\"form-control\"\r\n           formControlName=\"cell_no\"\r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"cell_no.errors && (cell_no.dirty || cell_no.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"cell_no.errors.required\">cell number is required</p>\r\n    </div>\r\n \r\n\r\n   \r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"form-group\"\r\n  [ngClass]=\"{\r\n   'has-danger': password.invalid && (password.dirty || password.touched),\r\n   'has-success': password.valid && (password.dirty || password.touched)\r\n}\">\r\n\r\n<ion-label>Select Campus location</ion-label>\r\n  <ion-item>\r\n   \r\n    <ion-select placeholder=\"Select campus\"   class=\"form-control\"\r\n    formControlName=\"campus_loc\" type=\"text\"  \r\n    [(ngModel)] = \"stuData.campus_loc\"  required >\r\n      <ion-select-option value=\"ARCADIA CAMPUS\">ARCADIA CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"ARTS CAMPUS\">ARTS CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"EMALAHLENI CAMPUS\">EMALAHLENI CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"GA-RANKUWA CAMPUS\">GA-RANKUWA CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"MBOMBELA CAMPUS\">MBOMBELA CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"PRETORIA MAIN CAMPUS\">PRETORIA MAIN CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"POLOKWANE CAMPUS\">POLOKWANE CAMPUS</ion-select-option>\r\n      <ion-select-option value=\"SOSHAGUVE CAMPUS\">SOSHAGUVE CAMPUS</ion-select-option>\r\n\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  </div>\r\n -->\r\n\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': password.invalid && (password.dirty || password.touched),\r\n        'has-success': password.valid && (password.dirty || password.touched)\r\n   }\">\r\n   <ion-item>\r\n   <ion-label position=\"floating\"><ion-icon name=\"lock-closed\"></ion-icon> CREATE PASSWORD</ion-label>\r\n   \r\n    <ion-input   \r\n    required  [(ngModel)] = \"stuData.password\"\r\n    type=\"password\"\r\n           class=\"form-control\"\r\n           formControlName=\"password\"\r\n        \r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"password.errors.required\">Password is required</p>\r\n      <p  style=\"color:red\" *ngIf=\"password.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\r\n    </div>\r\n  </ion-item>\r\n\r\n</div>\r\n\r\n<div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': password.invalid && (password.dirty || password.touched),\r\n        'has-success': password.valid && (password.dirty || password.touched)\r\n   }\">\r\n   <ion-item>\r\n   <ion-label position=\"floating\"> <ion-icon name=\"lock-closed\"></ion-icon> CONFIRM PASSWORD</ion-label>\r\n   \r\n   \r\n    <ion-input required  [(ngModel)] = \"stuData.confirm\"\r\n    type=\"password\"\r\n    class=\"form-control\"\r\n           formControlName=\"password\"\r\n        \r\n           required>   \r\n   \r\n           </ion-input>\r\n   \r\n  </ion-item>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n  <div class=\"form-group\"\r\n       [ngClass]=\"{\r\n        'has-danger': passwordr.invalid && (passwordr.dirty || passwordr.touched),\r\n        'has-success': passwordr.valid && (passwordr.dirty || passwordr.touched)\r\n   }\">\r\n   <ion-item>\r\n    <ion-label position=\"fixed\">Re-type Password: </ion-label><br>\r\n    <ion-input type=\"passwordr\"\r\n           class=\"form-control\"\r\n           formControlName=\"passwordr\"\r\n           required>\r\n           </ion-input>\r\n    <div class=\"form-control-feedback\"\r\n         *ngIf=\"passwordr.errors && (passwordr.dirty || passwordr.touched)\">\r\n      <p style=\"color:red\" *ngIf=\"passwordr.errors.required\">Password is required</p>\r\n      <p style=\"color:red\" *ngIf=\"(passwordr.value != Password.value)\">Paswords do not macth</p>\r\n      <p  style=\"color:red\" *ngIf=\"passwordr.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\r\n    </div>\r\n  </ion-item>\r\n  </div>\r\n  -->\r\n  <!--   *ngIf=\"(passwordControl.value != rPasswordControl.value) && !rPasswordControl.errors?.required\"          -->\r\n  \r\n  <!-- <div class=\"form-group\">\r\n    <ion-item>\r\n      <ion-label for=\"image\">Insert Image</ion-label>\r\n    </ion-item>\r\n    <img width=\"100\" src=\"../../assets/pics/user1.jpg\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n   \r\n  <ion-item>\r\n    <ion-input type=\"file\" name=\"images\" ></ion-input>\r\n  </ion-item>\r\n  </div> -->\r\n\r\n  <!-- <ion-button   (click)=\" add()\" shape=\"round\" color=\"dark\" position=\"floating\">Register </ion-button>\r\n  <a routerLink=\"/login\"> <ion-button  shape=\"round\" color=\"dark\"  position=\"floating\">Sign In</ion-button> </a> -->\r\n \r\n  <!--\r\n    <\r\n      pre>{{ password.errors | json }}</pre>\r\n  -->\r\n<br>\r\n<p style=\"color: white;\">By signing up, you confirm that you've read\r\n   and accepted our <a href=\"https://tres-images-storage.s3-eu-west-1.amazonaws.com/Privacy+Policy+20200408.pdf\" style=\"color: rgb(8, 243, 106);;\">Terms of Service and Privacy Policy</a></p>\r\n<br>\r\n\r\n  <ion-button expand=\"block\" color=\"success\" (click)=\" add()\">\r\n    \r\n    SIGN UP\r\n  </ion-button>\r\n  <br>\r\n  <p style=\"color: white; text-align: right;\">Have an account? sign in <a routerLink=\"/login1\" style=\"color: rgb(8, 243, 106);;\">here</a></p>\r\n \r\n  </form>\r\n</div>\r\n</ion-content>\r\n\r\n \r\n\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n    \r\n");

/***/ }),

/***/ "./src/app/sturegister/sturegister-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/sturegister/sturegister-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SturegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SturegisterPageRoutingModule", function() { return SturegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sturegister_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sturegister.page */ "./src/app/sturegister/sturegister.page.ts");




const routes = [
    {
        path: '',
        component: _sturegister_page__WEBPACK_IMPORTED_MODULE_3__["SturegisterPage"]
    }
];
let SturegisterPageRoutingModule = class SturegisterPageRoutingModule {
};
SturegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SturegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/sturegister/sturegister.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sturegister/sturegister.module.ts ***!
  \***************************************************/
/*! exports provided: SturegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SturegisterPageModule", function() { return SturegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sturegister_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sturegister-routing.module */ "./src/app/sturegister/sturegister-routing.module.ts");
/* harmony import */ var _sturegister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sturegister.page */ "./src/app/sturegister/sturegister.page.ts");








let SturegisterPageModule = class SturegisterPageModule {
};
SturegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _sturegister_routing_module__WEBPACK_IMPORTED_MODULE_5__["SturegisterPageRoutingModule"]
        ],
        declarations: [_sturegister_page__WEBPACK_IMPORTED_MODULE_6__["SturegisterPage"]]
    })
], SturegisterPageModule);



/***/ }),

/***/ "./src/app/sturegister/sturegister.page.scss":
/*!***************************************************!*\
  !*** ./src/app/sturegister/sturegister.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  border: 0;\n  margin-left: -10px;\n}\n\nion-select-option {\n  border: solid black 1px;\n  border-radius: 10px;\n}\n\non-select {\n  border: solid black 1px;\n  border-radius: 10px;\n}\n\nion-content {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-item {\n  color: white;\n  text-align: left;\n  color: #08f36a;\n  border-bottom: solid 1px;\n}\n\nion-input {\n  color: white;\n}\n\nion-button {\n  color: black;\n}\n\nion-icon {\n  color: white;\n}\n\nh1 {\n  background-color: #08f36a;\n  color: #030120;\n  margin-right: 340px;\n  margin-left: 340px;\n}\n\nli {\n  float: right;\n  list-style: none;\n  text-align: center;\n  width: 100px;\n  height: 15px;\n  line-height: 10px;\n  color: aliceblue;\n}\n\na {\n  display: inline-block;\n  color: white;\n  padding: 8px 8px;\n  text-align: center;\n  font-style: initial;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\nimg {\n  text-align: left;\n  font-size: small;\n}\n\nul {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1cmVnaXN0ZXIvQzpcXFVzZXJzXFxQZXRyb25lbGxhXFxEZXNrdG9wXFxSTVNVUERBVEUvc3JjXFxhcHBcXHN0dXJlZ2lzdGVyXFxzdHVyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0dXJlZ2lzdGVyL3N0dXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBRUksb0NBQUE7QUNGSjs7QURNQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0hKOztBREtBO0VBRUksWUFBQTtBQ0hKOztBREtBO0VBRUEsWUFBQTtBQ0hBOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESDs7QURLRTtFQUVFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNISjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURTRTtFQUNFLGtCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9zdHVyZWdpc3Rlci9zdHVyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7ICBcclxufVxyXG5cclxuaW9uLXNlbGVjdC1vcHRpb24gXHJcbntcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxyXG59XHJcblxyXG5vbi1zZWxlY3Rcclxue1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgIFxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcclxufVxyXG5pb24taW5wdXRcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcblxyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDI0MywgMTA2KTtcclxuICAgIGNvbG9yOnJnYigzLCAxLCAzMikgO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxufVxyXG5saXtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgd2lkdGg6IDEwMHB4O1xyXG4gICBoZWlnaHQ6IDE1cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBhIHtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsOyBcclxuICAgfVxyXG4gIFxyXG4vLyAgIGE6aG92ZXIge1xyXG4gICAgXHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgfVxyXG4gIHVse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIiwiZmllbGRzZXQge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxub24tc2VsZWN0IHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwOGYzNmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmMzZhO1xuICBjb2xvcjogIzAzMDEyMDtcbiAgbWFyZ2luLXJpZ2h0OiAzNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDM0MHB4O1xufVxuXG5saSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpbml0aWFsO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxudWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/sturegister/sturegister.page.ts":
/*!*************************************************!*\
  !*** ./src/app/sturegister/sturegister.page.ts ***!
  \*************************************************/
/*! exports provided: SturegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SturegisterPage", function() { return SturegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SturegisterPage = class SturegisterPage {
    // name = new FormControl('');
    constructor(alertCtrl, _serviceService) {
        this.alertCtrl = alertCtrl;
        this._serviceService = _serviceService;
        this.stuData = { firstName: " ", lastName: " ", email: " ", password: " ", campus_loc: " ", studno: " ", id_no: " ", cell_no: " ", confirm: " " };
        this.addstu = [];
        this.campus_loc = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
        this.studno = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
        this.id_no = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
        this.cell_no = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
    }
    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.getstu();
    }
    getstu() {
        this._serviceService.postLandlord(this.addstu).subscribe((data) => {
            this.addstu = data;
            console.log(this.addstu);
        });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.myform.invalid) {
                const alert = yield this.alertCtrl.create({
                    header: 'Registration',
                    message: ' please fill in all the fields ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
            }
            else {
                this._serviceService.poststu(this.stuData).subscribe(data => console.log(data));
                console.log(this.stuData.firstName);
                console.log(this.stuData.lastName);
                console.log(this.stuData.email);
                console.log(this.stuData.password);
                console.log(this.stuData.campus_loc);
                console.log(this.stuData.studno);
                console.log(this.stuData.id_no);
                console.log(this.stuData.cell_no);
                console.log(this.stuData.confirm);
                const alert = yield this.alertCtrl.create({
                    header: 'Registration',
                    message: ' you have successfully registered ',
                    buttons: ['OK']
                });
                yield alert.present();
                const result = yield alert.onDidDismiss();
                console.log(result);
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]['/login'];
            }
        });
    }
    createFormControls() {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
        ]);
        //validate cell number
        /*  this.cell_no = new FormControl('', [
            Validators.required,
            Validators.minLength(13),
            Validators.pattern(" ")
          ]);
      
      */
        //"/^\+27[0-9]{9}$/"
    }
    createForm() {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            //code was here
            email: this.email,
            password: this.password,
            campus_loc: this.campus_loc,
            studno: this.studno,
            id_no: this.id_no,
            cell_no: this.cell_no
        });
    }
};
SturegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SturegisterPage.prototype, "stuData", void 0);
SturegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sturegister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sturegister.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sturegister/sturegister.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sturegister.page.scss */ "./src/app/sturegister/sturegister.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
], SturegisterPage);



/***/ })

}]);
//# sourceMappingURL=sturegister-sturegister-module-es2015.js.map