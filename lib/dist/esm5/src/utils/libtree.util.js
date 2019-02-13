/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var LibtreeUtil = /** @class */ (function () {
    function LibtreeUtil() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    LibtreeUtil.isBlank = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val !== null &&
            val !== undefined &&
            val !== '' &&
            val !== 'null' &&
            val != 'undefined' &&
            val.replace(/^\s+|\s+$/gm, '') !== '') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LibtreeUtil.isNull = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val !== null && val !== undefined) {
            return false;
        }
        return true;
    };
    LibtreeUtil.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LibtreeUtil.ctorParameters = function () { return []; };
    return LibtreeUtil;
}());
export { LibtreeUtil };
function LibtreeUtil_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LibtreeUtil.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LibtreeUtil.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlidHJlZS51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlidHJlZS10ZXN0LyIsInNvdXJjZXMiOlsic3JjL3V0aWxzL2xpYnRyZWUudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFLekM7S0FDQzs7Ozs7SUFFYSxtQkFBTzs7OztjQUFDLEdBQVU7UUFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUk7WUFDWixHQUFHLEtBQUssU0FBUztZQUNqQixHQUFHLEtBQUssRUFBRTtZQUNWLEdBQUcsS0FBSyxNQUFNO1lBQ2QsR0FBRyxJQUFJLFdBQVc7WUFDbEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLEtBQUssRUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7SUFHQSxrQkFBTTs7OztjQUFDLEdBQVU7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Z0JBdkJmLFVBQVU7Ozs7c0JBRlg7O1NBR2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpYnRyZWVVdGlsIHtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNCbGFuayh2YWw6c3RyaW5nKTogYm9vbGVhbntcclxuICAgIGlmICh2YWwgIT09IG51bGwgJiYgXHJcbiAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiYgXHJcbiAgICAgICAgdmFsICE9PSAnJyAmJiBcclxuICAgICAgICB2YWwgIT09ICdudWxsJyAmJiBcclxuICAgICAgICB2YWwgIT0gJ3VuZGVmaW5lZCcgJiYgXHJcbiAgICAgICAgdmFsLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCcnKSAhPT0gJydcclxuICAgICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc051bGwodmFsOk9iamVjdCk6IGJvb2xlYW57XHJcbiAgICBpZiAodmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSJdfQ==