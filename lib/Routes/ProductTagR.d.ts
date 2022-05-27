import { ProductTagI } from '../Interfaces/ProductTagI';
import { SearchParamI } from '../Service/SearchS';
/**
 * Тэг товара
 */
export declare namespace ProductTagR {
    namespace list {
        const route = "/api/productTag/list";
        const action = "list";
        interface RequestI extends SearchParamI {
        }
        interface ResponseI {
            list: ProductTagI[];
        }
    }
    namespace getById {
        const route = "/api/productTag/getById";
        const action = "getById";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends ProductTagI {
        }
    }
    namespace insert {
        const route = "/api/productTag/insert";
        const action = "insert";
        interface RequestI extends ProductTagI {
        }
        interface ResponseI {
            id: number;
        }
    }
    namespace update {
        const route = "/api/productTag/update";
        const action = "insert";
        interface RequestI extends ProductTagI {
        }
        interface ResponseI {
            id: number;
        }
    }
}
