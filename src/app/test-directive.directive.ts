import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[addClass]'
})
export class TestDirectiveDirective {
  @Input() className:any;

  constructor(private el:ElementRef) {
    this.el.nativeElement.setAttribute('class', this.className)
   }

}
