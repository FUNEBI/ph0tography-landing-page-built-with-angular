import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})

export class IframeComponent {
  
  url:any;
  constructor(public sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    // this.url = "https://goo.gl/maps/WyhHnKfi1EFB3MPj8" + "&output=embed"
  }
}
