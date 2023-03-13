import { NgModule } from '@angular/core';
import { Routing } from '../../Pages/routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
// import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
// import { FooterComponent } from './Components/footer/footer.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from './Components/email/email.component';
import { IframeComponent } from './Components/iframe/iframe.component';
import { InforComponent } from './Components/infor/infor.component';
import { FormsComponent } from './Components/forms/forms.component';
// import { ClientsComponent } from './Components/clients/clients.component';
// import { ServicesComponent } from './Components/services/services.component';
// import { AboutUsComponent } from './Components/about-us/about-us.component';
// import { CardsComponent } from './Components/cards/cards.component';
// import { ImagesAreaComponent } from './Components/images-area/images-area.component';
// import { ProgressAreaComponent } from './Components/progress-area/progress-area.component';
// import { FaqsComponent } from './Components/faqs/faqs.component';
// import { PhotographerComponent } from './Components/photographer/photographer.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    // FormsComponent,
    // InforComponent,
    
    // EmailComponent,
    // ClientsComponent,
    // FaqsComponent,
    // ProgressAreaComponent,
    // ImagesAreaComponent,
    // CardsComponent,
    // AboutUsComponent,
    // ServicesComponent,
    // PhotographerComponent,
    // NavBarComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InlineSVGModule,
    NgbDropdownModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
