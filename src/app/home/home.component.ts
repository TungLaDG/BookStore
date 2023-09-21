import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar, // Inject MatSnackBar
    public cart: CartService

  ) {}
  viewProductDetail(productId: number) {
    this.router.navigate(['product', productId]);
  }
  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  addToCart(post: any) {
    // Thêm sản phẩm vào giỏ hàng (hoặc thực hiện xử lý tương tự)
    this.cart.addCart(post);

    // Hiển thị thông báo
    this.snackBar.open('Sản phẩm đã được thêm vào giỏ hàng!', 'Đóng', {
      duration: 3000, // Thời gian hiển thị (milliseconds)
      horizontalPosition: 'end', // Vị trí ngang (có thể là 'start', 'center', hoặc 'end')
      verticalPosition: 'bottom', // Vị trí dọc (có thể là 'top' hoặc 'bottom')
    });
  }
}
