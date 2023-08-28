import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from 'src/app/main/shared/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuData: any;
  $subscription = new Subscription();
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.listenForMenuData();
  }

  listenForMenuData() {
    this.$subscription.add(
      this.cartService.$currentMenu.subscribe((res) => {
        if (!res)
          this.menuData = JSON.parse(
            localStorage.getItem('selectedRestaurant') || ''
          );
        else this.menuData = res;
        this.menuData.Menu.forEach((menu: any) => {
          menu.Dishes.forEach((dish: any) => {
            dish.selected = dish.selected || 0;
          });
        });
      })
    );
  }

  modifyCart(mode: string, item: any) {
    if (mode == 'add') item.selected += 1;
    else item.selected -= 1;
    localStorage.setItem('selectedRestaurant', JSON.stringify(this.menuData));
    this.cartService.$currentMenu.next(this.menuData);
  }

  get itemSelected() {
    let count = 0;
    let price = 0;
    if (this.menuData)
      this.menuData.Menu.forEach((menu: any) => {
        menu.Dishes.forEach((dish: any) => {
          count += dish.selected;
          price += dish.selected * dish.price;
        });
      });
    return { count, price };
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }
}
