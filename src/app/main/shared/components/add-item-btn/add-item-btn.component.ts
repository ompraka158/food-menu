import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-item-btn',
  templateUrl: './add-item-btn.component.html',
  styleUrls: ['./add-item-btn.component.scss'],
})
export class AddItemBtnComponent {
  @Input() counter: number = 0;
  @Output() itemAdd = new EventEmitter();
  @Output() itemRemove = new EventEmitter();

  addItem() {
    this.itemAdd.emit();
  }
  removeItem() {
    this.itemRemove.emit();
  }
}
