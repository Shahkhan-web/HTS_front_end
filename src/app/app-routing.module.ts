import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FarmerComponent } from './components/farmer/farmer.component';
import { GetQrComponent } from './components/get-qr/get-qr.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  }, {
    path: "get_qr",
    component: GetQrComponent
  },{
    path:"ticket/:id",
    component:FarmerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
