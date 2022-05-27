import { ProductVarI } from '../Interfaces/ProductVarI';
import { SearchParamI } from '../Service/SearchS';

export namespace ProductVarR {
  export namespace list {
    export const route = '/api/productVar/list';
    export const action = 'list';
    export interface RequestI extends SearchParamI {
      product_category_id: number;
    }
    export interface ResponseI {
      list: ProductVarI[];
    }
  }
  export namespace getById {
    export const route = '/api/productVar/getById';
    export const action = 'getById';
    export interface RequestI {
      id: number;
    }

    export interface ResponseI extends ProductVarI {}
  }

  export namespace insert {
    export const route = '/api/productVar/insert';
    export const action = 'insert';
    export interface RequestI extends ProductVarI {}
    export interface ResponseI {
      id: number;
    }
  }

  export namespace update {
    export const route = '/api/productVar/update';
    export const action = 'insert';
    export interface RequestI extends ProductVarI {}
    export interface ResponseI {
      id: number;
    }
  }
}
