import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/main/shared/services/cart.service';
import { MenuService } from '../../../menu/services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  menuData: any;
  $subscription = new Subscription();
  selectedMenu: any;
  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getMenuList();
    this.getSelectedMenu();
  }

  getSelectedMenu() {
    this.selectedMenu = JSON.parse(
      localStorage.getItem('selectedRestaurant') || '{}'
    );
  }

  getMenuList() {
    if (!localStorage.getItem('menu'))
      this.$subscription.add(
        this.menuService.getMenuList().subscribe((response) => {
          localStorage.setItem('menu', JSON.stringify(response.data));
          this.menuData = response;
        })
      );
    else {
      this.menuData = JSON.parse(localStorage.getItem('menu') || '{}');
    }
  }

  selectRestaurant(menu: any) {
    this.cartService.$currentMenu.next(menu);
    localStorage.setItem('selectedRestaurant', JSON.stringify(menu));
    this.router.navigate(['menu']);
  }

  get itemSelected() {
    let count = 0;
    let price = 0;
    if (this.selectedMenu)
      this.selectedMenu.Menu.forEach((menu: any) => {
        menu.Dishes.forEach((dish: any) => {
          count += dish.selected;
          price += dish.selected * dish.price;
        });
      });
    return { count, price };
  }
}
