import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  NgModel,
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { of, from, fromEvent, combineLatest, interval} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
  ngOnInit() {
    const intervalOne$ = interval(1000);
    const intervalTwo$ = interval(2000);

     combineLatest(
         intervalOne$,
          intervalTwo$ 
      ).subscribe(all => console.log('fss', all)); 

  }


 
}
