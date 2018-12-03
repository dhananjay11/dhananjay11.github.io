(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customization-customization-module"],{

/***/ "./src/app/customization/customization-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/customization/customization-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationRoutingModule", function() { return CustomizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _jacket_options_jacket_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jacket-options/jacket-options.component */ "./src/app/customization/jacket-options/jacket-options.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'jacket-options',
        pathMatch: 'full',
    },
    {
        path: 'jacket-options',
        component: _jacket_options_jacket_options_component__WEBPACK_IMPORTED_MODULE_3__["JacketOptionsComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { title: 'Jacket Options', type: 'jacket-options' },
    },
];
var CustomizationRoutingModule = /** @class */ (function () {
    function CustomizationRoutingModule() {
    }
    CustomizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CustomizationRoutingModule);
    return CustomizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/customization/customization.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customization/customization.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationModule", function() { return CustomizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customization-routing.module */ "./src/app/customization/customization-routing.module.ts");
/* harmony import */ var _jacket_options_jacket_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jacket-options/jacket-options.component */ "./src/app/customization/jacket-options/jacket-options.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CustomizationModule = /** @class */ (function () {
    function CustomizationModule() {
    }
    CustomizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customization_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomizationRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [_jacket_options_jacket_options_component__WEBPACK_IMPORTED_MODULE_3__["JacketOptionsComponent"]],
        })
    ], CustomizationModule);
    return CustomizationModule;
}());



/***/ }),

/***/ "./src/app/customization/jacket-options/jacket-options.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customization/jacket-options/jacket-options.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customization-jacket-options default\">\r\n  <div class=\"app-dashboard\">\r\n    <app-hamburger [inputData]=\"breadcrumbData\"></app-hamburger>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customization/jacket-options/jacket-options.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customization/jacket-options/jacket-options.component.ts ***!
  \**************************************************************************/
/*! exports provided: JacketOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JacketOptionsComponent", function() { return JacketOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JacketOptionsComponent = /** @class */ (function () {
    function JacketOptionsComponent() {
    }
    JacketOptionsComponent.prototype.ngOnInit = function () {
        this.breadcrumbData = [
            { 'Name': 'Essentials', 'isCurrent': false, 'routerLink': './garment' },
            { 'Name': 'fabric', 'isCurrent': false, 'routerLink': './fabric' },
            { 'Name': 'customization', 'isCurrent': true, 'routerLink': '' },
            { 'Name': 'measurement', 'isCurrent': false, 'routerLink': '' },
            { 'Name': 'review', 'isCurrent': false, 'routerLink': '' },
        ];
    };
    JacketOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jacket-options',
            template: __webpack_require__(/*! ./jacket-options.component.html */ "./src/app/customization/jacket-options/jacket-options.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], JacketOptionsComponent);
    return JacketOptionsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customization-customization-module.js.map