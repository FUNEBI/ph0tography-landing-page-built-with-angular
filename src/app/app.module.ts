import { InforComponent } from './_metronic/layout/Components/infor/infor.component';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesComponent } from './_metronic/layout/Components/services/services.component';
import { AppComponent } from './app.component';
import { UtilityService } from './_metronic/alert-services/UtilitiesService';
import { FooterComponent } from './_metronic/layout/Components/footer/footer.component';
import { NavBarComponent } from './_metronic/layout/Components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClientsComponent} from './_metronic/layout/Components/clients/clients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IframeComponent } from './_metronic/layout/Components/iframe/iframe.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { EmailComponent } from './_metronic/layout/Components/email/email.component';
import { AboutUsComponent } from './_metronic/layout/Components/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PhotographerComponent } from './_metronic/layout/Components/photographer/photographer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProgressAreaComponent } from './_metronic/layout/Components/progress-area/progress-area.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {ImagesAreaComponent} from './_metronic/layout/Components/images-area/images-area.component';
import { CardsComponent } from './_metronic/layout/Components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './_metronic/layout/Components/forms/forms.component';
import { FaqsComponent } from './_metronic/layout/Components/faqs/faqs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ImagesAreaComponent,
    FaqsComponent,
    IframeComponent,
    FormsComponent,
    InforComponent,
    CardsComponent,
    PhotographerComponent,
    ServicesComponent,
    AboutUsComponent,
    EmailComponent,
    NavBarComponent,
    ProgressAreaComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    InlineSVGModule,
    NgbModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    // provide: APP_INITIALIZER,
  ],
  bootstrap: [AppComponent],
  exports:[NgxSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
