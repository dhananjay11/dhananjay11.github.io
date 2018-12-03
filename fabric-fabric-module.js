(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fabric-fabric-module"],{

/***/ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js ***!
  \*********************************************************************/
/*! exports provided: SlickCarouselModule, SlickCarouselComponent, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
var SlickCarouselComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SlickCarouselComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
    }
    /**
     * On component destroy
     */
    /**
     * On component destroy
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnDestroy = /**
     * On component destroy
     * @return {?}
     */
    function () {
        this.unslick();
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.ngAfterViewChecked();
    };
    /**
     * On component view checked
     */
    /**
     * On component view checked
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewChecked = /**
     * On component view checked
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) {
                // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach(function (slickItem) {
                    _this.slides.push(slickItem);
                    _this.zone.runOutsideAngular(function () {
                        _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    });
                });
                this._addedSlides = [];
                this._removedSlides.forEach(function (slickItem) {
                    /** @type {?} */
                    var idx = _this.slides.indexOf(slickItem);
                    _this.slides = _this.slides.filter(function (s) { return s !== slickItem; });
                    _this.zone.runOutsideAngular(function () {
                        _this.$instance.slick('slickRemove', idx);
                    });
                });
                this._removedSlides = [];
            }
        }
    };
    /**
     * init slick
     */
    /**
     * init slick
     * @return {?}
     */
    SlickCarouselComponent.prototype.initSlick = /**
     * init slick
     * @return {?}
     */
    function () {
        var _this = this;
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular(function () {
            _this.$instance = jQuery(_this.el.nativeElement);
            _this.$instance.on('init', function (event, slick) {
                _this.zone.run(function () {
                    _this.init.emit({ event: event, slick: slick });
                });
            });
            _this.$instance.slick(_this.config);
            _this.zone.run(function () {
                _this.initialized = true;
                _this.currentIndex = (_this.config && _this.config.initialSlide) ? _this.config.initialSlide : 0;
            });
            _this.$instance.on('afterChange', function (event, slick, currentSlide) {
                _this.zone.run(function () {
                    _this.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                    _this.currentIndex = currentSlide;
                });
            });
            _this.$instance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                _this.zone.run(function () {
                    _this.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                });
            });
            _this.$instance.on('breakpoint', function (event, slick, breakpoint) {
                _this.zone.run(function () {
                    _this.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                });
            });
            _this.$instance.on('destroy', function (event, slick) {
                _this.zone.run(function () {
                    _this.destroy.emit({ event: event, slick: slick });
                    _this.initialized = false;
                });
            });
        });
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.addSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._addedSlides.push(slickItem);
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.removeSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._removedSlides.push(slickItem);
    };
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickGoTo = /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance.slick('slickGoTo', index);
        });
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance.slick('slickNext');
        });
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance.slick('slickPrev');
        });
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPause = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance.slick('slickPause');
        });
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance.slick('slickPlay');
        });
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.unslick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.$instance) {
            this.zone.runOutsideAngular(function () {
                _this.$instance.slick('unslick');
            });
            this.$instance = undefined;
        }
        this.initialized = false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['config'].previousValue !== changes['config'].currentValue && changes['config'].currentValue !== undefined) {
            if (this.initialized) {
                /** @type {?} */
                var refresh_1 = changes['config'].currentValue['refresh'];
                /** @type {?} */
                var newOptions_1 = Object.assign({}, changes['config'].currentValue);
                delete newOptions_1['refresh'];
                this.zone.runOutsideAngular(function () {
                    _this.$instance.slick('slickSetOption', newOptions_1, refresh_1);
                });
            }
        }
    };
    SlickCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-slick-carousel',
                    exportAs: 'slick-carousel',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SlickCarouselComponent; }),
                            multi: true
                        }],
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    SlickCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    SlickCarouselComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return SlickCarouselComponent;
}());
var SlickItemDirective = /** @class */ (function () {
    function SlickItemDirective(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
        }
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    };
    SlickItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngxSlickItem]',
                },] }
    ];
    /** @nocollapse */
    SlickItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    return SlickItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SlickCarouselModule = /** @class */ (function () {
    function SlickCarouselModule() {
    }
    SlickCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ],
                    exports: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ]
                },] }
    ];
    return SlickCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNsaWNrLWNhcm91c2VsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc2xpY2stY2Fyb3VzZWwvc2xpY2suY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtc2xpY2stY2Fyb3VzZWwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0LFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFBMQVRGT1JNX0lELFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBhbnk7XG5cbi8qKlxuICogU2xpY2sgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXNsaWNrLWNhcm91c2VsJyxcbiAgICBleHBvcnRBczogJ3NsaWNrLWNhcm91c2VsJyxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlja0Nhcm91c2VsQ29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0Nhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIGFmdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyAkaW5zdGFuY2U6IGFueTtcbiAgICBwdWJsaWMgY3VycmVudEluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIHNsaWRlczogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9yZW1vdmVkU2xpZGVzOiBTbGlja0l0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICAgIHByaXZhdGUgX2FkZGVkU2xpZGVzOiBTbGlja0l0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuc2xpY2soKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdDaGVja2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gY29tcG9uZW50IHZpZXcgY2hlY2tlZFxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkU2xpZGVzLmxlbmd0aCA+IDAgfHwgdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2xpZGVzTGVuZ3RoID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggKyB0aGlzLl9hZGRlZFNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgbmV4dFNsaWRlc0xlbmd0aCBpcyB6ZXJlLCBkbyBub3RoaW5nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRTbGlkZXNMZW5ndGggPT09IDApIHsgLy8gdW5zbGljayBjYXNlXG4gICAgICAgICAgICAgICAgdGhpcy51bnNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZGVkU2xpZGVzLmZvckVhY2goc2xpY2tJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlja0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrQWRkJywgc2xpY2tJdGVtLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcy5mb3JFYWNoKHNsaWNrSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2xpZGVzLmluZGV4T2Yoc2xpY2tJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLnNsaWRlcy5maWx0ZXIocyA9PiBzICE9PSBzbGlja0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrUmVtb3ZlJywgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5pdCBzbGlja1xuICAgICAqL1xuICAgIGluaXRTbGljaygpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLl9hZGRlZFNsaWRlcztcbiAgICAgICAgdGhpcy5fYWRkZWRTbGlkZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcyA9IFtdO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2UgPSBqUXVlcnkodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2luaXQnLCAoZXZlbnQsIHNsaWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdC5lbWl0KHtldmVudCwgc2xpY2t9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljayh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaW5pdGlhbFNsaWRlKSA/IHRoaXMuY29uZmlnLmluaXRpYWxTbGlkZSA6IDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJDaGFuZ2UuZW1pdCh7ZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2JlZm9yZUNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoe2V2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGV9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5vbignYnJlYWtwb2ludCcsIChldmVudCwgc2xpY2ssIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmVha3BvaW50LmVtaXQoe2V2ZW50LCBzbGljaywgYnJlYWtwb2ludH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLm9uKCdkZXN0cm95JywgKGV2ZW50LCBzbGljaykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3kuZW1pdCh7ZXZlbnQsIHNsaWNrfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRTbGlkZShzbGlja0l0ZW06IFNsaWNrSXRlbURpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcy5wdXNoKHNsaWNrSXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlU2xpZGUoc2xpY2tJdGVtOiBTbGlja0l0ZW1EaXJlY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcy5wdXNoKHNsaWNrSXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2xpY2sgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHNsaWNrR29UbyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tOZXh0KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tQcmV2KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tQYXVzZSgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbGlja1BsYXkoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy4kaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2NvbmZpZyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZSAmJiBjaGFuZ2VzWydjb25maWcnXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoID0gY2hhbmdlc1snY29uZmlnJ10uY3VycmVudFZhbHVlWydyZWZyZXNoJ107XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld09wdGlvbnNbJ3JlZnJlc2gnXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIG5ld09wdGlvbnMsIHJlZnJlc2gpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFNsaWNrSXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0l0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIEBIb3N0KCkgcHJpdmF0ZSBjYXJvdXNlbDogU2xpY2tDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NsaWNrQ2Fyb3VzZWxDb21wb25lbnQsIFNsaWNrSXRlbURpcmVjdGl2ZX0gZnJvbSAnLi9zbGljay5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NsaWNrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2xpY2tDYXJvdXNlbENvbXBvbmVudCxcbiAgICBTbGlja0l0ZW1EaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTbGlja0Nhcm91c2VsQ29tcG9uZW50LFxuICAgIFNsaWNrSXRlbURpcmVjdGl2ZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0Nhcm91c2VsTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7O0lBd0RJLGdDQUFvQixFQUFjLEVBQ2Q7UUFEQSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUk7MkJBakJtQixJQUFJLFlBQVksRUFBRTs0QkFD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

