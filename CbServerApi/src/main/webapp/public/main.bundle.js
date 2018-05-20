webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_common_footer_footer_component__ = __webpack_require__("./src/app/pages/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_common_menu_menu_component__ = __webpack_require__("./src/app/pages/common/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_common_modal_logout_modal_component__ = __webpack_require__("./src/app/pages/common/modal/logout-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_common_modal_del_modal_component__ = __webpack_require__("./src/app/pages/common/modal/del-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_jwt_interceptor__ = __webpack_require__("./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_index__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__global_val_global_val__ = __webpack_require__("./src/app/global-val/global.val.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_createupdateuser_create_update_user_component__ = __webpack_require__("./src/app/pages/user/createupdateuser/create-update.user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_searchuser_search_user_component__ = __webpack_require__("./src/app/pages/user/searchuser/search.user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_model_service__ = __webpack_require__("./src/app/services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_alert_component__ = __webpack_require__("./src/app/directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__directives_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_common_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_createupdateuser_create_update_user_component__["a" /* CreateUpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_common_modal_logout_modal_component__["a" /* LogoutModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_common_modal_del_modal_component__["a" /* DelModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_searchuser_search_user_component__["a" /* SearchUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__global_val_global_val__["a" /* GlobalVal */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["c" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_19__services_model_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__helpers_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_createupdateuser_create_update_user_component__ = __webpack_require__("./src/app/pages/user/createupdateuser/create-update.user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_searchuser_search_user_component__ = __webpack_require__("./src/app/pages/user/searchuser/search.user.component.ts");





/* import { UpdateUserComponent } from './pages/user/updateuser/update.user.component';
 */

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__pages_user_searchuser_search_user_component__["a" /* SearchUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/create', component: __WEBPACK_IMPORTED_MODULE_4__pages_user_createupdateuser_create_update_user_component__["a" /* CreateUpdateUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_user_createupdateuser_create_update_user_component__["a" /* CreateUpdateUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'reloaduser',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    // otherwise redirect to home
    //  { path: '**', redirectTo: '' },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes, {
    onSameUrlNavigation: 'reload'
});


/***/ }),

/***/ "./src/app/directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"alertId\" *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-alert',
            template: __webpack_require__("./src/app/directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/global-val/global.val.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalVal = /** @class */ (function () {
    function GlobalVal() {
    }
    GlobalVal.prototype.getRootURL = function () {
        return 'http://localhost:8080/CbServerApi';
    };
    GlobalVal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalVal);
    return GlobalVal;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/models/user.info.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/pages/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: "<footer class=\"sticky-footer\">\n      <div class=\"text-center\">\n        <small>Copyright \u00A9 CBI 2018</small>\n      </div>\n  </footer>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/common/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ".nameheading{\r\n    color: white;\r\n    position: absolute;\r\n    right: 100px;\r\n    width: auto;\r\n    text-shadow: 2px 2px #333;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/common/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n  <a class=\"navbar-brand\">\n    <img src=\"{{imageLogoPath}}\" height=\"50px\" />\n  </a>\n  <div class=\"nameheading\">\n    Hello :\n    <!--<span *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</span>-->\n    <span>\n      {{userName}}\n    </span>\n  </div>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n    aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n      <div style=\"clear: both;\"></div>\n    </span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n      <div class=\"clearfix\"></div>\n      <div class=\"clearfix\"></div>\n      <br/>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Menu Pages\">\n        <div>\n            <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\">\n                <a [routerLink]=\"['/home']\" class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\">\n                  <i class=\"fa fa-fw fa-file\"></i>\n                  <span class=\"nav-link-text\">Home</span>\n                </a>\n              </li>\n          <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Menu Levels\">\n            <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseMulti\" data-parent=\"#exampleAccordion\">\n              <i class=\"fa fa-fw fa-sitemap\"></i>\n              <span class=\"nav-link-text\">Menu</span>\n            </a>\n            <ul class=\" grid grid-pad sidenav-second-level collapse\" id=\"collapseMulti\">\n              <li>\n                <a [routerLink]=\"['/users']\" routerLinkActive=\"active\">Search User</a>\n              </li>\n               <li>\n                <a [routerLink]=\"['/users/create']\" routerLinkActive=\"active\">Create User</a>\n              </li>\n             </ul>\n          </li>\n        </div>\n    </ul>\n    <ul class=\"navbar-nav sidenav-toggler\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\">\n          <i class=\"fa fa-fw fa-angle-left\"></i>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"modal\" [routerLink]=\"['/login']\" data-target=\"#exampleModal\">\n          <i class=\"fa fa-fw fa-sign-out\"></i>Logout</a>\n      </li>\n    </ul>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/pages/common/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    // @ViewChild ('dataContainer') dataContainer: ElementRef;
    function MenuComponent(userService) {
        this.userService = userService;
        this.imageLogoPath = './assets/static/images/logo2.png';
        this.users = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userName = currentUser.username;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-menu',
            template: __webpack_require__("./src/app/pages/common/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/pages/common/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/common/modal/del-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DelModalComponent = /** @class */ (function () {
    function DelModalComponent() {
    }
    DelModalComponent.prototype.ngOnInit = function () {
    };
    DelModalComponent.prototype.deleteUser = function (user) {
        alert(user);
    };
    DelModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-modal',
            template: "\n   <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n          <h5> Do you want to delete user?</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" id=\"delBtn\" class=\"btn btn-primary\">Delete</button>\n      </div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DelModalComponent);
    return DelModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/common/modal/logout-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutModalComponent = /** @class */ (function () {
    function LogoutModalComponent() {
    }
    LogoutModalComponent.prototype.ngOnInit = function () {
    };
    LogoutModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout-modal',
            template: "<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Do you want to Leave?</h5>\n      <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">\u00D7</span>\n      </button>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n     <a class=\"btn btn-primary\" href=\"/login\">Logout</a>\n    </div>\n  </div>\n</div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], LogoutModalComponent);
    return LogoutModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.nameheading{\r\n    color: white;\r\n    position: absolute;\r\n    right: 100px;\r\n    width: auto;\r\n    text-shadow: 2px 2px #333;\r\n\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\n  <!-- Navigation-->\n  <app-menu></app-menu>\n  <!--End Navigation -->\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <p id=\"id9\"></p>\n      <!-- Breadcrumbs-->\n      <div id=\"stick\" class=\"stick\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a>Dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item active\"><a  [routerLink]=\"['/home']\">Home </a></li>\n        </ol>\n      </div>\n\n      <!--  Body -->\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      <div class=\"card mb-3\" id=\"body-content-id\">\n        <div class=\"card-body\">\n          <b> Consolidated Brands Inc.</b> manufactures and distributes chocolates and candies.\n          <p>Its subsidiary companies include a syrup and topping manufacturer, an ice cream cone manufacturer, and three companies\n            selling fountain and snack food supplies to the tri-state area. The company also acquired Barton's Candy, Schrafft's\n            Candy, Winters Liqueur filled chocolates, Kron Chocolatier, Miss Saylors Sugar-Free Candy, Hills Fundraising\n            division, and Geoffrey Boehm Chocolates. The company is based in Altoona, Pennsylvania.\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <app-logout-modal></app-logout-modal  >\n  </div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageLogoPath = './assets/static/images/logo2.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#sidenavToggler').click(function (e) {
            e.preventDefault();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('body').toggleClass('sidenav-toggled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-sidenav .nav-link-collapse').addClass('collapsed');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-sidenav .sidenav-second-level .navbar-sidenav .sidenav-third-level')
                .removeClass('show');
        });
        // Scroll to top button appear
        __WEBPACK_IMPORTED_MODULE_1_jquery__('[data-toggle]').click(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('body').toggleClass('sidenav-toggled');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-sidenav .nav-link-collapse').click(function (e) {
            e.preventDefault();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('body').removeClass('sidenav-toggled');
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n   <hr>\n    <div class=\"card card-login mx-auto mt-5\">\n      <div class=\"card-header bg-dark\">\n          <a class=\"navbar-brand\"> \n            <img src=\"{{imgHeader}}\" height=\"40px\"/>\n          </a>\n      </div>\n    <div class=\"card-body\">\n      <!-- <form (ngSubmit)=\"onClickSubmit()\" #loginForm=\"ngForm\" novalidate>\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n          <div class=\"form-group\">\n            <label for=\"userId\">User ID</label>\n            <input class=\"form-control\" name=\"userId\" id=\"userId\" type=\"id\" placeholder=\"Enter userid\" [(ngModel)]=\"userId\" #nameId=\"ngModel\"\n              required>\n            <div [hidden]=\"nameId.valid || nameId.pristine\" class=\"alert alert-danger\">\n              Userid is required\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input class=\"form-control\" id=\"password\" name=\"userPass\" type=\"password\" placeholder=\"Enter password\" required [(ngModel)]=\"password\"\n              #password=\"ngModel\">\n            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n              Password is required\n            </div>\n          </div>\n        <div style=\"clear: both;\">\n        </div>\n          <button type=\"submit\" [disabled]=\"!loginForm.form.valid\"\n           class=\"btn btn-primary btn-block\"> Login</button>\n        </form> -->\n       \n       <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" placeholder=\"Enter username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"alert alert-danger\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': f.submitted && !password.valid }\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" placeholder=\"Enter password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"alert alert-danger\">Password is required</div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            </div>\n            \n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.imgHeader = '/assets/static/images/logo2.png';
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.
            login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                localStorage.setItem('userToken', _this.model.username);
                _this.router.navigate(['/home']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/createupdateuser/create-update.user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user/createupdateuser/create-update.user.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\n  <!-- Navigation-->\n  <app-menu></app-menu>\n  <!--End Navigation -->\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <p id=\"id9\"></p>\n      <!-- Breadcrumbs-->\n      <div id=\"stick\" class=\"stick\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/users']\">Users</a>\n          </li>\n          <li class=\"breadcrumb-item active\">\n            <a>{{createUpdateLbl}} </a>\n          </li>\n        </ol>\n      </div>\n      <!--  Body -->\n      <br/>\n      <div class=\"card mb-3\" id=\"body-content-id\">\n        <div class=\"card-body\">\n          <div class=\"col-md-6\">\n            <form name=\"userinfoform\" (ngSubmit)=\"f.form.valid && createUpdateUser()\" #f=\"ngForm\" novalidate>\n                <app-alert></app-alert>\n\n              <div class=\"form-group\">\n                <label for=\"First Name\">First Name:</label>\n                <input [(ngModel)]=\"userinfo.firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\" #firstName=\"ngModel\" required>\n                <div *ngIf=\"f.submitted && !firstName.valid\" class=\"alert alert-danger\">First Name is required</div>\n\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Last Name\">Last Name:</label>\n                <input [(ngModel)]=\"userinfo.lastName\"  placeholder=\"Last Name\" name=\"lastName\" class=\"form-control\" id=\"lastName\" #lastName=\"ngModel\" required> \n                <div *ngIf=\"f.submitted && !lastName.valid\" class=\"alert alert-danger\">Last Name is required</div>\n\n              </div>\n              <div class=\"form-group\"> \n                <label for=\"age\">Age:</label>\n                <input [(ngModel)]=\"userinfo.age\" placeholder=\"Age\" name=\"age\" class=\"form-control\" id=\"age\" #age=\"ngModel\" required>\n                <div *ngIf=\"f.submitted && !age.valid\" class=\"alert alert-danger\">Age is required</div>\n\n              </div>\n            \n              <div class=\"form-group\">\n                <label for=\"phone\">Phone:</label>\n                <input [(ngModel)]=\"userinfo.phone\" placeholder=\"Phone\" name=\"phone\" class=\"form-control\" id=\"phone\" #phone=\"ngModel\" required>\n                <div *ngIf=\"f.submitted && !phone.valid\" class=\"alert alert-danger\">Phone is required</div>\n\n              </div>\n  \n             <div class=\"form-group\">\n                <label for=\"salary\">Salary:</label>\n                <input [(ngModel)]=\"userinfo.salary\" placeholder=\"Salary\" name=\"salary\" class=\"form-control\" id=\"salary\" #salary=\"ngModel\" required>\n                <div *ngIf=\"f.submitted && !salary.valid\" class=\"alert alert-danger\">Salary is required</div>\n\n              </div>\n\n              <!-- <button class=\"btn btn-success\" (click)=\"createUser()\">Create User</button> -->\n              <div class=\"form-group\">\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">{{createUpdateLbl}}</button>\n                  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n              </div>\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <app-logout-modal></app-logout-modal>\n  </div>"

/***/ }),

/***/ "./src/app/pages/user/createupdateuser/create-update.user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUpdateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_info_models__ = __webpack_require__("./src/app/models/user.info.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateUpdateUserComponent = /** @class */ (function () {
    function CreateUpdateUserComponent(route, alertService, router, userService) {
        this.route = route;
        this.alertService = alertService;
        this.router = router;
        this.userService = userService;
        this.userinfo = new __WEBPACK_IMPORTED_MODULE_1__models_user_info_models__["a" /* UserInfo */]();
        this.loading = false;
        var routeParams = this.route.snapshot.params;
        this.id = routeParams.id;
        if (routeParams.id) {
            this.createUpdateLbl = 'Update User';
            this.getUserById(routeParams.id);
        }
        else {
            this.createUpdateLbl = 'Create User';
        }
    }
    CreateUpdateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUpdateUserComponent.prototype.getUserById = function (id) {
        var _this = this;
        if (id) {
            this.userService.getUserById(id).subscribe(function (user) {
                _this.userinfo = user;
            }, function (error) {
                console.log(error);
            });
        }
    };
    CreateUpdateUserComponent.prototype.createUpdateUser = function () {
        if (this.id) {
            this.updateUser();
        }
        else {
            this.createUser();
        }
    };
    CreateUpdateUserComponent.prototype.createUser = function () {
        var _this = this;
        this.loading = true;
        this.userService.createUser(this.userinfo)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('User created successfully.', true);
            setTimeout(function (router) {
                _this.router.navigate(['users']);
            }, 2000);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CreateUpdateUserComponent.prototype.updateUser = function () {
        var _this = this;
        this.loading = true;
        this.userService.updateUser(this.userinfo)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('User update successfully.', true);
            setTimeout(function (router) {
                _this.router.navigate(['users']);
            }, 2000);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CreateUpdateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user.createupdate',
            template: __webpack_require__("./src/app/pages/user/createupdateuser/create-update.user.component.html"),
            styles: [__webpack_require__("./src/app/pages/user/createupdateuser/create-update.user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], CreateUpdateUserComponent);
    return CreateUpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/searchuser/search.user.component.css":
/***/ (function(module, exports) {

module.exports = ".glyphicon-trash:before {\r\n    content: \"\\e020\" !important;\r\n\r\n}\r\n:after, :before {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.glyphicon-pencil:before {\r\n    content: \"\\270f\" !important;\r\n}\r\n.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.btn-default {\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #ccc;\r\n}\r\n.btn {\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    background-color: lightblue;\r\n    margin-bottom: 0;\r\n    font-size: 10px;\r\n    font-weight: 100;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n}\r\n.btn1 {\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    background-color:red;\r\n    margin-bottom: 0;\r\n    font-size: 10px;\r\n    font-weight: 100;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n}\r\n.hidden{\r\n    visibility: hidden;\r\n}"

/***/ }),

/***/ "./src/app/pages/user/searchuser/search.user.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\n  <!-- Navigation-->\n  <app-menu></app-menu>\n  <!--End Navigation -->\n  <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">\n      <p id=\"id9\"></p>\n      <!-- Breadcrumbs-->\n      <div id=\"stick\" class=\"stick\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a>Dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item active\">\n            <a [routerLink]=\"['/users']\">Search User</a>\n          </li>\n        </ol>\n      </div>\n      <!--  Body -->\n      <br/>\n      <div class=\"card mb-3\" id=\"body-content-id\">\n        <div class=\"card-body\">\n          <div class=\"\">\n            <app-alert></app-alert>\n              <table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\" *ngIf=\"this.userinfo\">\n                  <thead>\n                  <tr>\n                    <!-- <th class=\"hidden\">Id</th> -->\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Age</th>\n                    <th>Phone</th>\n                    <th>Salary</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                  <tbody>\n                  <tr *ngFor=\"let user of userinfo\">\n                    <!-- <td class=\"hidden\">{{user.userId}}</td> -->\n                    <td>{{user.firstName}}</td>\n                    <td>{{user.lastName}}</td>\n                    <td>{{user.age}}</td>\n                    <td>{{user.phone}}</td>\n                    <td>{{user.salary}}</td>\n                    <td class=\"button\">\n                      <a class=\"btn btn-default\" (click)=\"editUser(user)\" title='Edit User'><i class=\"glyphicon glyphicon-pencil\"></i></a>\n                      <a class=\"btn1 btn-default\" (click)=\"deleteUser(user.userId)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"  title='Delete User'> <span aria-hidden=\"true\">&times;</span></a>\n                       \n                     </td>\n                    \n                  </tr>\n                  </tbody>\n                </table>\n          </div>\n        </div>\n\n      </div>\n    </div>\n \n \n  </div>\n  <app-footer></app-footer>\n  <!-- Modal -->\n   <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n     <app-logout-modal></app-logout-modal>\n   </div>\n    <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n      <app-delete-modal></app-delete-modal>\n   </div>\n   <!--End-->"

/***/ }),

/***/ "./src/app/pages/user/searchuser/search.user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_model_service__ = __webpack_require__("./src/app/services/model.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchUserComponent = /** @class */ (function () {
    function SearchUserComponent(route, alertService, modalService, router, userService) {
        this.route = route;
        this.alertService = alertService;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.dtOptions = {};
    }
    SearchUserComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.dtOptions = {
            pagingType: 'full_numbers',
            processing: true
        };
    };
    SearchUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUserDetails()
            .subscribe(function (users) {
            _this.userinfo = users;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    SearchUserComponent.prototype.editUser = function (user) {
        if (user) {
            this.router.navigate(['/users/edit', user.userId]);
        }
    };
    SearchUserComponent.prototype.deleteUser = function (id) {
        var self = this;
        $('#exampleModalCenter #delBtn').click(function () {
            $('#exampleModalCenter').modal('hide');
            self.userService.deleteUserById(id)
                .subscribe(function (users) {
                self.alertService.success('User deleted successfully.', true);
                setTimeout(function () {
                    location.reload(true);
                }, 1000);
            }, function (error) {
                self.alertService.error(error);
            });
        });
    };
    SearchUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user.search',
            template: __webpack_require__("./src/app/pages/user/searchuser/search.user.component.html"),
            styles: [__webpack_require__("./src/app/pages/user/searchuser/search.user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__services_model_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], SearchUserComponent);
    return SearchUserComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_val_global_val__ = __webpack_require__("./src/app/global-val/global.val.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(globalVal, http) {
        this.globalVal = globalVal;
        this.http = http;
        this.rootURL = this.globalVal.getRootURL();
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.rootURL + '/api/validate/' + username + '/' + password, JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            alert(response);
            var token = true;
            /*response.json() && response.json().token;*/
            if (token) {
                // this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_val_global_val__["a" /* GlobalVal */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_service__["a"]; });





/***/ }),

/***/ "./src/app/services/model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        alert('ddddddddd');
        // open modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_val_global_val__ = __webpack_require__("./src/app/global-val/global.val.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(globalVal, http, authenticationService) {
        this.globalVal = globalVal;
        this.http = http;
        this.authenticationService = authenticationService;
        this.rootURL = this.globalVal.getRootURL();
    }
    UserService.prototype.getUserDetails = function () {
        return this.http.get(this.rootURL + '/api/user/details')
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.rootURL + '/api/user/' + id)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Error'); });
    };
    /* findById(id: number): Observable<User> {
        return this.http.get(this.apiUrl + '/' + id)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Error'));
      } */
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.rootURL + '/api/user/create', user)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    /*  updateUser(user: UserInfo)  {
         return this.http.put(this.rootURL + '/api/user/update' + user.userId, user);
     } */
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.rootURL + '/api/user/update', user)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]
            .throw(error.json().error || 'Server error'); });
    };
    /*   deleteUser(id: number) {
          return this.http.delete(this.rootURL + '/api/user/delete' + id);
      } */
    UserService.prototype.deleteUserById = function (id) {
        return this.http.delete(this.rootURL + '/api/user/delete/' + id)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__global_val_global_val__["a" /* GlobalVal */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map