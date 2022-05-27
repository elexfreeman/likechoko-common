import { InventoryI, InventoryRowI } from '../Interfaces/InventoryI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = "inventory";
/**
 * Инвентаризация
 */
export declare namespace InventoryR {
    namespace list {
        const route: string;
        const action = "list";
        interface RequestI extends SearchParamI {
        }
        interface ResponseI extends ListResponseI<InventoryI> {
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
    namespace getById {
        const route: string;
        const action = "getById";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends GetRowByIdResponseI<InventoryI> {
        }
    }
    namespace insert {
        const route: string;
        const action = "insert";
        interface RequestI extends InventoryI {
        }
        interface ResponseI extends InsertRowResponseI {
        }
    }
    /**
     * Вставить строку документа инфентаризации
     */
    namespace insertDocRow {
        const route: string;
        const action = "insertDocRow";
        interface RequestI extends InventoryRowI {
        }
        interface ResponseI extends InsertRowResponseI {
        }
    }
    namespace update {
        const route: string;
        const action = "update";
        interface RequestI extends InventoryI {
        }
        interface ResponseI {
            id: number;
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
