import { ProductCategoryVarI } from '../Interfaces/ProductCategoryVarI';
import { SearchParamI } from '../Service/SearchS';

/**
 * Категория товара
 */
export namespace ProductCategoryVarR {
  export namespace list {
    export const route = '/api/productCategoryVar/list';
    export const action = 'list';
    export interface RequestI extends SearchParamI {
      product_category_id: number;
    }
    export interface ResponseI {
      list: ProductCategoryVarI[];
    }
  }

  export namespace getById {
    export const route = '/api/productCategoryVar/getById';
    export const action = 'getById';
    export interface RequestI {
      id: number;
    }
    export interface ResponseI extends ProductCategoryVarI {}
  }

  export namespace insert {
    export const route = '/api/productCategoryVar/insert';
    export const action = 'insert';
    export interface RequestI extends ProductCategoryVarI {}
    export interface ResponseI {
      id: number;
    }
  }

  export namespace update {
    export const route = '/api/productCategoryVar/update';
    export const action = 'insert';
    export interface RequestI extends ProductCategoryVarI {}
    export interface ResponseI {
      id: number;
    }
  }
}