/***/ }),

/***/ "./src/app/fabric/containers/recommended/recommended.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/fabric/containers/recommended/recommended.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"selection-carousel fab-recommend\" data-selection-section>\n  <button [disabled]=\"product?.isOutOfStock\"\n          (click)=\"selectProduct(product)\"\n          *ngFor=\"let product of recommended;\"\n          [ngClass]=\"{'is-out-of-stock': product?.isOutOfStock,\n                      'is-best-seller': product?.isBestSeller}\"\n          class=\"selection-carousel-selection-item fab-recommended-display\"\n          >\n    <img src=\"http://placehold.it/80\">\n    <span>{{product.fabricColorCode}} {{product.fabricRange.description}}</span>\n  </button>\n</div>\n -->\n<div class=\"selection-carousel fab-recommend\" data-selection-section>\n   <ngx-slick-carousel class=\"carousel\" \n                        #slickModal=\"slick-carousel\" \n                        [config]=\"slideConfig\" \n                        >\n<button ngxSlickItem [disabled]=\"product?.isOutOfStock\"\n          (click)=\"selectProduct(product)\"\n          *ngFor=\"let product of recommended;\"\n          [ngClass]=\"{'is-out-of-stock': product?.isOutOfStock,\n                      'is-best-seller': product?.isBestSeller}\"\n          class=\"selection-carousel-selection-item fab-recommended-display\"\n          >\n    <img src=\"http://placehold.it/80\">\n    <span>{{product.fabricColorCode}} {{product.fabricRange.description}}</span>\n  </button>\n    </ngx-slick-carousel>\n  </div>"

/***/ }),

/***/ "./src/app/fabric/containers/recommended/recommended.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/fabric/containers/recommended/recommended.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-recommend {\n  height: 120px;\n  margin-top: 6px;\n  overflow-y: scroll; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.fab-recommended-display {\n  width: calc(25% - 1.25rem);\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n  margin-bottom: 0.625rem; }\n\n.selection-carousel-selection-item.is-out-of-stock {\n  position: relative; }\n\n.selection-carousel-selection-item.is-out-of-stock::after {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 400;\n  background-color: rgba(255, 0, 0, 0.8);\n  color: #fefefe;\n  content: \"Out Of Stock\";\n  font-size: 0.625rem;\n  height: 15px;\n  text-align: center;\n  top: 3.9375rem;\n  width: 4.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RqYXkvRG93bmxvYWRzL2FkaXR5YS9jdXN0b20tc3VpdC1idWlsZGVyLU1lbnUvc3JjL2FwcC9mYWJyaWMvY29udGFpbmVycy9yZWNvbW1lbmRlZC9yZWNvbW1lbmRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1Qsb0NBQW1DO0VBQ25DLGdDQUErQjtFQUMvQiw0QkFBMkI7RUFDM0IsNENBQTJDO0VBQzNDLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsZUFBYztFQUNkLHdCQWpDbUM7RUFrQ25DLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mYWJyaWMvY29udGFpbmVycy9yZWNvbW1lbmRlZC9yZWNvbW1lbmRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRvdXQtb2Ytc3RvY2stY29udGVudDogXCJPdXQgT2YgU3RvY2tcIjtcblxuLmZhYi1yZWNvbW1lbmQge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYWItcmVjb21tZW5kZWQtZGlzcGxheSB7XG4gIHdpZHRoOiBjYWxjKDI1JSAtIDEuMjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMC42MjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuXG4uc2VsZWN0aW9uLWNhcm91c2VsLXNlbGVjdGlvbi1pdGVtLmlzLW91dC1vZi1zdG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbGVjdGlvbi1jYXJvdXNlbC1zZWxlY3Rpb24taXRlbS5pcy1vdXQtb2Ytc3RvY2s6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgY29udGVudDogJG91dC1vZi1zdG9jay1jb250ZW50O1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAzLjkzNzVyZW07XG4gIHdpZHRoOiA0Ljc1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/fabric/containers/recommended/recommended.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/fabric/containers/recommended/recommended.component.ts ***!
  \************************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/global-session-storage.service */ "./src/app/shared/services/global-session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent() {
        this.selectedIndex = -1;
        this.selectedProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
    }
    RecommendedComponent.prototype.ngOnInit = function () { };
    RecommendedComponent.prototype.ngOnChanges = function (simple) {
        var change = simple['recommended'];
        if (change) {
            console.log('change is', change);
            this.recommended = change.currentValue;
            console.log('chnage recommended is', this.recommended);
        }
    };
    RecommendedComponent.prototype.selectProduct = function (product) {
        this.selectedIndex = Number(product.id);
        product.selected = true;
        _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["GlobalSessionStorageService"].storeDataInSession(this.fabricSessionType, product.id);
        _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["GlobalSessionStorageService"].storeDataInSession('selections.factoryCode', product.factoryCode);
        this.selectedProduct.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecommendedComponent.prototype, "recommended", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecommendedComponent.prototype, "fabricSessionType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecommendedComponent.prototype, "selectedProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecommendedComponent.prototype, "fabricType", void 0);
    RecommendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommended',
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/fabric/containers/recommended/recommended.component.html"),
            styles: [__webpack_require__(/*! ./recommended.component.scss */ "./src/app/fabric/containers/recommended/recommended.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/fabric/containers/scan/scan.component.html":
/*!************************************************************!*\
  !*** ./src/app/fabric/containers/scan/scan.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-wrapper\">\n    <button class=\"button-scan\"></button>\n</section>\n                "

/***/ }),

