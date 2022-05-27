"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryVarR = void 0;
/**
 * Категория товара
 */
var ProductCategoryVarR;
(function (ProductCategoryVarR) {
    let list;
    (function (list) {
        list.route = '/api/productCategoryVar/list';
        list.action = 'list';
    })(list = ProductCategoryVarR.list || (ProductCategoryVarR.list = {}));
    let getById;
    (function (getById) {
        getById.route = '/api/productCategoryVar/getById';
        getById.action = 'getById';
    })(getById = ProductCategoryVarR.getById || (ProductCategoryVarR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = '/api/productCategoryVar/insert';
        insert.action = 'insert';
    })(insert = ProductCategoryVarR.insert || (ProductCategoryVarR.insert = {}));
    let update;
    (function (update) {
        update.route = '/api/productCategoryVar/update';
        update.action = 'insert';
    })(update = ProductCategoryVarR.update || (ProductCategoryVarR.update = {}));
})(ProductCategoryVarR = exports.ProductCategoryVarR || (exports.ProductCategoryVarR = {}));
//# sourceMappingURL=ProductCategoryVarR.js.map