import { ProductVarI } from '../Interfaces/ProductVarI';
import { SearchParamI } from '../Service/SearchS';
export declare namespace ProductVarR {
    namespace list {
        const route = "/api/productVar/list";
        const action = "list";
        interface RequestI extends SearchParamI {
            product_category_id: number;
        }
        interface ResponseI {
            list: ProductVarI[];
        }
    }
    namespace getById {
        const route = "/api/productVar/getById";
        const action = "getById";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends ProductVarI {
        }
    }
    namespace insert {
        const route = "/api/productVar/insert";
        const action = "insert";
        interface RequestI extends ProductVarI {
        }
        interface ResponseI {
            id: number;
        }
    }
    namespace update {
        const route = "/api/productVar/update";
        const action = "insert";
        interface RequestI extends ProductVarI {
        }
        interface ResponseI {
            id: number;
        }
    }
}
