import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';


const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  }, {
    path: '**',
    component: NoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
