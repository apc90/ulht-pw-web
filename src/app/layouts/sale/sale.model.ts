import {Moment} from 'moment';
import {IClient} from '@/layouts/client/client.model';
import {IProduct} from '@/layouts/product/product.model';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {IUser} from '@/shared/models';

export interface ISale {
  id?: number;
  client?: IClient;
  products?: IProduct[];
  user?: IUser;
  quantity?: number;
  total?: number;
  createDate?: _date;
}

export class Sale implements ISale {
  constructor(
    public id?: number,
    public client?: IClient,
    public products?: IProduct[],
    public quantity?: number,
    public total?: number,
    public createdDate?: _date,
  ) {}
}

export interface IProductSale {
  productId?: number;
  salesId?: number;
  quantity?: number;
}

export class ProductSale implements IProductSale {
  constructor(
    public productId?: number,
    public salesId?: number,
    public quantity?: number,
  ) {}
}
