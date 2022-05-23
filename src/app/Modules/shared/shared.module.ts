import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './Error/error404/error404.component';
import { Error405Component } from './Error/error405/error405.component';
import { NavbarComponent } from './Header-Navbar/navbar/navbar.component';
import { FooterComponent } from './Header-Navbar/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './Header-Navbar/sidebar/sidebar.component';



@NgModule({
  declarations: [
    Error404Component,
    Error405Component,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SidebarComponent
  ],

  imports: [
    CommonModule
  ],
  exports: [
    Error404Component,
    Error405Component,
    NavbarComponent,
    HomePageComponent,
    SidebarComponent,
    FooterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
