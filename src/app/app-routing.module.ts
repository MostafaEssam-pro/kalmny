import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppROuteCustem } from './Models/Routing/Routing';
import { HomePageComponent } from './Modules/shared/home-page/home-page.component';

const routes: Routes = [
  {
    path: AppROuteCustem.Custemer.HomePage,
   component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