/***/ "./src/app/fabric/containers/scan/scan.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fabric/containers/scan/scan.component.ts ***!
  \**********************************************************/
/*! exports provided: ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
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

var ScanComponent = /** @class */ (function () {
    function ScanComponent() {
    }
    ScanComponent.prototype.ngOnInit = function () { };
    ScanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scan',
            template: __webpack_require__(/*! ./scan.component.html */ "./src/app/fabric/containers/scan/scan.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ScanComponent);
    return ScanComponent;
}());



/***/ }),

/***/ "./src/app/fabric/containers/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fabric/containers/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-split-layout-top\">\n  <div class=\"search_header\">\n    <div class=\"scanned_headers\">\n      <div *ngIf=\"!isShowSearch\">\n        <header class=\"section-header-imp section-header\">\n          <h6 *ngIf=\"headerTitle\" class=\"section-label\"> {{headerTitle}}</h6>\n        </header>\n      </div>\n      <div class=\"search-overlay\">\n        <header class=\"section-header-imp section-header section-header-search\">\n          <div class=\"input-wrapper-outer\">\n            <form class=\"input-wrapper\">\n              <input [formControl]=\"searchId\" class=\"search-input\" data-checkval\n                     name=\"query\"\n                     (keyup.enter)='searchByFabricId()'\n                     placeholder=\"Search Fabric ID\"\n                     type=\"search\">\n              <button (click)=\"resetSearchText()\"\n                      *ngIf=\"searchId.value?.length > 0\"\n                      title=\"Click me to clear the input field\"\n                      type=\"reset\"\n                      class=\"is-active\">x\n              </button>\n            </form>\n          </div>\n          <span class=\"form-error is-visible\" *ngIf=\"isFabricFound\">\n                No results. Please check the fabric ID and try again.\n      </span>\n          <div class=\"out-of-stock-warning\" *ngIf=\"isOutOfStock\">\n            <p>The fit you've chosen doesn't match the body measurements previously entered. Please double those during the measurement step.</p>\n          </div>\n        </header>\n      </div>\n      <div class=\"selection-carousel fab-search\">\n        <button [disabled]=\"product?.isOutOfStock\"\n                (click)=\"selectProduct(product)\"\n                *ngFor=\"let product of allSearched\"\n                [ngClass]=\"{'is-active': product?.selected,\n              'is-out-of-stock': product?.isOutOfStock,\n              'is-best-seller': product?.isBestSeller\n            }\"\n                class=\"selection-carousel-selection-item fab-search-display\">\n          <img src=\"http://placehold.it/80\">\n          <span>{{product.fabricColorCode | titlecase}} {{product.fabricRange?.description}}</span>\n        </button>\n      </div>\n      <hr class=\"section-divider\">\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/fabric/containers/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/fabric/containers/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-search {\n  height: 120px;\n  overflow-y: scroll;\n  margin-bottom: 45px;\n  margin-top: 35px; }\n\n.fab-search-display {\n  width: calc(25% - 1.25rem);\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n  margin-bottom: 0.625rem; }\n\n.selection-carousel-selection-item img {\n  width: 100% !important; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.out-of-stock-warning {\n  background: #e7b543;\n  padding: #fff;\n  color: #fff;\n  text-align: center; }\n\n.out-of-stock-warning p {\n  margin-bottom: 0.2rem;\n  font-size: 14px;\n  line-height: 1.2;\n  text-rendering: optimizeLegibility; }\n\n.selection-carousel-selection-item.is-out-of-stock {\n  position: relative; }\n\n.selection-carousel-selection-item.is-out-of-stock::after {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 400;\n  background-color: rgba(255, 0, 0, 0.8);\n  color: #fefefe;\n  content: \"Out Of Stock\";\n  font-size: 0.625rem;\n  height: 15px;\n  text-align: center;\n  top: 3.9375rem;\n  width: 4.75rem; }\n\n.section-header-imp {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RqYXkvRG93bmxvYWRzL2FkaXR5YS9jdXN0b20tc3VpdC1idWlsZGVyLU1lbnUvc3JjL2FwcC9mYWJyaWMvY29udGFpbmVycy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMkJBQTBCO0VBQzFCLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usb0JBM0IrQjtFQTRCL0IsY0EzQnVCO0VBNEJ2QixZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1DQUFrQyxFQUNuQzs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1Qsb0NBQW1DO0VBQ25DLGdDQUErQjtFQUMvQiw0QkFBMkI7RUFDM0IsNENBQTJDO0VBQzNDLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsZUFBYztFQUNkLHdCQXBEbUM7RUFxRG5DLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmFicmljL2NvbnRhaW5lcnMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRvdXQtb2Ytc3RvY2stYmFkZ2UtY29sb3I6ICNkMDJlMjI7XG4kb3V0LW9mLXN0b2NrLWJhY2tncm91bmQ6ICNlN2I1NDM7XG4kb3V0LW9mLXN0b2NrLWNvbG9yOiAjZmZmO1xuJG91dC1vZi1zdG9jay1jb250ZW50OiBcIk91dCBPZiBTdG9ja1wiO1xuXG4uZmFiLXNlYXJjaCB7XG4gIGhlaWdodDogMTIwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmZhYi1zZWFyY2gtZGlzcGxheSB7XG4gIHdpZHRoOiBjYWxjKDI1JSAtIDEuMjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMC42MjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuXG4uc2VsZWN0aW9uLWNhcm91c2VsLXNlbGVjdGlvbi1pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub3V0LW9mLXN0b2NrLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAkb3V0LW9mLXN0b2NrLWJhY2tncm91bmQ7XG4gIHBhZGRpbmc6ICRvdXQtb2Ytc3RvY2stY29sb3I7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vdXQtb2Ytc3RvY2std2FybmluZyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5zZWxlY3Rpb24tY2Fyb3VzZWwtc2VsZWN0aW9uLWl0ZW0uaXMtb3V0LW9mLXN0b2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0aW9uLWNhcm91c2VsLXNlbGVjdGlvbi1pdGVtLmlzLW91dC1vZi1zdG9jazo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmVmZWZlO1xuICBjb250ZW50OiAkb3V0LW9mLXN0b2NrLWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDMuOTM3NXJlbTtcbiAgd2lkdGg6IDQuNzVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlci1pbXAge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/fabric/containers/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fabric/containers/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/global-session-storage.service */ "./src/app/shared/services/global-session-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.selectedIndex = -1;
        this.fabricIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allSearched = [];
        this.selectedProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchId = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isShowSearch = false;
        this.isFabricFound = false;
        this.isOutOfStock = false;
    }
    SearchComponent.prototype.selectProduct = function (product) {
        this.allSearched.filter(function (res) { return res.selected = false; });
        product.selected = true;
        product.lastSearch = (new Date()).toLocaleString();
        this.selectedIndex = product.id;
        _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession(this.fabricSessionType, product.id);
        _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric'" + this.fabricType, JSON.stringify(this.product));
        this.selectedProduct.emit(product);
        this.sortFabricsByLatestSearch();
        this.isOutOfStock = false;
    };
    SearchComponent.prototype.resetSearchText = function () {
        this.searchId.setValue('');
    };
    SearchComponent.prototype.searchByFabricId = function () {
        var fabricId = (this.searchId.value).toLowerCase();
        if (fabricId !== '') {
            // disabled error msg if fabric id found
            this.isFabricFound = false;
            this.isOutOfStock = false;
            var allSearched = void 0;
            allSearched = this.allSearched.filter(function (it) {
                return (it.id).toLowerCase() === fabricId;
            });
            if (allSearched.length <= 0) {
                allSearched = this.recommended.filter(function (it) {
                    return (it.id).toLowerCase() === fabricId;
                });
                if (allSearched.length > 0) {
                    // set all selected fabric false
                    this.setAllSelectedFabricsFalse();
                    allSearched[0].isSearched = true;
                    allSearched[0].lastSearch = (new Date()).toLocaleString();
                    allSearched[0].selected = true;
                    _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession(this.fabricSessionType, allSearched[0].id);
                    _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession('selections.factoryCode', allSearched[0].factoryCode);
                    this.allSearched.push(allSearched[0]);
                    this.selectedProduct.emit(this.allSearched[0]);
                    this.sortFabricsByLatestSearch();
                }
                else {
                    this.isFabricFound = true;
                }
            }
            else {
                this.setAllSelectedFabricsFalse();
                allSearched[0].lastSearch = (new Date()).toLocaleString();
                allSearched[0].selected = true;
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession(this.fabricSessionType, allSearched[0].id);
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession('selections.factoryCode', allSearched[0].factoryCode);
                this.selectedProduct.emit(allSearched[0]);
                this.sortFabricsByLatestSearch();
            }
            _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + this.fabricType, JSON.stringify(this.allSearched));
        }
        else {
            this.isFabricFound = true;
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType)) {
            var selectedFabricId_1 = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(this.fabricSessionType);
            this.allSearched = JSON.parse(_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType));
            var fabric = this.allSearched.filter(function (_) { return _.id === selectedFabricId_1; });
            if (fabric[0].isOutOfStock) {
                this.isOutOfStock = true;
                this.selectedIndex = -1;
            }
            else {
                this.isOutOfStock = false;
            }
            this.sortFabricsByLatestSearch();
        }
    };
    SearchComponent.prototype.ngOnChanges = function (changes) {
        var change = changes['product'];
        if (change) {
            if (!change.firstChange) {
                var curVal_1 = change.currentValue;
                if (curVal_1) {
                    // check if curVal is exist in search History or not
                    // if exist skip insertion
                    this.setAllSelectedFabricsFalse();
                    var allSearched = this.allSearched.filter(function (it) { return it.id === curVal_1.id; });
                    if (allSearched.length <= 0) {
                        curVal_1.selected = true;
                        curVal_1.lastSearch = (new Date()).toLocaleString();
                        this.allSearched.push(curVal_1);
                        // sort search history by date
                        this.sortFabricsByLatestSearch();
                    }
                    else {
                        allSearched[0].selected = true;
                        allSearched[0].lastSearch = (new Date()).toLocaleString();
                        // sort search history by date
                        this.sortFabricsByLatestSearch();
                    }
                }
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + this.fabricType, JSON.stringify(this.allSearched));
            }
        }
    };
    // sort fabric by latest search
    SearchComponent.prototype.sortFabricsByLatestSearch = function () {
        var _this = this;
        return this.allSearched.sort(function (date1, date2) {
            return _this.getTime(new Date(date2.lastSearch)) - _this.getTime(new Date(date1.lastSearch));
        });
    };
    // set all selected fabrics false
    SearchComponent.prototype.setAllSelectedFabricsFalse = function () {
        return this.allSearched.forEach(function (element) {
            element.selected = false;
        });
    };
    SearchComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "fabricIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "selectedProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "headerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "fabricType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "fabricSessionType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "recommended", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/fabric/containers/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/fabric/containers/search/search.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/fabric/fabric-default/fabric-default.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/fabric/fabric-default/fabric-default.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fabric-selection-jacket-default default\">\n  <div class=\"app-dashboard\">\n    <app-hamburger [inputData]=\"breadcrumbData\"></app-hamburger>\n    <div class=\"app-dashboard-body off-canvas-wrapper\">\n      <div class=\"app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium\"\n           data-off-canvas\n           id=\"app-dashboard-sidebar\">\n        <app-sidemenu [sideBarData]=\"'selectedGarment'\"></app-sidemenu>\n      </div>\n      <div class=\"app-dashboard-body-content off-canvas-content\" data-off-canvas-content>\n        <div class=\"section-split-layout-wrapper\">\n          <div class=\"section-split-layout-selections\">\n            <app-search (selectedProduct)=\"getSelectedIndex($event)\"\n                        [headerTitle]=\"headerTitle\"\n                        [product]=\"product\"\n                        [recommended]=\"recommended\"\n                        [fabricSessionType]=\"fabricSessionType\"\n                        [fabricType]=\"fabricType\"\n            >\n            </app-search>\n            <!--<hr class=\"section-divider\">-->\n            <div class=\"recommended_section\">\n              <header class=\"section-header\" id=\"recommended_header\">\n                <h6 class=\"section-label\">Recommended</h6>\n                <button (click)=\"goToFilterPage()\" class=\"section-header-detail\">Filtered\n                  <span id=\"selectedFilterCount\" class=\"badge\">{{filteredCount}}</span></button>\n              </header>\n              <app-recommended (selectedProduct)=\"getSelectedIndex($event)\"\n                               [recommended]=\"recommended\"\n                               [fabricSessionType]=\"fabricSessionType\"\n                               [fabricType]=\"fabricType\"\n              >\n              </app-recommended>\n            </div>\n            <div class=\"action-bar\">\n              <app-next-button [selectedItem]=\"selectedIndex\"\n                               [title]=\"title\"\n                               [url]=\"url\">\n\n              </app-next-button>\n            </div>\n          </div>\n          <div class=\"section-split-layout-preview-container\">\n            <div class=\"preview\"></div>\n            <div *ngIf=\"product\" class=\"helper-panel\" data-toggler=\".is-active\" id=\"helper-panel\"\n                 [ngClass]=\"{'is-active': isOpen}\">\n              <button class=\"helper-panel-button\" data-toggle=\"helper-panel\" (click)=\"toggle()\">\n                <img alt=\"open arrow\"\n                     class=\"inject-me\" src=\"assets/img/icons/arrow-left-icon.svg\">\n              </button>\n              <div class=\"helper-panel-content\">\n                <p>\n                  <strong>Composition</strong>: {{product?.description}}\n                  <br>\n                  <strong>Meters Remaining</strong>: #\n                  {{product?.quantityOnHand | number:'1.0-0'}}\n                </p>\n                <p>\n                  <strong>Fabric ID</strong>: {{product.id}}\n                  <br>\n                  <strong>Range {{product.fabricRange?.description}}</strong>| {{product.fabricRange?.currency}}\n                  {{product.fabricRange?.retailPrice}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fabric/fabric-default/fabric-default.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fabric/fabric-default/fabric-default.component.ts ***!
  \*******************************************************************/
