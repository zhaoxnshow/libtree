import { Component } from '@angular/core';
import { InitData } from '../assets/initdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cds-angular-library';
  customData = InitData.libData;
  constructor(){
  }
}
