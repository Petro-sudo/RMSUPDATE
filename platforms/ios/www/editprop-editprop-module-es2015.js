(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprop-editprop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/editprop/editprop.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/editprop/editprop.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\" background-color: #00003f ;\">\r\n  <ion-toolbar style=\" background-color: #00003f ;\">\r\n      \r\n      <img src=\"assets/pics/logo.png\" width=\"80px\" height=\"40px\" alt=\"\" slot=\"start\">\r\n      <ion-icon style=\"font-size: 30px;color:whitesmoke\" slot=\"end\" name=\"arrow-undo\" \r\n      routerLink=\"/manageprop\">previous</ion-icon>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<h1 style=\"color:#00003f\">Choose a File And Upload the Samples of your Proparties</h1>\r\n<ion-content>\r\n  \r\n    <h1>KITCHEN</h1>\r\n\r\n    <div style=\"text-align: center;\">\r\n       <!-- <img src=\"assets/pics/logo.png\" width=\"\" height=\"\" alt=\"\"> -->\r\n       <img [src] =\"url1\" height=\"200\" width=\"400\">\r\n    </div>\r\n\r\n    <!-- \r\n       <ion-button color=\"secondary\" (click)=\"editprop()\" >POST</ion-button>\r\n    </div> -->\r\n\r\n <ion-toolbar >\r\n  <div slot=\"start\">\r\n    <ion-input type=\"file\" (change)= \"onFileSelected($event)\" style=\"color:whitesmoke\"></ion-input>\r\n  </div>\r\n\r\n    <div slot=\"end\">\r\n      <ion-button type = \"button\" (click)=\"onUpload()\">Upload</ion-button>\r\n    </div>\r\n  \r\n </ion-toolbar>\r\n  \r\n  \r\n<br>\r\n  \r\n    <h1>BED-ROOM</h1>\r\n\r\n    <div style=\"text-align: center;\">\r\n      <!-- <img src=\"assets/pics/logo.png\" width=\"\" height=\"\" alt=\"\"> -->\r\n      <img [src] =\"url2\" height=\"200\" width=\"400\">\r\n   </div>\r\n\r\n   <!-- \r\n      <ion-button color=\"secondary\" (click)=\"editprop()\" >POST</ion-button>\r\n   </div> -->\r\n   <ion-toolbar >\r\n <div slot=\"start\" >\r\n   <ion-input type=\"file\" (change)= \"onBed($event)\" style=\"color:whitesmoke\"></ion-input>\r\n </div>\r\n\r\n <div slot=\"end\">\r\n   <ion-button type = \"button\" (click)=\"onUpload()\">Upload</ion-button>\r\n</div>\r\n</ion-toolbar>\r\n  <br>\r\n\r\n  \r\n    <h1>BATH-ROOM</h1>\r\n    <div style=\"text-align: center;\">\r\n      <!-- <img src=\"assets/pics/logo.png\" width=\"\" height=\"\" alt=\"\"> -->\r\n      <img [src] =\"url3\" height=\"200\" width=\"400\">\r\n   </div>\r\n\r\n   <!-- \r\n      <ion-button color=\"secondary\" (click)=\"editprop()\" >POST</ion-button>\r\n   </div> -->\r\n <ion-toolbar >\r\n <div slot=\"start\">\r\n  <ion-input type=\"file\" (change)= \"onBath($event)\" style=\"color:whitesmoke\"></ion-input>\r\n </div>\r\n  <div slot=\"end\">\r\n   <ion-button type = \"button\" (click)=\"onUpload()\">Upload</ion-button>\r\n</div>\r\n</ion-toolbar>\r\n  <br>\r\n    <h1>STUDY-ROOM</h1>\r\n    <div style=\"text-align: center;\">\r\n      <!-- <img src=\"assets/pics/logo.png\" width=\"\" height=\"\" alt=\"\"> -->\r\n      <img [src] =\"url4\" height=\"200\" width=\"400\">\r\n   </div>\r\n\r\n   <!-- \r\n      <ion-button color=\"secondary\" (click)=\"editprop()\" >POST</ion-button>\r\n   </div> -->\r\n   <ion-toolbar >\r\n <div slot=\"start\">\r\n  <ion-input type=\"file\" (change)= \"onStudy($event)\" style=\"color:whitesmoke\"></ion-input>\r\n </div>\r\n <div slot=\"end\">\r\n   <ion-button type = \"button\" (click)=\"onUpload()\">Upload</ion-button>\r\n </div>\r\n\r\n   </ion-toolbar>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/manageprop/editprop/editprop-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/manageprop/editprop/editprop-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EditpropPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropPageRoutingModule", function() { return EditpropPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editprop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprop.page */ "./src/app/manageprop/editprop/editprop.page.ts");




const routes = [
    {
        path: '',
        component: _editprop_page__WEBPACK_IMPORTED_MODULE_3__["EditpropPage"]
    }
];
let EditpropPageRoutingModule = class EditpropPageRoutingModule {
};
EditpropPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditpropPageRoutingModule);



