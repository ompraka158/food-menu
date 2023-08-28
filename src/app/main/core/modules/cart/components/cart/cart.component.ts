import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/main/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartData: any;
  $subscription = new Subscription();
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.$subscription.add(
      this.cartService.$currentMenu.subscribe((res) => {
        this.cartData = res;
      })
    );
  }

  modifyCart(mode: string, item: any) {
    if (mode == 'add') item.selected += 1;
    else item.selected -= 1;
    this.cartService.$currentMenu.next(this.cartData);
  }

  get itemSelected() {
    let count = 0;
    let price = 0;
    if (this.cartData)
      this.cartData.Menu.forEach((menu: any) => {
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
