import { StorehouseI } from '../Interfaces/StorehouseI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = "storehouse";
/**
 * Товар
 */
export declare namespace StorehouseR {
    namespace list {
        const route: string;
        const action = "list";
        interface RequestI extends SearchParamI {
        }
        interface ResponseI extends ListResponseI<StorehouseI> {
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
        interface ResponseI extends GetRowByIdResponseI<StorehouseI> {
        }
    }
    namespace insert {
        const route: string;
        const action = "insert";
        interface RequestI extends StorehouseI {
        }
        interface ResponseI extends InsertRowResponseI {
            id: number;
        }
    }
    namespace update {
        const route: string;
        const action = "update";
        interface RequestI extends StorehouseI {
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