/*! exports provided: FabricDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricDefaultComponent", function() { return FabricDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/global-session-storage.service */ "./src/app/shared/services/global-session-storage.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fabric.service */ "./src/app/fabric/fabric.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter.service */ "./src/app/fabric/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// services




var FabricDefaultComponent = /** @class */ (function () {
    function FabricDefaultComponent(router, route, fabricService, navigationService, filterService) {
        this.router = router;
        this.route = route;
        this.fabricService = fabricService;
        this.navigationService = navigationService;
        this.filterService = filterService;
        this.headerTitle = '';
        this.selectedIndex = 0;
        this.fabricSessionType = '';
        this.selectedGarment = '';
        this.recommended = [];
        this.breadcrumbData = [];
        this.sideMenuData = [];
        this.fabricType = '';
        this.isOpen = false;
        this.isOutOfStock = false;
        this.filteredCount = 0;
        this.selectedGarment = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selectedGarment');
    }
    FabricDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all snapshot parameter
        var data = this.route.snapshot.data;
        this.headerTitle = data.title;
        this.fabricType = data.type;
        this.fabricSessionType = data.sessionType;
        this.navigationService.getBreadcrumbData().subscribe(function (it) {
            _this.breadcrumbData = it.Fabric;
        });
        var filterdFabrics = this.filterService.filterdFabrics;
        if (filterdFabrics.length > 0) {
            this.recommended = filterdFabrics;
        }
        else {
            this.getFabricDefaultData();
        }
        console.log('flitered fabrics', filterdFabrics);
        console.log('recommended', this.recommended);
        var filteredCount = this.filterService.appliedFiltersCount;
        if (filteredCount) {
            this.filteredCount = filteredCount;
        }
    };
    FabricDefaultComponent.prototype.getOutOfStockData = function () {
        if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType)) {
            var allSearched = JSON.parse(_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType));
            if (allSearched.length > 0) {
                for (var i = 0; i < allSearched.length; i++) {
                    for (var j = 0; j < this.recommended.length; j++) {
                        if (allSearched[i] === this.recommended[j].id) {
                            allSearched[i].isOutOfStock = false;
                        }
                        else {
                            allSearched[i].isOutOfStock = true;
                        }
                    }
                }
            }
            _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + this.fabricType, JSON.stringify(allSearched));
        }
    };
    FabricDefaultComponent.prototype.goToFilterPage = function () {
        this.router.navigate(['./fabric/filter']);
    };
    FabricDefaultComponent.prototype.getSelectedIndex = function (event) {
        this.selectedIndex = event.id;
        this.product = event;
    };
    FabricDefaultComponent.prototype.getFabricDefaultData = function () {
        var _this = this;
        this.fabricService.getFabrics()
            .subscribe(function (res) {
            _this.filterService.allFabrics = res;
            _this.recommended = res['collection'];
            _this.recommended.filter(function (_) { return _.isOutOfStock = false; });
            if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(_this.fabricSessionType)) {
                _this.selectedIndex = _this.recommended.findIndex(function (item) {
                    return item.id === _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(_this.fabricSessionType);
                });
                _this.product = _this.recommended[_this.selectedIndex];
                _this.getOutOfStockData();
                _this.disableNextButton();
            }
            else {
                _this.product = _this.recommended[_this.selectedIndex];
                _this.product.selected = true;
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + _this.fabricType, JSON.stringify(_this.product));
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession(_this.fabricSessionType, _this.product.id);
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession('selections.factoryCode', _this.product.factoryCode);
            }
        });
    };
    FabricDefaultComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    // disabled next button if selected fabric is not available
    FabricDefaultComponent.prototype.disableNextButton = function () {
        if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType)) {
            var selectedFabricId_1 = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(this.fabricSessionType);
            var allFabrics = JSON.parse(_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType));
            if (allFabrics.length > 0) {
                var fabric = allFabrics.filter(function (_) { return _.id === selectedFabricId_1; });
                if (fabric[0].isOutOfStock) {
                    this.selectedIndex = -1;
                }
                else {
                    this.selectedIndex = -1;
                }
            }
        }
    };
    FabricDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jacket-default',
            template: __webpack_require__(/*! ./fabric-default.component.html */ "./src/app/fabric/fabric-default/fabric-default.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _fabric_service__WEBPACK_IMPORTED_MODULE_4__["FabricService"],
            _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            _filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]])
    ], FabricDefaultComponent);
    return FabricDefaultComponent;
}());



