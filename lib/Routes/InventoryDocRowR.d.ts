import { InventoryDocRowI } from '../Interfaces/InventoryDocRowI';
import { ListDocRowResponseI, ListInfoResponseI } from '../Interfaces/ListI';
import { TableI, InsertRowResponseI, RemoveDocRowReqestI } from '../Interfaces/TableI';
export declare const sRoute = "inventory_doc_row";
/**
 * Инвентаризация, табличная часть
 */
export declare namespace InventoryDocRowR {
    namespace listDocRow {
        const route: string;
        const action = "list_doc_row";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends ListDocRowResponseI<InventoryDocRowI> {
        }
    }
    namespace listInfo {
        const route: string;
        const action = "listInfo";
        interface RequestI {
        }
        interface ResponseI extends ListInfoResponseI {
        }
    }
    namespace insert {
        const route: string;
        const action = "insert";
        interface RequestI extends InventoryDocRowI {
        }
        interface ResponseI extends InsertRowResponseI {
        }
    }
    namespace removeDocRow {
        const route: string;
        const action = "remove_doc_row";
        interface RequestI extends RemoveDocRowReqestI {
        }
        interface ResponseI {
        }
    }
    /**
     * Инфо об талице
     */
    namespace info {
        const route: string;
        const action = "info";
        interface RequestI {
        }
        interface ResponseI extends TableI {
        }
    }
}
