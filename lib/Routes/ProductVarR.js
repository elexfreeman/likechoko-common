"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVarR = void 0;
var ProductVarR;
(function (ProductVarR) {
    let list;
    (function (list) {
        list.route = '/api/productVar/list';
        list.action = 'list';
    })(list = ProductVarR.list || (ProductVarR.list = {}));
    let getById;
    (function (getById) {
        getById.route = '/api/productVar/getById';
        getById.action = 'getById';
    })(getById = ProductVarR.getById || (ProductVarR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = '/api/productVar/insert';
        insert.action = 'insert';
    })(insert = ProductVarR.insert || (ProductVarR.insert = {}));
    let update;
    (function (update) {
        update.route = '/api/productVar/update';
        update.action = 'insert';
    })(update = ProductVarR.update || (ProductVarR.update = {}));
})(ProductVarR = exports.ProductVarR || (exports.ProductVarR = {}));
//# sourceMappingURL=ProductVarR.js.map