/***/ }),

/***/ "./src/app/fabric/fabric-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/fabric/fabric-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FabricRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricRoutingModule", function() { return FabricRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/fabric/filter/filter.component.ts");
/* harmony import */ var _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fabric-default/fabric-default.component */ "./src/app/fabric/fabric-default/fabric-default.component.ts");
/* harmony import */ var _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lining-default/lining-default.component */ "./src/app/fabric/lining-default/lining-default.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_guards */ "./src/app/_guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'filter',
        component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Filter', type: 'Fabric Filter' },
    },
    {
        path: 'dress-shirt',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Dress Shirt Fabric', type: 'DressShirt', sessionType: 'selections.selectedDressShirtDefaultFabric' },
    },
    {
        path: 'vest',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Vest Fabric', type: 'Vest', sessionType: 'selections.selectedVestDefaultFabric' },
    },
    {
        path: 'jacket',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Jacket Fabric', type: 'Jacket', sessionType: 'selections.selectedJacketDefaultFabric' },
    },
    {
        path: 'pant',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Pant Fabric', type: 'Pant', sessionType: 'selections.selectedPantDefaultFabric' },
    },
    {
        path: 'suit',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Suit Fabric', type: 'Suit', sessionType: 'selections.selectedSuitDefaultFabric' },
    },
    {
        path: 'tuxedo',
        component: _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_3__["FabricDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Tuxedo Fabric', type: 'Tuxedo', sessionType: 'selections.selectedTuxedoDefaultFabric' },
    },
    {
        path: 'body-lining',
        component: _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_4__["LiningDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Body Lining', type: 'BodyLining', sessionType: 'selections.selectedBodyLiningDefaultFabric' },
    },
    {
        path: 'sleeve-lining',
        component: _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_4__["LiningDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Sleeve Lining', type: 'SleeveLining', sessionType: 'selections.selectedSleeveLiningDefaultFabric' },
    },
    {
        path: 'vest-lining',
        component: _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_4__["LiningDefaultComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { title: 'Vest Lining', type: 'VestLining', sessionType: 'selections.selectedVestLiningDefaultFabric' },
    },
];
var FabricRoutingModule = /** @class */ (function () {
    function FabricRoutingModule() {
    }
    FabricRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], FabricRoutingModule);
    return FabricRoutingModule;
}());



/***/ }),

