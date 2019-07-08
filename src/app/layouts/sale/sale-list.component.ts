import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbModalRef, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SaleService} from './sale.service';
import {ISale} from './sale.model';
import {IClient} from '@/layouts/client/client.model';
import {SaleShowDialogComponent} from '@/layouts/sale/sale-show-dialog.component';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale.scss'],
})
export class SaleListComponent implements OnInit, OnDestroy {
  public sales: ISale[];
  public client: IClient;
  protected ngbModalRef: NgbModalRef;

  constructor(private saleService: SaleService, private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.loadAll();
  }

  public ngOnDestroy(): void {
    this.ngbModalRef = null;
  }

  public clientShowSales(sale: ISale): void {
    this.ngbModalRef = this.modalService.open(SaleShowDialogComponent, {size: 'lg', backdrop: 'static'});
    this.ngbModalRef.componentInstance.sale = sale;
    this.ngbModalRef.result.then(
      result => {
        this.loadAll();
        this.ngbModalRef = null;
      },
      reason => {
        this.loadAll();
        this.ngbModalRef = null;
      }
    );
  }

  private loadAll(): void {
    this.saleService.getAll().subscribe(res => {
      this.sales = res;
    });
  }
}
