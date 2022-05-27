import { ClientI } from '../Interfaces/ClientI';
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

export const sRoute = 'client';

/**
 * Клиент
 */
export namespace ClientR {
  export namespace list {
    export const route = `/api/${sRoute}/list`;
    export const action = `list`;
    export interface RequestI extends SearchParamI {}
    export interface ResponseI extends ListResponseI<ClientI> {}
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
    export interface ResponseI extends GetRowByIdResponseI<ClientI> {}
  }

  export namespace insert {
    export const route = `/api/${sRoute}/${sInsertRow}`;
    export const action = `insert`;
    export interface RequestI extends ClientI {}
    export interface ResponseI extends InsertRowResponseI {
      id: number;
    }
  }

  export namespace update {
    export const route = `/api/${sRoute}/${sUpdateRow}`;
    export const action = `update`;
    export interface RequestI extends ClientI {}
    export interface ResponseI {
      id: number;
    }
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
