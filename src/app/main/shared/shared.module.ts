import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemBtnComponent } from './components/add-item-btn/add-item-btn.component';

@NgModule({
  declarations: [AddItemBtnComponent],
  imports: [CommonModule],
  exports: [AddItemBtnComponent],
})
export class SharedModule {}
