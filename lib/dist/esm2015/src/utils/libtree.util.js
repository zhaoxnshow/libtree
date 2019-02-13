/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class LibtreeUtil {
    constructor() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isBlank(val) {
        if (val !== null &&
            val !== undefined &&
            val !== '' &&
            val !== 'null' &&
            val != 'undefined' &&
            val.replace(/^\s+|\s+$/gm, '') !== '') {
            return false;
        }
        return true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    static isNull(val) {
        if (val !== null && val !== undefined) {
            return false;
        }
        return true;
    }
}
LibtreeUtil.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LibtreeUtil.ctorParameters = () => [];
function LibtreeUtil_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LibtreeUtil.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LibtreeUtil.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlidHJlZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlidHJlZS10ZXN0LyIsInNvdXJjZXMiOlsic3JjL3V0aWxzL2xpYnRyZWUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNO0lBRUo7S0FDQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVU7UUFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUk7WUFDWixHQUFHLEtBQUssU0FBUztZQUNqQixHQUFHLEtBQUssRUFBRTtZQUNWLEdBQUcsS0FBSyxNQUFNO1lBQ2QsR0FBRyxJQUFJLFdBQVc7WUFDbEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLEtBQUssRUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7SUFHUCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVU7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7O1lBdkJmLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaWJ0cmVlVXRpbCB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzQmxhbmsodmFsOnN0cmluZyk6IGJvb2xlYW57XHJcbiAgICBpZiAodmFsICE9PSBudWxsICYmIFxyXG4gICAgICAgIHZhbCAhPT0gdW5kZWZpbmVkICYmIFxyXG4gICAgICAgIHZhbCAhPT0gJycgJiYgXHJcbiAgICAgICAgdmFsICE9PSAnbnVsbCcgJiYgXHJcbiAgICAgICAgdmFsICE9ICd1bmRlZmluZWQnICYmIFxyXG4gICAgICAgIHZhbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwnJykgIT09ICcnXHJcbiAgICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNOdWxsKHZhbDpPYmplY3QpOiBib29sZWFue1xyXG4gICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXX0=