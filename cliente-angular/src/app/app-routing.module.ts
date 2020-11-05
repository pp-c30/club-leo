import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminObraComponent } from './components/admin-obra/admin-obra.component';


const routes: Routes = [
  {
    path:'admin-obra',component:AdminObraComponent
  },
  {
    path:'**',redirectTo:'admin-obra', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