/***/ "./src/app/fabric/fabric.module.ts":
/*!*****************************************!*\
  !*** ./src/app/fabric/fabric.module.ts ***!
  \*****************************************/
/*! exports provided: FabricModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricModule", function() { return FabricModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fabric_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fabric-routing.module */ "./src/app/fabric/fabric-routing.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/fabric/filter/filter.component.ts");
/* harmony import */ var _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabric-default/fabric-default.component */ "./src/app/fabric/fabric-default/fabric-default.component.ts");
/* harmony import */ var _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lining-default/lining-default.component */ "./src/app/fabric/lining-default/lining-default.component.ts");
/* harmony import */ var _containers_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/recommended/recommended.component */ "./src/app/fabric/containers/recommended/recommended.component.ts");
/* harmony import */ var _containers_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/search/search.component */ "./src/app/fabric/containers/search/search.component.ts");
/* harmony import */ var _containers_scan_scan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/scan/scan.component */ "./src/app/fabric/containers/scan/scan.component.ts");
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fabric.service */ "./src/app/fabric/fabric.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FabricModule = /** @class */ (function () {
    function FabricModule() {
    }
    FabricModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fabric_routing_module__WEBPACK_IMPORTED_MODULE_3__["FabricRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
            ],
            declarations: [
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"],
                _fabric_default_fabric_default_component__WEBPACK_IMPORTED_MODULE_7__["FabricDefaultComponent"],
                _lining_default_lining_default_component__WEBPACK_IMPORTED_MODULE_8__["LiningDefaultComponent"],
                _containers_scan_scan_component__WEBPACK_IMPORTED_MODULE_11__["ScanComponent"],
                _containers_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"],
                _containers_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            ],
            providers: [
                _fabric_service__WEBPACK_IMPORTED_MODULE_12__["FabricService"],
            ],
        })
    ], FabricModule);
    return FabricModule;
}());



/***/ }),

/***/ "./src/app/fabric/fabric.service.ts":
/*!******************************************!*\
  !*** ./src/app/fabric/fabric.service.ts ***!
  \******************************************/
/*! exports provided: FabricService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricService", function() { return FabricService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/global-session-storage.service */ "./src/app/shared/services/global-session-storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FabricService = /** @class */ (function () {
    function FabricService(http) {
        this.http = http;
        this.baseUrl = '';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].essentialsApiUrl;
    }
    FabricService.prototype.getFabrics = function () {
        var productLabel = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selectedBrands');
        var productType = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selectedGarment');
        var fabricType = 'F';
        var language = 'en';
        var company = 'TMW';
        /* tslint:disable-next-line:max-line-length  --> disabled due to adding extra space in url */
        return this.http.get('http://localhost:4200/assets/mock_data/fabric/fabric.json');
        //return this.http.get<Fabric[]>(`${this.baseUrl}fabrics?company=${company}&product_label=${productLabel}&product_type=${productType}&fabric_type=${fabricType}&language=${language}`);
    };
    FabricService.prototype.getLining = function () {
        var productLabel = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selectedBrands');
        var productType = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selectedGarment');
        var fabricType = 'L';
        var language = 'en';
        var company = 'TMW';
        var factoryCode = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage('selections.factoryCode');
        /* tslint:disable-next-line:max-line-length */
        return this.http.get('http://localhost:4200/assets/mock_data/fabric/fabric.json');
        //return this.http.get<Fabric[]>(`${this.baseUrl}fabrics?company=${company}&product_label=${productLabel}&factory_code=${factoryCode}&product_type=${productType}&fabric_type=${fabricType}&language=${language}`);
    };
    FabricService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FabricService);
    return FabricService;
}());



/***/ }),

