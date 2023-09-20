import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.scss']
})
export class ThanhToanComponent implements OnInit {

  listCart: any[] = [];
  totalAmount: number = 0; // Biến để lưu tổng tiền

  constructor(private cartservice: CartService) {}

  ngOnInit() {
    // Lấy danh sách sản phẩm từ giỏ hàng sử dụng biến listCart đã được lưu từ CartComponent
    this.listCart = this.cartservice.cart;

    // Tính tổng tiền từ danh sách sản phẩm
    this.calculateTotalAmount();
  }

  hoten: string = "";
  email: string = "";
  diachi: string = "";
  dienthoai: string = "";

  calculateTotalAmount() {
    this.totalAmount = this.listCart.reduce((total, item) => total + item.Price, 0);
  }
}
