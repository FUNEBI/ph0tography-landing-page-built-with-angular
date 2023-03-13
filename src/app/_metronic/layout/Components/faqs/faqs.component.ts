import { Component } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})

export class FaqsComponent {
  plusSign = faPlus;
  closeSign = faClose;
  enableEdit = false;
  enableEditIndex = null;

  enableEditMethod() {
    this.enableEdit = !this.enableEdit;
    // this.enableEditIndex = i;
    // console.log(i, e);
    // this.editable = !this.editable
    // console.log(this.editable)
  }
}
