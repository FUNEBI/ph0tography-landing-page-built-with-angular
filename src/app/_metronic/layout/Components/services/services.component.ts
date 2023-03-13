import { Component, ViewEncapsulation } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {faPalette} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  userIcon = faUser;
  lightIcon = faLightbulb;
  paletteIcon = faPalette;
}
