import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbModalRef, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SaleService} from './sale.service';
import {ISale} from './sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale.scss'],
})
export class SaleListComponent implements OnInit, OnDestroy {
  public sales: ISale[];
  protected ngbModalRef: NgbModalRef;

  constructor(private saleService: SaleService, private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.loadAll();
  }

  public ngOnDestroy(): void {
    this.ngbModalRef = null;
  }
/*
  public deleteProduct(sale: ISale): void {
    this.ngbModalRef = this.modalService.open(ProductDeleteDialogComponent, {size: 'lg', backdrop: 'static'});
    this.ngbModalRef.componentInstance.product = product;
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
*/
  private loadAll(): void {
    this.saleService.getAll().subscribe(res => {
      this.sales = res;
    });
  }
}
