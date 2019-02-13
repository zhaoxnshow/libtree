import { ElementRef } from '@angular/core';
export declare class ChangeThemeWhenHoverDirective {
    private el;
    bgColor: string;
    fontColor: string;
    constructor(el: ElementRef);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
