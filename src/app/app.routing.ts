import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './landing/empresa.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'empresa',          component: EmpresaComponent },
    { path: 'servicos',          component: ServicosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: false })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