/***/ "./src/app/fabric/filter.service.ts":
/*!******************************************!*\
  !*** ./src/app/fabric/filter.service.ts ***!
  \******************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
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

var FilterService = /** @class */ (function () {
    function FilterService() {
        this.allFabrics = [];
        this.filterdFabrics = [];
    }
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/fabric/filter/filter.component.html":
/*!*****************************************************!*\
  !*** ./src/app/fabric/filter/filter.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fabric-selection-filter-default default\">\n    <div class=\"app-dashboard shrink-medium\">\n      <app-hamburger [inputData]=\"breadcrumbData\"></app-hamburger>\n      <div class=\"app-dashboard-body off-canvas-wrapper\">\n        <app-sidemenu [sideBarData]=\"'selectedGarment'\"></app-sidemenu>\n        <div class=\"app-dashboard-body-content off-canvas-content\" data-off-canvas-content>\n          <div id=\"filterOverlay\" class=\"selection-showhide-overlay is-active\">\n            <div class=\"layout-centered\">\n              <header class=\"layout-centered-header\">\n                <h5 class=\"layout-centered-header-title\">Refine Your Fabrics</h5>\n                <div class=\"layout-centered-header-subtitle\">{{filtered.length}} swatches</div>\n                <button id=\"selectionOverlayClose\" class=\"close-button\" aria-label=\"Close modal\" type=\"button\" (click)=\"appliedFilter()\">\n                  <span aria-hidden=\"true\">Done</span>\n                </button>\n              </header>\n\n              <div class=\"layout-centered-row\">\n                <h6 class=\"layout-centered-row-title\">Color</h6>\n                <div class=\"button-group align-center filter-selection\" data-filter-section>\n                  <button class=\"button clear\" *ngFor=\"let color of filterColors;\"\n                          (click)=\"filterByColor(color)\"\n                          [ngClass]=\"{'is-active': color?.isFilter}\">\n                    <img class=\"selection-item-swatch\" src=\"http://placehold.it/152x57\" alt=\"suit icon\">\n                    <br>{{color.description}}</button>\n                </div>\n              </div>\n\n              <hr class=\"section-divider\">\n\n              <div class=\"layout-centered-row\">\n                <h6 class=\"layout-centered-row-title\">PATTERN</h6>\n                <div class=\"button-group align-center filter-selection\" data-filter-section>\n                  <button class=\"button clear\" *ngFor=\"let pattern of filterPattern;\"\n                          (click)=\"filterByPattern(pattern)\"\n                          [ngClass]=\"{'is-active': pattern?.isFilter}\">\n                    <img class=\"selection-item-swatch\" src=\"http://placehold.it/152x57\" alt=\"suit icon\">\n                    <br>{{pattern.description}}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"reveal modal-save\" id=\"modalSave\" data-reveal data-animation-in=\"fade-in fast\" data-animation-out=\"fade-out fast\">\n            <h5 class=\"modal-title\">Save Customization?</h5>\n            <p class=\"modal-subtitle\">Would you like to save your progress before ending your session? This allows you to pick up where you left off later.</p>\n            <div class=\"button-list\">\n              <button class=\"button hollow\">Delete &amp; Log Out</button>\n              <button class=\"button\">Save</button>\n            </div>\n        </div>\n      </div>\n      \n      <button id=\"selectModalClose\" class=\"select-modal-close-button\" \n      (click)=\"appliedFilter()\">Done</button>\n        <!-- <div *ngFor=\"let fabric of filtered;\">\n            {{fabric.id}} {{fabric.fabricColorCode}} {{fabric.patternGroupCode}}\n          </div> -->\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/fabric/filter/filter.component.ts":
/*!***************************************************!*\
  !*** ./src/app/fabric/filter/filter.component.ts ***!
  \***************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter.service */ "./src/app/fabric/filter.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// services


var FilterComponent = /** @class */ (function () {
    function FilterComponent(filterService, _location, navigationService) {
        this.filterService = filterService;
        this._location = _location;
        this.navigationService = navigationService;
        this.recommended = [];
        this.filtered = [];
        this.breadcrumbData = [];
        this.sideMenuData = [];
        // get real data from fabricColorGroups
        this.filterColors = [];
        // get real data from filterPatternGroups
        this.filterPattern = [];
        this.filters = {
            fabricColor: [],
            pattern: [],
        };
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var allFabrics = this.filterService.allFabrics;
        this.recommended = allFabrics['collection'];
        this.filterColors = allFabrics['colorGroups'];
        this.filterPattern = allFabrics['patternGroups'];
        this.navigationService.getBreadcrumbData().subscribe(function (it) {
            _this.breadcrumbData = it.Fabric;
        });
    };
    FilterComponent.prototype.filterByColor = function (color) {
        var isFilter = false;
        if (color.isFilter) {
            color.isFilter = isFilter;
            this.filters.fabricColor = this.filters.fabricColor.filter(function (res) { return res.id !== color.id; });
        }
        else {
            color.isFilter = !isFilter;
            this.filters.fabricColor.push(color);
        }
        this.filtered = this.multiFilter(this.recommended, this.filters);
    };
    FilterComponent.prototype.filterByPattern = function (pattern) {
        var isFilter = false;
        if (pattern.isFilter) {
            pattern.isFilter = isFilter;
            this.filters.pattern = this.filters.pattern.filter(function (res) { return res.patternGroupCode !== pattern.patternGroupCode; });
        }
        else {
            pattern.isFilter = !isFilter;
            this.filters.pattern.push(pattern);
        }
        this.filtered = this.multiFilter(this.recommended, this.filters);
    };
    // apply filter on basis of filter condition
    FilterComponent.prototype.multiFilter = function (array, filter) {
        var filters = underscore__WEBPACK_IMPORTED_MODULE_2__["_"].clone(filter);
        // delete pattern and color from object if length is 0
        // before filters
        console.log('filter is', filter);
        if (filters.fabricColor.length === 0) {
            delete filters.fabricColor;
        }
        if (filters.pattern.length === 0) {
            delete filters.pattern;
        }
        if (filters.pattern) {
            array = array.filter(function (el) {
                var found = false;
                filters.pattern.forEach(function (patternFilter, index) {
                    if (el.patternGroupCode === patternFilter.patternGroupCode) {
                        found = true;
                    }
                });
                return found;
            });
        }
        if (filters.fabricColor) {
            array = array.filter(function (el) {
                var found = false;
                filters.fabricColor.forEach(function (fabricColorFilter, index) {
                    el.fabricColorGroupCodes.forEach(function (fabricColor, index) {
                        if (fabricColor === fabricColorFilter.id) {
                            found = true;
                        }
                    });
                });
                return found;
            });
        }
        console.log(array);
        return array;
    };
    // This method will fire when user click on Done button.
    FilterComponent.prototype.appliedFilter = function () {
        this.filterService.filterdFabrics = this.filtered;
        this.filterService.appliedFiltersCount = this.countAllFilters();
        this._location.back();
    };
    // Count all filters applied on colors and pattern
    FilterComponent.prototype.countAllFilters = function () {
        var countColorFilters = this.filters.fabricColor.length;
        var countPatternFilters = this.filters.pattern.length;
        var totalFilters = countColorFilters + countPatternFilters;
        return totalFilters;
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/fabric/filter/filter.component.html"),
        }),
        __metadata("design:paramtypes", [_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/fabric/lining-default/lining-default.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/fabric/lining-default/lining-default.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fabric-selection-jacket-default default\">\n  <div class=\"app-dashboard\">\n    <app-hamburger [inputData]=\"breadcrumbData\"></app-hamburger>\n    <div class=\"app-dashboard-body off-canvas-wrapper\">\n      <div class=\"app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium\"\n           data-off-canvas\n           id=\"app-dashboard-sidebar\">\n        <app-sidemenu [sideBarData]=\"'selectedGarment'\"></app-sidemenu>\n      </div>\n      <div class=\"app-dashboard-body-content off-canvas-content\" data-off-canvas-content>\n        <div class=\"section-split-layout-wrapper\">\n          <div class=\"section-split-layout-selections\">\n            <app-search (selectedProduct)=\"getSelectedIndex($event)\"\n                        [headerTitle]=\"headerTitle\"\n                        [product]=\"product\"\n                        [recommended]=\"recommended\"\n                        [fabricSessionType]=\"fabricSessionType\"\n                        [fabricType]=\"fabricType\"\n            >\n            </app-search>\n            <!--<hr class=\"section-divider\">-->\n            <div class=\"recommended_section\">\n              <header class=\"section-header\" id=\"recommended_header\">\n                <h6 class=\"section-label\">Recommended</h6>\n                <button (click)=\"goToFilterPage()\" class=\"section-header-detail\">Filtered\n                  <span id=\"selectedFilterCount\" class=\"badge\">{{filteredCount}}</span></button>\n              </header>\n              <app-recommended (selectedProduct)=\"getSelectedIndex($event)\"\n                               [recommended]=\"recommended\"\n                               [fabricSessionType]=\"fabricSessionType\"\n                               [fabricType]=\"fabricType\"\n              >\n              </app-recommended>\n            </div>\n            <div class=\"action-bar\">\n              <app-next-button [selectedItem]=\"selectedIndex\"\n                               [title]=\"'Pant Fabric'\"\n                               [url]=\"'./fabric/pant-default'\">\n\n              </app-next-button>\n            </div>\n          </div>\n          <div class=\"section-split-layout-preview-container\">\n            <div class=\"preview\"></div>\n            <div *ngIf=\"product\" class=\"helper-panel\" data-toggler=\".is-active\" id=\"helper-panel\"\n                 [ngClass]=\"{'is-active': isOpen}\">\n              <button class=\"helper-panel-button\" data-toggle=\"helper-panel\" (click)=\"toggle()\">\n                <img alt=\"open arrow\"\n                     class=\"inject-me\" src=\"assets/img/icons/arrow-left-icon.svg\">\n              </button>\n              <div class=\"helper-panel-content\">\n                <p>\n                  <strong>Composition</strong>: {{product?.description}}\n                  <br>\n                  <strong>Meters Remaining</strong>: #\n                  {{product?.quantityOnHand | number:'1.0-0'}}\n                </p>\n                <p>\n                  <strong>Fabric ID</strong>: {{product.id}}\n                  <br>\n                  <strong>Range {{product.fabricRange?.description}}</strong>| {{product.fabricRange?.currency}}\n                  {{product.fabricRange?.retailPrice}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fabric/lining-default/lining-default.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fabric/lining-default/lining-default.component.ts ***!
  \*******************************************************************/
/*! exports provided: LiningDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiningDefaultComponent", function() { return LiningDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/global-session-storage.service */ "./src/app/shared/services/global-session-storage.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fabric.service */ "./src/app/fabric/fabric.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter.service */ "./src/app/fabric/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// services




var LiningDefaultComponent = /** @class */ (function () {
    function LiningDefaultComponent(router, route, fabricService, navigationService, filterService) {
        this.router = router;
        this.route = route;
        this.fabricService = fabricService;
        this.navigationService = navigationService;
        this.filterService = filterService;
        this.headerTitle = '';
        this.selectedIndex = 0;
        this.fabricSessionType = '';
        this.recommended = [];
        this.breadcrumbData = [];
        this.sideMenuData = [];
        this.fabricType = '';
        this.isOpen = false;
        this.isOutOfStock = false;
    }
    LiningDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all snapshot parameter
        var data = this.route.snapshot.data;
        this.headerTitle = data.title;
        this.fabricType = data.type;
        this.fabricSessionType = data.sessionType;
        this.navigationService.getBreadcrumbData().subscribe(function (it) {
            _this.breadcrumbData = it.Fabric;
        });
        this.getLiningDefaultData();
    };
    LiningDefaultComponent.prototype.getOutOfStockData = function () {
        if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType)) {
            var allSearched = JSON.parse(_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType));
            if (allSearched.length > 0) {
                for (var i = 0; i < allSearched.length; i++) {
                    for (var j = 0; j < this.recommended.length; j++) {
                        if (allSearched[i] === this.recommended[j].id) {
                            allSearched[i].isOutOfStock = false;
                        }
                        else {
                            allSearched[i].isOutOfStock = true;
                        }
                    }
                }
            }
            _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + this.fabricType, JSON.stringify(allSearched));
        }
    };
    LiningDefaultComponent.prototype.goToFilterPage = function () {
        this.filterService.allFabrics = this.recommended;
        this.router.navigate(['./fabric/filter']);
    };
    LiningDefaultComponent.prototype.getSelectedIndex = function (event) {
        this.selectedIndex = event.id;
        this.product = event;
    };
    LiningDefaultComponent.prototype.getLiningDefaultData = function () {
        var _this = this;
        this.fabricService.getFabrics()
            .subscribe(function (res) {
            _this.recommended = res['collection'];
            _this.recommended.filter(function (_) { return _.isOutOfStock = false; });
            if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(_this.fabricSessionType)) {
                _this.selectedIndex = _this.recommended.findIndex(function (item) {
                    return item.id === _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(_this.fabricSessionType);
                });
                _this.product = _this.recommended[_this.selectedIndex];
                _this.getOutOfStockData();
                _this.disableNextButton();
            }
            else {
                _this.product = _this.recommended[_this.selectedIndex];
                _this.product.selected = true;
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession("selections.searchFabric" + _this.fabricType, JSON.stringify(_this.product));
                _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].storeDataInSession(_this.fabricSessionType, _this.product.id);
            }
        });
    };
    LiningDefaultComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    // disabled next button if selected fabric is not available
    LiningDefaultComponent.prototype.disableNextButton = function () {
        if (_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType)) {
            var selectedFabricId_1 = _shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage(this.fabricSessionType);
            var allFabrics = JSON.parse(_shared_services_global_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSessionStorageService"].getSessionStorage("selections.searchFabric" + this.fabricType));
            if (allFabrics.length > 0) {
                var fabric = allFabrics.filter(function (_) { return _.id === selectedFabricId_1; });
                if (fabric[0].isOutOfStock) {
                    this.selectedIndex = -1;
                }
                else {
                    this.selectedIndex = -1;
                }
            }
        }
    };
    LiningDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vest-lining',
            template: __webpack_require__(/*! ./lining-default.component.html */ "./src/app/fabric/lining-default/lining-default.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _fabric_service__WEBPACK_IMPORTED_MODULE_4__["FabricService"],
            _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            _filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]])
    ], LiningDefaultComponent);
    return LiningDefaultComponent;
}());



/***/ })

}]);
//# sourceMappingURL=fabric-fabric-module.js.map