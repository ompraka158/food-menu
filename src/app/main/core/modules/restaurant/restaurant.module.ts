import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from 'src/app/main/shared/shared.module';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [CommonModule, RestaurantRoutingModule, SharedModule],
})
export class RestaurantModule {}
