import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[changeThemeWhenHover]'
})
export class ChangeThemeWhenHoverDirective {

  @Input() bgColor: string;  
  @Input() fontColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.fontColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.color = null;
  }
}