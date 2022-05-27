import { ProductCategoryVarI } from '../Interfaces/ProductCategoryVarI';
import { SearchParamI } from '../Service/SearchS';
/**
 * Категория товара
 */
export declare namespace ProductCategoryVarR {
    namespace list {
        const route = "/api/productCategoryVar/list";
        const action = "list";
        interface RequestI extends SearchParamI {
            product_category_id: number;
        }
        interface ResponseI {
            list: ProductCategoryVarI[];
        }
    }
    namespace getById {
        const route = "/api/productCategoryVar/getById";
        const action = "getById";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends ProductCategoryVarI {
        }
    }
    namespace insert {
        const route = "/api/productCategoryVar/insert";
        const action = "insert";
        interface RequestI extends ProductCategoryVarI {
        }
        interface ResponseI {
            id: number;
        }
    }
    namespace update {
        const route = "/api/productCategoryVar/update";
        const action = "insert";
        interface RequestI extends ProductCategoryVarI {
        }
        interface ResponseI {
            id: number;
        }
    }
}
