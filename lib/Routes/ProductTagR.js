"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagR = void 0;
/**
 * Тэг товара
 */
var ProductTagR;
(function (ProductTagR) {
    let list;
    (function (list) {
        list.route = '/api/productTag/list';
        list.action = 'list';
    })(list = ProductTagR.list || (ProductTagR.list = {}));
    let getById;
    (function (getById) {
        getById.route = '/api/productTag/getById';
        getById.action = 'getById';
    })(getById = ProductTagR.getById || (ProductTagR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = '/api/productTag/insert';
        insert.action = 'insert';
    })(insert = ProductTagR.insert || (ProductTagR.insert = {}));
    let update;
    (function (update) {
        update.route = '/api/productTag/update';
        update.action = 'insert';
    })(update = ProductTagR.update || (ProductTagR.update = {}));
})(ProductTagR = exports.ProductTagR || (exports.ProductTagR = {}));
//# sourceMappingURL=ProductTagR.js.map