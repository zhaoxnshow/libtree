/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibtreeComponent } from './components/libtree.component';
import { FormsModule } from '@angular/forms';
import { ChangeThemeWhenHoverDirective } from './directives/change-theme-hover.directive';
import { LibtreeUtil } from './utils/libtree.util';
var LibTreeModule = /** @class */ (function () {
    function LibTreeModule() {
    }
    LibTreeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LibtreeComponent, ChangeThemeWhenHoverDirective],
                    imports: [CommonModule, FormsModule],
                    exports: [LibtreeComponent],
                    providers: [LibtreeUtil]
                },] },
    ];
    return LibTreeModule;
}());
export { LibTreeModule };
function LibTreeModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LibTreeModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LibTreeModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJ0cmVlLXRlc3QvIiwic291cmNlcyI6WyJzcmMvbGlidHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQTtBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFJbEQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFDLDZCQUE2QixDQUFDO29CQUM5RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUN6Qjs7d0JBZEQ7O1NBZWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExpYnRyZWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlidHJlZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUaGVtZVdoZW5Ib3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jaGFuZ2UtdGhlbWUtaG92ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGlidHJlZVV0aWwgfSBmcm9tICcuL3V0aWxzL2xpYnRyZWUudXRpbCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTGlidHJlZUNvbXBvbmVudCxDaGFuZ2VUaGVtZVdoZW5Ib3ZlckRpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtMaWJ0cmVlQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtMaWJ0cmVlVXRpbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpYlRyZWVNb2R1bGUge1xyXG4gIC8vIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgbmdNb2R1bGU6IExpYnRyZWVNb2R1bGUsXHJcbiAgLy8gICAgIHByb3ZpZGVyczogW11cclxuICAvLyAgIH07XHJcbiAgLy8gfVxyXG59Il19