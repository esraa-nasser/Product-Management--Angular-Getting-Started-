import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'
import {ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct | undefined;
  pageTitle:string = 'Product Details';
  errorMessage: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
   }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
  OnBack(){
    this.router.navigate(['/products']);
  }

}
