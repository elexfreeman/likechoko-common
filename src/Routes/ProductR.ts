import { ProductI } from '../Interfaces/ProductI';
import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import {
  GetRowByIdResponseI,
  TableI,
  sGetInfoByIdR,
  sGetTableInfo,
  sInsertRow,
  sUpdateRow,
  InsertRowResponseI,
} from '../Interfaces/TableI';

export const sRoute = 'product';

/**
 * Товар
 */
export namespace ProductR {
  export namespace list {
    export const route = `/api/${sRoute}/list`;
    export const action = `list`;
    export interface RequestI extends SearchParamI {}
    export interface ResponseI extends ListResponseI<ProductI> {}
  }

  export namespace listInfo {
    export const route = `/api/${sRoute}/list/info`;
    export const action = `listInfo`;
    export interface RequestI {}
    export interface ResponseI extends ListInfoResponseI {}
  }

  export namespace getById {
    export const route = `/api/${sRoute}/${sGetInfoByIdR}`;
    export const action = `getById`;
    export interface RequestI {
      id: number;
    }
    export interface ResponseI extends GetRowByIdResponseI<ProductI> {}
  }

  export namespace insert {
    export const route = `/api/${sRoute}/${sInsertRow}`;
    export const action = `insert`;
    export interface RequestI extends ProductI {}
    export interface ResponseI extends InsertRowResponseI {
      id: number;
    }
  }

  export namespace update {
    export const route = `/api/${sRoute}/${sUpdateRow}`;
    export const action = `update`;
    export interface RequestI extends ProductI {}
    export interface ResponseI {
      id: number;
    }
  }

  export namespace tagList {
    export const route = `/api/${sRoute}/tagList`;
    export const action = `tagList`;
    export interface RequestI {
      product_id: number;
    }
    export interface ResponseI {
      list: ProductTagI[];
    }
  }

  export namespace addTag {
    export const route = `/api/${sRoute}/addTag`;
    export const action = `addTag`;
    export interface RequestI {
      product_id: number;
      tag_id: number;
    }
    export interface ResponseI {
      id: number;
    }
  }

  export namespace delTag {
    export const route = `/api/${sRoute}/delTag`;
    export const action = `delTag`;
    export interface RequestI {
      product_id: number;
      tag_id: number;
    }
    export interface ResponseI {}
  }

  /**
   * Инфо об талице
   */
  export namespace info {
    export const route = `/api/${sRoute}/${sGetTableInfo}`;
    export const action = `info`;
    export interface RequestI {}
    export interface ResponseI extends TableI {}
  }
}
