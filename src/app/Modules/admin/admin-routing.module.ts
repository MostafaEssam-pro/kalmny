import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppROuteCustem } from 'src/app/Models/Routing/Routing';
import { AdminHomeComponent } from './admin-home/admin-home.component';



const routes: Routes = [
  {
    path: AppROuteCustem.Admin.HomePage,
   component: AdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
