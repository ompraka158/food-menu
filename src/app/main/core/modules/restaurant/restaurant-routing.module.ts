import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RestaurantRoutingModule {}
