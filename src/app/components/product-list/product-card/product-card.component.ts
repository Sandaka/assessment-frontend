import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemDetail } from 'src/app/models/item-detail';
import { ProductCard } from 'src/app/models/product-card';
import { UpdateCartService } from 'src/app/services/update-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productItem: ProductCard = new ProductCard();

  updateCartForm = this.formBuilder.group({
    buyingOption: ['', [Validators.required]],
    qty: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  })

  constructor(private updateCartService: UpdateCartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  updateCart(qtyDetail: ItemDetail) {
    this.productItem.optionName = qtyDetail.buyingOption;
    this.productItem.qty = qtyDetail.qty;

    this.updateCartService.setRequest(this.productItem);

  }

// set validation controls
  get getControl(){
    return this.updateCartForm.controls;
  }
}
