"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'productCategory';
/**
 * Категория товара
 */
var ProductCategoryR;
(function (ProductCategoryR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = ProductCategoryR.list || (ProductCategoryR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = ProductCategoryR.listInfo || (ProductCategoryR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = ProductCategoryR.getById || (ProductCategoryR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = ProductCategoryR.insert || (ProductCategoryR.insert = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = ProductCategoryR.update || (ProductCategoryR.update = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = ProductCategoryR.info || (ProductCategoryR.info = {}));
})(ProductCategoryR = exports.ProductCategoryR || (exports.ProductCategoryR = {}));
//# sourceMappingURL=ProductCategoryR.js.map