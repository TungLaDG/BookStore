import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  postId: number | undefined; // Khai báo postId có thể là undefined
  post: any;
  constructor(private route: ActivatedRoute,  private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.postId = +idParam; // Chuyển đổi thành số
        // Bây giờ bạn có thể an toàn sử dụng this.postId
        this.post = this.cartService.getProductById(this.postId);
      } else {
        // Xử lý trường hợp 'id' không có trong route
      }
    });
  }
}