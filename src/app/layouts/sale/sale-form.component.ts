import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {isNullOrUndefined} from 'util';
import {SaleService} from './sale.service';
import {ISale} from './sale.model';
import {IClient} from '@/layouts/client/client.model';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale.scss'],
})
export class SaleFormComponent implements OnInit, OnDestroy {
  public sale: ISale;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(protected activatedRoute: ActivatedRoute, private saleService: SaleService, private toastr: ToastrService) {}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({sale}) => {
      this.sale = sale;
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public saveProduct(): void {
    if (this.sale.id === undefined) {
      this.saleService.create(this.sale).subscribe(
        res => {
          this.sale = res;
          this.saveSucess();
        },
        error => {
          this.throwError();
        }
      );
    } else {
      this.saleService.update(this.sale).subscribe(
        res => {
          this.sale = res;
          this.saveSucess();
        },
        error => {
          this.throwError();
        }
      );
    }
  }

  public addClientToSale(client: IClient): void {
    this.sale.client = client;
  }

  /*
  public deleteClientContact(contact: IContact): void {
    const index = this.client.contacts.indexOf(contact);
    this.client.contacts.splice(index, 1);
  }
*/
  private saveSucess(): void {
    this.toastr.success('Information saved successfully', 'Sucess');
  }

  private throwError(): void {
    this.toastr.error('An error occurred on the system. Please contact the system administrator ', 'Error');
  }
}
