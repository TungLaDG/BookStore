import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss'],
})
export class NarBarComponent {
  searchTerm: string = '';
  

  constructor(private router: Router, private cartService: CartService) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
  onSearchChange() {
    // Gọi phương thức searchByName của cartService và gán kết quả vào searchResults
    this.cartService.searchResults = this.cartService.searchByName(this.searchTerm);
  }
 
}
