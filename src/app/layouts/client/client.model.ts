import {Moment} from 'moment';

export interface IClient {
  id?: number;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  nif?: number;
  contacts?: IContact[];
  addresses?: IAddress[];


}

export class Client implements IClient {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public dateOfBirth?: Date,
    public nif?: number,
    public contacts?: IContact[],
    public addresses?: IAddress[],

  ) {}
}

export const enum ContactType {
  TELEFONE = 'Telefone',
  TELEMOVEL = 'Telemóvel',
  EMAIL = 'E-mail',
}

export interface IContact {
  id?: number;
  contact?: string;
  contactType?: ContactType;
}

export class Contact implements IContact {
  constructor(public id?: number, public contact?: string, public contactType?: ContactType) {}
}

export interface IAddress {
  id?: number;
  address?: string;
  postalCode?: string;
}

export class Address implements IAddress {
  constructor(public id?: number, public address?: string, public postalCode?: string) {}
}

