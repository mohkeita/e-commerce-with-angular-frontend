import { Component } from '@angular/core';
import {IProduct} from './shared/models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-commerce';

  constructor() {
  }

  ngOnInit(): void {

  }
}
