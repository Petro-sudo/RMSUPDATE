(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landlord-dash-landlord-dash-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-dash/landlord-dash.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-dash/landlord-dash.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header style=\"background-color: black;\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\" color = \"success\">\r\n       <ion-icon name=\"menu\" (click)=\"presentMenu()\"></ion-icon>\r\n    </ion-buttons> \r\n  <ion-title color=\"dark\" style=\"color: white; font-size: xx-large; \" align=\"center\" >WELCOME LANDLORD</ion-title>\r\n  \r\n  \r\n</ion-toolbar>\r\n</ion-header>\r\n \r\n -->\r\n\r\n\r\n\r\n\r\n\r\n <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n  <ion-header>\r\n    <ion-toolbar >\r\n      \r\n    </ion-toolbar >\r\n  </ion-header >\r\n  <ion-content>\r\n    <ion-list *ngFor=\"let pages of navigate\">\r\n    <ion-menu-toggle auto-hide=\"true\">\r\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\r\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n             {{pages.title}} \r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content1\"></ion-router-outlet>\r\n\r\n<ion-header style=\" background-color: #00003f ;\">\r\n  <ion-toolbar >\r\n      <ion-buttons slot=\"start\" style=\"color: white;\">\r\n      <ion-menu-button sytle=\"background-color:white\"></ion-menu-button>\r\n      </ion-buttons>\r\n     \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n \r\n <ion-content >\r\n  \r\n  <div  style=\"background-image: url('assets/pics/landlord.jpg');\"> \r\n\r\n    <br>\r\n   <section style = \"text-align: center; color:white; font-size: medium;\">\r\n   \r\n    \r\n    <div class = \"center\">\r\n    \r\n    <ion-icon style=\"text-align: center; zoom: 7;\"  name=\"person\"></ion-icon>\r\n  </div>\r\n   \r\n  <h2>Mr {{result.name}}</h2>\r\n    \r\n\r\n   </section>\r\n    \r\n   <ion-grid >\r\n     \r\n    <div class=\"card\">\r\n  \r\n  <br>\r\n    \r\n      \r\n      <form  align=\"center\" >\r\n        <ion-item style=\"background-color: transparent;\">\r\n         <ion-label >\r\n           Fullnames:{{result.name}}\r\n         </ion-label>\r\n        </ion-item>\r\n  \r\n        <br>\r\n       <ion-item><ion-label >\r\n        Surname :{{result.name}}\r\n       </ion-label></ion-item>\r\n        <br>\r\n       \r\n       <ion-item><ion-label >\r\n         Identity Number:{{result.phone}}\r\n       </ion-label></ion-item>\r\n       <br>\r\n       <ion-item><ion-label >\r\n         E-mail Address:{{result.email}}\r\n       </ion-label></ion-item>\r\n       \r\n        \r\n       \r\n       <br>\r\n       <ion-item><ion-label >\r\n         Cell Number:{{result.phone}}\r\n       </ion-label>\r\n       </ion-item>\r\n       \r\n       \r\n       <br>\r\n       <ion-item><ion-label >\r\n         Number of properties:{{result.id}}\r\n       </ion-label></ion-item>\r\n       \r\n       \r\n       \r\n       </form>\r\n    \r\n  </div>\r\n <!-- <ion-row>\r\n       <ion-col col=6>\r\n        \r\n        <a routerLink=\"/landloard-app\">\r\n        <ion-card align=\"center\" text-center padding color=\"light\" \r\n        style=\"border-radius: 20px; margin-left: 0px;\">\r\n          <h2>Register Residence</h2>\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n         </ion-card>\r\n        </a>\r\n       </ion-col>\r\n     \r\n \r\n\r\n   \r\n       <ion-col col=6>\r\n        <a routerLink=\"/managestud\">\r\n          <ion-card align=\"center\" text-center padding color=\"light\" style=\"border-radius: 20px;\">\r\n           \r\n            <h2>Manage Students </h2>\r\n    \r\n\r\n            <ion-icon name=\"people-outline\" > </ion-icon>\r\n             <ion-button   size=\"small\" shape=\"round\" color=\"danger\" \r\n            style=\"height: 30px; \">{{addimg}}</ion-button> \r\n         </ion-card>\r\n        </a>\r\n       </ion-col>\r\n     \r\n     <ion-col col=6> \r\n        <a routerLink=\"/manageprop\">\r\n      <ion-card align=\"center\" text-center padding color=\"light\" style=\"border-radius: 20px;\">\r\n        <h2>Manage Properties</h2>\r\n        <ion-icon name=\"business-outline\"></ion-icon>\r\n      </ion-card>\r\n    </a>\r\n    </ion-col>\r\n \r\n\r\n\r\n\r\n\r\n\r\n       <ion-col col=6>\r\n        <a routerLink=\"/editlordprof\">\r\n        <ion-card align=\"center\" text-center padding color=\"light\" style=\"border-radius: 20px;\">\r\n          <h2>Edit Profile</h2>\r\n          <ion-icon name=\"person-add-outline\"></ion-icon>\r\n         </ion-card>\r\n         </a>\r\n       </ion-col> \r\n     </ion-row>  -->\r\n\r\n  \r\n   </ion-grid>\r\n\r\n  \r\n    \r\n\r\n \r\n\r\n  \r\n   \r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n <ion-footer  class=\"ion-footer\">\r\n   <ion-toolbar color=\"dark\" >\r\n     <ion-title align=\"center\" >2020 Off campus accomodation</ion-title>\r\n   </ion-toolbar>\r\n </ion-footer>\r\n    \r\n\r\n  \r\n\r\n\r\n</div>\r\n   \r\n </ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/landlord-dash/landlord-dash-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/landlord-dash/landlord-dash-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LandlordDashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordDashPageRoutingModule", function() { return LandlordDashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landlord_dash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landlord-dash.page */ "./src/app/landlord-dash/landlord-dash.page.ts");




const routes = [
    {
        path: '',
        component: _landlord_dash_page__WEBPACK_IMPORTED_MODULE_3__["LandlordDashPage"]
    }
];
let LandlordDashPageRoutingModule = class LandlordDashPageRoutingModule {
};
LandlordDashPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandlordDashPageRoutingModule);



