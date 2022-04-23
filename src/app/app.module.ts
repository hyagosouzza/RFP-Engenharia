import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { EmpresaComponent } from './landing/empresa.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonModalComponent } from './components/modal/modal.component';
import { ModalContentComponent } from './components/modal/modal.component';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { HomeModule } from './home/home.module';
import { ServicosComponent } from './servicos/servicos.component';
import {NgxMaskModule} from 'ngx-mask'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    NavbarComponent,
    FooterComponent,
    ServicosComponent,
    ButtonModalComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  entryComponents: [ModalContentComponent],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
