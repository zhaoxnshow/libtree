/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
var ChangeThemeWhenHoverDirective = /** @class */ (function () {
    function ChangeThemeWhenHoverDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ChangeThemeWhenHoverDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.backgroundColor = this.bgColor;
        this.el.nativeElement.style.color = this.fontColor;
    };
    /**
     * @return {?}
     */
    ChangeThemeWhenHoverDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.style.backgroundColor = null;
        this.el.nativeElement.style.color = null;
    };
    ChangeThemeWhenHoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[changeThemeWhenHover]'
                },] },
    ];
    /** @nocollapse */
    ChangeThemeWhenHoverDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ChangeThemeWhenHoverDirective.propDecorators = {
        "bgColor": [{ type: Input },],
        "fontColor": [{ type: Input },],
        "onMouseEnter": [{ type: HostListener, args: ['mouseenter',] },],
        "onMouseLeave": [{ type: HostListener, args: ['mouseleave',] },],
    };
    return ChangeThemeWhenHoverDirective;
}());
export { ChangeThemeWhenHoverDirective };
function ChangeThemeWhenHoverDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ChangeThemeWhenHoverDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ChangeThemeWhenHoverDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ChangeThemeWhenHoverDirective.propDecorators;
    /** @type {?} */
    ChangeThemeWhenHoverDirective.prototype.bgColor;
    /** @type {?} */
    ChangeThemeWhenHoverDirective.prototype.fontColor;
    /** @type {?} */
    ChangeThemeWhenHoverDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXRoZW1lLWhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnRyZWUtdGVzdC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2NoYW5nZS10aGVtZS1ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBVXhFLHVDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUNqQzs7OztJQUUyQixvREFBWTs7OztRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUd6QixvREFBWTs7OztRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7O2dCQWxCNUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7O2dCQUptQixVQUFVOzs7NEJBTzNCLEtBQUs7OEJBQ0wsS0FBSztpQ0FLTCxZQUFZLFNBQUMsWUFBWTtpQ0FLekIsWUFBWSxTQUFDLFlBQVk7O3dDQWxCNUI7O1NBS2EsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NoYW5nZVRoZW1lV2hlbkhvdmVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVRoZW1lV2hlbkhvdmVyRGlyZWN0aXZlIHtcclxuXHJcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nOyAgXHJcbiAgQElucHV0KCkgZm9udENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iZ0NvbG9yO1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5mb250Q29sb3I7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG51bGw7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBudWxsO1xyXG4gIH1cclxufSJdfQ==