import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'src/app/main/shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatMenuModule,
    MenuRoutingModule,
    SharedModule,
  ],
})
export class MenuModule {}
