import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone:true
})
export class ProductsComponent implements OnInit{

  products! : Array<any>
  constructor(private productService : ProductService) {
  }
 ngOnInit(): void {
   this.products = this.productService.getAllProducts();
 }

  handleDelete(product: any) {
    let v = confirm('Are you sure ?');
    if(v)
    {
      this.productService.deleteProduct(product);
      this.products=this.productService.getAllProducts();
    }

  }
}
