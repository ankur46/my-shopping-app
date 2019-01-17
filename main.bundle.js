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

/***/ "./src/app/admin-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userSerivce) {
        this.auth = auth;
        this.userSerivce = userSerivce;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
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

var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("./src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    <a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Products</a>  \n</p>\n<p>\n  <input #query\n   (keyup)=\"filter(query.value)\"  \n  type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n</p>\n\n\n<data-table\n  [items]=\"items\"\n  [itemCount]=\"itemCount\"\n  (reload)=\"reloadItem($event)\"\n>\n<data-table-column\n  [property]=\"'title'\"\n  [header]=\"'Title'\"\n  [sortable]=\"true\"\n[resizable]=\"true\"\n>\n</data-table-column>\n<data-table-column\n[property]=\"'price'\"\n[header]=\"'Price'\"\n[sortable]=\"true\"\n[resizable]=\"true\"\n>\n<ng-template #dataTableCell let-item=\"item\">\n {{item.price | currency:'USD':true}}\n</ng-template>\n\n</data-table-column>\n\n<data-table-column\n[property]=\"'$key'\"\n>\n<ng-template #dataTableCell let-item=\"item\">\n  <a [routerLink]=\"['/admin/products/',item.$key]\">Edit</a>\n</ng-template>\n\n</data-table-column>\n\n</data-table>\n\n"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll()
            .subscribe(function (p) {
            _this.products = p;
            _this.initializeTable(_this.products);
        });
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.tableResource = new __WEBPACK_IMPORTED_MODULE_2_angular5_data_table__["b" /* DataTableResource */](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItem = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        var filterdProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
        this.initializeTable(filterdProducts);
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__("./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n  \n<form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n        Title is Required.\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">$</span>\n        <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n        <div *ngIf=\"price.errors.required\">Price is Required.</div>\n        <div *ngIf=\"price.errors.min\">price should be 0 or Higher.</div>\n          \n        </div>      \n    </div>\n    <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n        <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n          <option value=\"\"></option>\n          <option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">\n            {{c.name}}\n          </option>\n          </select>\n          <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n            Category is Required.\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n         <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n           <div *ngIf=\"imageUrl.errors.required\">Image Url is Required.</div>\n           <div *ngIf=\"imageUrl.errors.url\">Valid Url is Required.</div>         \n         </div>    \n      </div>\n      <button class=\"btn btn-primary\">Save</button>\n      <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n  </form>\n  </div>\n    <div class=\"col-md-6\">\n      <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("./src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(route, router, categoryService, productService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.get(this.id).take(1).subscribe(function (p) { return _this.product = p; });
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id)
            this.productService.update(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you want to delete for Sure?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__("./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__("./src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n\n<div  class=\"container\">\n<router-outlet></router-outlet> \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userservice, auth, router) {
        this.userservice = userservice;
        this.auth = auth;
        this.router = router;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userservice.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bs_navbar_bs_navbar_component__ = __webpack_require__("./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__check_out_check_out_component__ = __webpack_require__("./src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__order_success_order_success_component__ = __webpack_require__("./src/app/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_orders_my_orders_component__ = __webpack_require__("./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_products_admin_products_component__ = __webpack_require__("./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_admin_orders_admin_orders_component__ = __webpack_require__("./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__ = __webpack_require__("./src/app/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_product_form_product_form_component__ = __webpack_require__("./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__category_service__ = __webpack_require__("./src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__products_product_filter_product_filter_component__ = __webpack_require__("./src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__product_card_product_card_component__ = __webpack_require__("./src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__product_quantity_product_quantity_component__ = __webpack_require__("./src/app/product-quantity/product-quantity.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__check_out_check_out_component__["a" /* CheckOutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__order_success_order_success_component__["a" /* OrderSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_30__products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_32__product_quantity_product_quantity_component__["a" /* ProductQuantityComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_28__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular5_data_table__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */] },
                    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */] },
                    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_15__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */] },
                    { path: 'check-out', component: __WEBPACK_IMPORTED_MODULE_16__check_out_check_out_component__["a" /* CheckOutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'order-success', component: __WEBPACK_IMPORTED_MODULE_17__order_success_order_success_component__["a" /* OrderSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'my/orders', component: __WEBPACK_IMPORTED_MODULE_18__my_orders_my_orders_component__["a" /* MyOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */]] },
                    {
                        path: 'admin/products/new',
                        component: __WEBPACK_IMPORTED_MODULE_26__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__["a" /* AdminAuthGuard */]]
                    },
                    {
                        path: 'admin/products/:id',
                        component: __WEBPACK_IMPORTED_MODULE_26__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__["a" /* AdminAuthGuard */]]
                    },
                    {
                        path: 'admin/products',
                        component: __WEBPACK_IMPORTED_MODULE_19__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__["a" /* AdminAuthGuard */]]
                    },
                    {
                        path: 'admin/orders',
                        component: __WEBPACK_IMPORTED_MODULE_20__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__["a" /* AdminAuthGuard */]]
                    },
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_27__category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_29__product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_25__admin_auth_service__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle .dropdown-item{\r\n    cursor: pointer;\r\n}\r\n.dropdown-toggle{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\">VEGSHOP</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n          Shopping-cart\n         <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\">\n           {{ cart.totalItemsCount }}\n         </span>\n        </a>\n      </li>\n        <ng-template #anonymousUser>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"  routerLink=\"/login\">Login</a>\n          </li>\n        </ng-template>\n      <li ngbDropdown  *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n        <a ngbDropdownToggle  class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{appUser.name}}\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n          <ng-container *ngIf=\"appUser.isAdmin\">\n            <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n            <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n          </ng-container>     \n        <a class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$
                            .subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__("./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__("./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/check-out/check-out.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  check-out works!\n</p>\n"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
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

var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    CheckOutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__("./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__("./src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button\n(click)=\"login()\"\nclass=\"btn btn-primary\">Login with Google</button>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
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
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modals/shopping-cart-tem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () {
            return (this.product.price * this.quantity);
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/modals/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_tem__ = __webpack_require__("./src/app/modals/shopping-cart-tem.ts");

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_0__shopping_cart_tem__["a" /* ShoppingCartItem */](item.product, item.quantity));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items) {
                sum += this.items[productId].totalPrice;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  my-orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
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

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__("./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__("./src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
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

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__("./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__("./src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.card-footer{\r\n  padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\" >\n    <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"{{ product.title}}\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{product.title}}</h5>\n      <p class=\"card-text\">{{product.price}}</p>\n    </div>\n    <div *ngIf=\"showActions && shoppingCart\"\n     class=\"card-footer\">\n        <button \n        *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity\"\n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">Add To Cart</button>\n        <ng-template #updateQuantity >\n          <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\" >\n\n          </product-quantity>\n        </ng-template>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modals_shopping_cart__ = __webpack_require__("./src/app/modals/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('shopping-cart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__modals_shopping_cart__["a" /* ShoppingCart */])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'product-card',
            template: __webpack_require__("./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__("./src/app/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n  <div class=\"col-2\">\n    <button \n    (click)=\"removeFromCart()\"\n    class=\"btn btn-secondary btn-block\">-</button>\n  </div>\n  <div class=\"col text-center\">\n    {{ shoppingCart.getQuantity(product) }} in cart\n  </div>\n  <div class=\"col-2\">\n    <button\n    (click)=\"addToCart()\"\n    class=\"btn btn-secondary btn-block\">+</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuantityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('shopping-cart'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__("./src/app/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__("./src/app/product-quantity/product-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        this.db.object('/products/' + productId).remove();
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.css":
/***/ (function(module, exports) {

module.exports = ".sticky-top{\r\n    top:80px;\r\n}"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <a\n        class=\"list-group-item list-group-item-action\"\n        [class.active]=\"!category\"\n        routerLink=\"/\"   \n        >All Categories</a> \n        <a\n        class=\"list-group-item list-group-item-action\"\n        *ngFor=\"let c of categories$ | async\"\n        routerLink=\"/\"\n        [queryParams]=\"{ category : c.$key }\"\n        [class.active]=\"category === c.$key\">\n         {{c.name}}\n      </a>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_service__ = __webpack_require__("./src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__("./src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__("./src/app/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__category_service__["a" /* CategoryService */]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-3\">\n    <product-filter [category]=\"category\"></product-filter>\n  </div>\n  <div class=\"col\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let p of filteredProducts; let i=index\">\n          <div class=\"col\">\n              <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n            </div>\n          <div *ngIf=\"(i+1) % 2 ===0\" class=\"w-100\"></div>\n      </ng-container>      \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        productService
            .getAll()
            .switchMap(function (products) {
            _this.products = products;
            return route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.filteredProducts = (_this.category) ?
                _this.products.filter(function (p) { return p.category === _this.category; }) :
                _this.products;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent())
                            .subscribe(function (cart) {
                            _this.cart = cart;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/products/products.component.html"),
            styles: [__webpack_require__("./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modals_shopping_cart__ = __webpack_require__("./src/app/modals/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .map(function (x) { return new __WEBPACK_IMPORTED_MODULE_0__modals_shopping_cart__["a" /* ShoppingCart */](x.items); })];
                }
            });
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItemQuantity(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItemQuantity(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.updateItemQuantity = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.take(1).subscribe(function (item) {
                            item$.update({ product: product, quantity: (item.quantity || 0) + change });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<ng-container *ngIf=\"cart$ | async as cart\">\n  <p>\n     You have {{ cart.totalItemsCount }} items in your shopping Cart.    \n  </p>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Product</th>\n        <th>Quantity</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <td>{{ item.product.title }}</td>\n        <td>{{ item.quantity}}</td>\n        <td>{{ item.totalPrice | currency:'USD':true}}</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th>{{cart.totalPrice | currency:USD:true}}</th>\n      </tr>\n    </tfoot>\n  </table>\n</ng-container>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__ = __webpack_require__("./src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
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
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/user/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/user/' + uid);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
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
    production: false,
    firebase: {
        apiKey: "AIzaSyB7Ei5b5OXSmYpIhuJx6ZBKfd1yLiqYht8",
        authDomain: "projectshop-174cc.firebaseapp.com",
        databaseURL: "https://projectshop-174cc.firebaseio.com",
        projectId: "projectshop-174cc",
        storageBucket: "projectshop-174cc.appspot.com",
        messagingSenderId: "498236919580"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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