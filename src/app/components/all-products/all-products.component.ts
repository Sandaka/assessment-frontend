import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/product-card';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList: ProductCard[] = [];
  productName: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProductsToTable();
  }

  loadProductsToTable(){
    this.productService.getProducts().subscribe(dataList => {
      this.productList = dataList;
    })
  }

  search() {
    if (this.productName == "") {
      this.ngOnInit();
    } else {
      this.productList = this.productList.filter(resonse => {
        return resonse.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
      });
    }
  }

}
