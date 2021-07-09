import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProdutListComponent implements OnInit {
  errorMsg: string = '';
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next:products=>{
        this.products = products;
        this.filteredProducts = this.products;
      },
      error:err=>this.errorMsg = err
    });
  }
  constructor(private productService: ProductService) {

    this._listFilter = 'cart';
    this._productService = productService;
  }
  private _productService: ProductService;
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(listFilter: string) {
    this._listFilter = listFilter;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)

  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}