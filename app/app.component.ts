

import {Component, Inject} from '@angular/core';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  img: string = "./assets/images/photo1.jpg";
  img1: string = "./assets/images/photo2.jpg";
  img2: string = "./assets/images/photo3.jpg";



}