/***/ }),

/***/ "./src/app/landlord-dash/landlord-dash.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landlord-dash/landlord-dash.module.ts ***!
  \*******************************************************/
/*! exports provided: LandlordDashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordDashPageModule", function() { return LandlordDashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landlord_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landlord-dash-routing.module */ "./src/app/landlord-dash/landlord-dash-routing.module.ts");
/* harmony import */ var _landlord_dash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landlord-dash.page */ "./src/app/landlord-dash/landlord-dash.page.ts");







let LandlordDashPageModule = class LandlordDashPageModule {
};
LandlordDashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landlord_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandlordDashPageRoutingModule"]
        ],
        declarations: [_landlord_dash_page__WEBPACK_IMPORTED_MODULE_6__["LandlordDashPage"]]
    })
], LandlordDashPageModule);



/***/ }),

/***/ "./src/app/landlord-dash/landlord-dash.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/landlord-dash/landlord-dash.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --ion-background-color:rgb(3, 1, 32);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGxvcmQtZGFzaC9DOlxcVXNlcnNcXFBldHJvbmVsbGFcXERlc2t0b3BcXFJNU1VQREFURS9zcmNcXGFwcFxcbGFuZGxvcmQtZGFzaFxcbGFuZGxvcmQtZGFzaC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmRsb3JkLWRhc2gvbGFuZGxvcmQtZGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNBO0VBQ0ksb0NBQUE7QUN4Q0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kbG9yZC1kYXNoL2xhbmRsb3JkLWRhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQgaDF7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDM1JTtcclxuLy8gfVxyXG5cclxuLy8gICNmaXJzdHtcclxuLy8gICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbi8vICAgIHpvb206IDU7XHJcbi8vIH1cclxuLy8gaW9uLWljb257XHJcbi8vICAgICB6b29tOiAyO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gaW9uLXRpdGxle1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuLy8gfVxyXG4vLyAuc21hbGxMb2dve1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1mb290ZXJ7XHJcbi8vICAgICBtYXJnaW4tdG9wOjEwJTtcclxuLy8gfVxyXG4vLyBhe1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgY29sb3I6YmxhY2s7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYXJkOmhvdmVyXHJcbi8vIHtcclxuXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZDU3NmI7XHJcblxyXG4vLyB9XHJcbi8vIGlvbi1pdGVte1xyXG4vLyAgICAgb3BhY2l0eTogMC44O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgXHJcbi8vIH1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMywgMSwgMzIpO1xyXG4gICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxLCAzMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/landlord-dash/landlord-dash.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/landlord-dash/landlord-dash.page.ts ***!
  \*****************************************************/
