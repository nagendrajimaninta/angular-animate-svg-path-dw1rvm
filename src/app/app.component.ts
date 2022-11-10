import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations:[
    trigger('path' , [
      transition(':enter' , [style({ 'stroke-dashoffset': "120" }),
        animate(1000, style({ 'stroke-dashoffset': "0" })), ])
    ]),
    trigger('path2' , [
      transition(':enter' , [style({ 'stroke-dashoffset': "743" ,fill:'#ffffff' }),
        animate(5000, style({ 'stroke-dashoffset': "370" , fill:'green' })), ])
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  show1 = false;
  show2 = false;
}
