import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'servicos',          component: ServicosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
