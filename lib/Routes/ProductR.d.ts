import { ProductI } from '../Interfaces/ProductI';
import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';
import { ListInfoResponseI, ListResponseI } from '../Interfaces/ListI';
import { GetRowByIdResponseI, TableI, InsertRowResponseI } from '../Interfaces/TableI';
export declare const sRoute = "product";
/**
 * Товар
 */
export declare namespace ProductR {
    namespace list {
        const route: string;
        const action = "list";
        interface RequestI extends SearchParamI {
        }
        interface ResponseI extends ListResponseI<ProductI> {
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
        interface ResponseI extends GetRowByIdResponseI<ProductI> {
        }
    }
    namespace insert {
        const route: string;
        const action = "insert";
        interface RequestI extends ProductI {
        }
        interface ResponseI extends InsertRowResponseI {
            id: number;
        }
    }
    namespace update {
        const route: string;
        const action = "update";
        interface RequestI extends ProductI {
        }
        interface ResponseI {
            id: number;
        }
    }
    namespace tagList {
        const route: string;
        const action = "tagList";
        interface RequestI {
            product_id: number;
        }
        interface ResponseI {
            list: ProductTagI[];
        }
    }
    namespace addTag {
        const route: string;
        const action = "addTag";
        interface RequestI {
            product_id: number;
            tag_id: number;
        }
        interface ResponseI {
            id: number;
        }
    }
    namespace delTag {
        const route: string;
        const action = "delTag";
        interface RequestI {
            product_id: number;
            tag_id: number;
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
