import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {SaleService} from './sale.service';
import {IProductSale, ISale, Sale} from './sale.model';
import {IClient} from '@/layouts/client/client.model';
import {IProduct} from '@/layouts/product/product.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-sale-show-dialog',
  templateUrl: './sale-show-dialog.component.html',
})


export class SaleShowDialogComponent {
  sale: ISale;
  productSale: IProductSale;
  subTotal: number;
  total: number;

  constructor(protected saleService: SaleService, public activeModal: NgbActiveModal, private toastr: ToastrService) {
    this.total = 0;
  }

  public saleProduct(price: number, quantity: number) {
    return price * quantity;

    // tslint:disable-next-line:prefer-for-of
    /*
    for (let i = 0; i < this.sale.products.length; i++) {
      this.subTotal = this.sale.products[i].price * this.sale.quantity[i];
      this.total += this.subTotal;
      return this.subTotal;
    }
     */

  }

  public clear() {
    this.activeModal.dismiss('cancel');
  }

}
