import { InventoryDocRowI } from '../Interfaces/InventoryDocRowI';
import { ListDocRowResponseI, ListInfoResponseI } from '../Interfaces/ListI';
import {
  TableI,
  sGetTableInfo,
  sInsertRow,
  InsertRowResponseI,
  sListDocRow,
  sRemoveDocRow,
  RemoveDocRowReqestI,
} from '../Interfaces/TableI';

export const sRoute = 'inventory_doc_row';

/**
 * Инвентаризация, табличная часть
 */
export namespace InventoryDocRowR {
  export namespace listDocRow {
    export const route = `/api/${sRoute}/${sListDocRow}`;
    export const action = `list_doc_row`;
    export interface RequestI {
      id: number;
    }
    export interface ResponseI extends ListDocRowResponseI<InventoryDocRowI> {}
  }

  export namespace listInfo {
    export const route = `/api/${sRoute}/list/info`;
    export const action = `listInfo`;
    export interface RequestI {}
    export interface ResponseI extends ListInfoResponseI {}
  }

  export namespace insert {
    export const route = `/api/${sRoute}/${sInsertRow}`;
    export const action = `insert`;
    export interface RequestI extends InventoryDocRowI {}
    export interface ResponseI extends InsertRowResponseI {}
  }

  export namespace removeDocRow {
    export const route = `/api/${sRoute}/${sRemoveDocRow}`;
    export const action = `remove_doc_row`;
    export interface RequestI extends RemoveDocRowReqestI {}
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
