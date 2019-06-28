import {Moment} from 'moment';
import {IClient} from '@/layouts/client/client.model';
import {IProduct} from '@/layouts/product/product.model';

export interface ISale {
  id?: number;
  client?: IClient;
  product?: IProduct;
  quantity?: number;
  total?: number;
}

export class Sale implements ISale {
  constructor(
    public id?: number,
    public client?: IClient,
    public product?: IProduct,
    public quantity?: number,
    public total?: number,
  ) {}
}