/***/ }),

/***/ "./src/app/manageprop/editprop/editprop.module.ts":
/*!********************************************************!*\
  !*** ./src/app/manageprop/editprop/editprop.module.ts ***!
  \********************************************************/
/*! exports provided: EditpropPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropPageModule", function() { return EditpropPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _editprop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editprop-routing.module */ "./src/app/manageprop/editprop/editprop-routing.module.ts");
/* harmony import */ var _editprop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprop.page */ "./src/app/manageprop/editprop/editprop.page.ts");







let EditpropPageModule = class EditpropPageModule {
};
EditpropPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editprop_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditpropPageRoutingModule"]
        ],
        declarations: [_editprop_page__WEBPACK_IMPORTED_MODULE_6__["EditpropPage"]]
    })
], EditpropPageModule);



/***/ }),

/***/ "./src/app/manageprop/editprop/editprop.page.scss":
/*!********************************************************!*\
  !*** ./src/app/manageprop/editprop/editprop.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nh1 {\n  font-size: 16px;\n  text-align: center;\n  color: whitesmoke;\n}\n\nion-content {\n  --ion-background-color:rgb(3, 1, 32);\n}\n\nion-card {\n  background-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcHJvcC9lZGl0cHJvcC9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcbWFuYWdlcHJvcFxcZWRpdHByb3BcXGVkaXRwcm9wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFuYWdlcHJvcC9lZGl0cHJvcC9lZGl0cHJvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBRENHO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFUDs7QURDRztFQUNDLG9DQUFBO0FDRUo7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlcHJvcC9lZGl0cHJvcC9lZGl0cHJvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDMsIDEsIDMyKTtcclxuICAgfVxyXG4gICBoMXtcclxuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGNvbG9yOndoaXRlc21va2UgO1xyXG4gICB9IFxyXG4gICBcclxuICAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XHJcbiAgIFxyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4gIiwiaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDMsIDEsIDMyKTtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/manageprop/editprop/editprop.page.ts":
/*!******************************************************!*\
  !*** ./src/app/manageprop/editprop/editprop.page.ts ***!
  \******************************************************/
/*! exports provided: EditpropPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropPage", function() { return EditpropPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditpropPage = class EditpropPage {
    constructor(http) {
        this.http = http;
        this.selectedFile = null;
        this.url1 = "/assets/pics/kit.jpg";
        this.url2 = "/assets/pics/bed.jpg";
        this.url3 = "/assets/pics/bath.jpg";
        this.url4 = "/assets/pics/study.jpg";
    }
    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('https://jsonplaceholder.typicode.com/posts', fd).subscribe(res => {
            console.log(res);
        });
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url1 = event.target.result;
            };
        }
        //  this.selectedFile =  <File>event.target.files[0];
    }
    onBed(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url2 = event.target.result;
            };
        }
        //  this.selectedFile =  <File>event.target.files[0];
    }
    onBath(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url3 = event.target.result;
            };
        }
        //  this.selectedFile =  <File>event.target.files[0];
    }
    onStudy(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url4 = event.target.result;
            };
        }
        //  this.selectedFile =  <File>event.target.files[0];
    }
};
EditpropPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditpropPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprop/editprop/editprop.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprop.page.scss */ "./src/app/manageprop/editprop/editprop.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EditpropPage);



/***/ })

}]);
//# sourceMappingURL=editprop-editprop-module-es2015.js.map