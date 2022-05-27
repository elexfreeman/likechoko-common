import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';

/**
 * Тэг товара
 */
export namespace ProductTagR {
  export namespace list {
    export const route = '/api/productTag/list';
    export const action = 'list';
    export interface RequestI extends SearchParamI {}
    export interface ResponseI {
      list: ProductTagI[];
    }
  }

  export namespace getById {
    export const route = '/api/productTag/getById';
    export const action = 'getById';
    export interface RequestI {
      id: number;
    }
    export interface ResponseI extends ProductTagI {}
  }

  export namespace insert {
    export const route = '/api/productTag/insert';
    export const action = 'insert';
    export interface RequestI extends ProductTagI {}
    export interface ResponseI {
      id: number;
    }
  }

  export namespace update {
    export const route = '/api/productTag/update';
    export const action = 'insert';
    export interface RequestI extends ProductTagI {}
    export interface ResponseI {
      id: number;
    }
  }
}
