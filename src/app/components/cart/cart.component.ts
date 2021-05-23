import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductCard } from 'src/app/models/product-card';
import { UpdateCartService } from 'src/app/services/update-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // cartItems = [
  //   // { id: 1, productId: 1, productName: 'aa', qty: 4, price: 100 },
  //   // { id: 2, productId: 2, productName: 'dd', qty: 1, price: 100 },
  //   // { id: 3, productId: 3, productName: 'ww', qty: 2, price: 100 },
  //   // { id: 4, productId: 4, productName: 'qq', qty: 3, price: 100 }
  // ];

  cartItems: ProductCard[] = [];

  cartTotal = 0;
  //addedProduct: ProductCard = new ProductCard();

  constructor(private updateCartService: UpdateCartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.updateCartService.getRequest().subscribe((product: any) => {
      console.log(product.productName);
      this.addItemToCart(product);


    })

  }

  addItemToCart(product: ProductCard) {

    // call and get data from svc using update cart service here

    let itemIsExists = false;

    if (product.qty === 0 || product.qty === null) {
      for (let i in this.cartItems) {
        if (this.cartItems[i].productId === product.productId) {
          this.cartItems.pop();
          itemIsExists = false;
          //this.updateCartMsg();
          break;
        }
      }

    } else {

      this.updateCartService.calculatePricesForQty(product).subscribe((updatedProduct: ProductCard) => {

        for (let i in this.cartItems) {
          if (this.cartItems[i].productId === product.productId) {
            this.cartItems.pop();
            itemIsExists = false;
            //this.updateCartMsg();
            break;
          }
        }

        if (!itemIsExists && product.qty > 0) {
          this.cartItems.push({
            productId: updatedProduct.productId,
            productName: updatedProduct.productName,
            unitPrice: updatedProduct.unitPrice,
            cartonPrice: updatedProduct.cartonPrice,
            discountMsg: updatedProduct.discountMsg,
            qty: updatedProduct.qty,
            optionName: updatedProduct.optionName,
            optionId: updatedProduct.optionId,
            unitsPerCarton: updatedProduct.unitsPerCarton,
            totalProductAmount: updatedProduct.totalProductAmount
          })

          this.updateCartMsg();
        }

        this.cartTotal = 0;
        this.cartItems.forEach((items: ProductCard) => {
          this.cartTotal += (items.totalProductAmount);
        })
      })
    }
  }

  // Toastr
  updateCartMsg() {
    this.toastr.success('Your cart has been updated', 'Successfully!',
      { timeOut: 1000 });
  }
}
