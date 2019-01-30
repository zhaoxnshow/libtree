import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  EventEmitter,
  ElementRef,
  Renderer2,
  ContentChild,
  Input,
  OnInit,
  OnDestroy,
  Output
} from '@angular/core';

@Component({
  selector: 'custom-selector',
  styleUrls: ['./template.component.css'],
  templateUrl: './template.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit, OnDestroy {
  private _customInput2 = false;

  @Input() customInput1: string;

  @Input() set customInput2(val: boolean) {
    this._customInput2 = val;
    // some logic
  }

  get customInput2() {
    return this._customInput2;
  }

  @Input() customInput3: string;

  @Input() customSubInput1: string;

  @Output() customOutput = new EventEmitter();

  constructor(private render: Renderer2) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
