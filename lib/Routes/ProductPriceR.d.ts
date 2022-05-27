import { ProductPriceI } from '../Interfaces/ProductPriceI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = "productPrice";
/**
 * Цены товара
 */
export declare namespace ProductPriceR {
    namespace list {
        const route: string;
        const action = "list";
        interface RequestI extends SearchParamI {
        }
        interface ResponseI extends ListResponseI<ProductPriceI> {
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
        interface ResponseI extends GetRowByIdResponseI<ProductPriceI> {
        }
    }
    namespace insert {
        const route: string;
        const action = "insert";
        interface RequestI extends ProductPriceI {
        }
        interface ResponseI extends InsertRowResponseI {
            id: number;
        }
    }
    namespace update {
        const route: string;
        const action = "update";
        interface RequestI extends ProductPriceI {
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
