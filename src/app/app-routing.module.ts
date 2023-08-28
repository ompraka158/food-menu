import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './main/core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main/core/modules/restaurant/restaurant.module').then(
            (m) => m.RestaurantModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./main/core/modules/menu/menu.module').then(
            (m) => m.MenuModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./main/core/modules/cart/cart.module').then(
            (m) => m.CartModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