/*! exports provided: LandlordDashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordDashPage", function() { return LandlordDashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");








let LandlordDashPage = class LandlordDashPage {
    constructor(navCtrl, http, _serviceService, menuCtrl, router, actionSheetCtrl, loadingCtrl, platform, splashScreen, statusBar) {
        this.navCtrl = navCtrl;
        this.http = http;
        this._serviceService = _serviceService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.result = [];
        this.addProp = [];
        this.addimg = [];
    }
    //  async presentMenu() {
    //    const actionSheet = await this.actionSheetCtrl.create({
    //      header:'Land-Lord Menu',
    //      buttons:[{
    //        text: 'Profile',
    //        role: 'destrustctive',
    //        icon: 'person-circle-outline',
    //        handler:()=>{
    //          this.router.navigateByUrl('landlord-dash');
    //        }
    //      },{
    //        text: 'Register Resident',
    //        icon: 'add',
    //        handler: () =>{
    //        this.router.navigateByUrl('/landloard-app'); 
    //        }
    //      },{
    //      text: 'Manage Student',
    //      icon: 'people',
    //      handler: () =>{
    //        this.router.navigateByUrl('managestud');
    //      }
    //      },
    //      {
    //        text: 'Manage Properties',
    //        icon: 'business',
    //        handler: () =>{
    //          this.router.navigateByUrl('manageprop');
    //        }
    //      },
    //      {
    //        text:'Edit Your Profile',
    //        icon:'person-add',
    //        handler: () =>{
    //          this.router.navigateByUrl('editlordprof');
    //        }
    //      },
    //      {
    //        text: 'Logout ',
    //        icon: 'log-out',
    //        handler: () =>{
    //          this.router.navigateByUrl('/folder/folder');
    //        }
    //      }
    //     ]
    //    });
    //    await actionSheet.present();
    //  }
    ngOnInit() {
        this.getData();
        this.applidstu();
        this.sideMenu();
        this.initializeApp();
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
                    title: "PROFILE",
                    url: "landlord-dash",
                    icon: "person-circle-outline"
                },
                {
                    title: "REGISTER RESIDENCES",
                    url: "/landloard-app",
                    icon: "add"
                },
                {
                    title: "MANAGE STUDENT",
                    url: "/managestud",
                    icon: "people"
                },
                {
                    title: "MANAGE PROPARTIES",
                    url: "/manageprop",
                    icon: "business"
                },
                {
                    title: "EDIT PROFILE",
                    url: "/editlordprof",
                    icon: "person-add"
                },
                {
                    title: "LOG-OUT",
                    url: "/folder/folder",
                    icon: "log-out"
                },
            ];
    }
    applidstu() {
        return this._serviceService.getAppliedstu().
            subscribe((apart) => {
            this.addProp = apart;
            console.log(this.addProp);
            console.log(this.addProp.length);
            this.addimg = this.addProp.length;
        });
    }
    getData() {
        this._serviceService.lordprofile().subscribe(data => {
            this.result = data;
        });
    }
};
LandlordDashPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
LandlordDashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landlord-dash',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landlord-dash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landlord-dash/landlord-dash.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landlord-dash.page.scss */ "./src/app/landlord-dash/landlord-dash.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])
], LandlordDashPage);



/***/ })

}]);
//# sourceMappingURL=landlord-dash-landlord-dash-module-es2015.js.map