import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/main/shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends ApiService {
  getMenuList() {
    return this.get('swiggy?query=grandamas cafe pune');
  }
}
