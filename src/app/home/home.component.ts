import { Component } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: SlideInterface[] = [
    { url: '/assets/solar.jpg', title: 'beach' },
    { url: '/assets/image-2.jpeg', title: 'boat' },
    { url: '/assets/image-3.jpeg', title: 'forest' },
    { url: '/assets/image-4.jpeg', title: 'city' },
    { url: '/assets/image-5.jpeg', title: 'italy' },
    { url: '/assets/ltm.jpeg', title: 'ltm' },
  ];
}
