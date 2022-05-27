"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'productPrice';
/**
 * Цены товара
 */
var ProductPriceR;
(function (ProductPriceR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = ProductPriceR.list || (ProductPriceR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = ProductPriceR.listInfo || (ProductPriceR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = ProductPriceR.getById || (ProductPriceR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = ProductPriceR.insert || (ProductPriceR.insert = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = ProductPriceR.update || (ProductPriceR.update = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = ProductPriceR.info || (ProductPriceR.info = {}));
})(ProductPriceR = exports.ProductPriceR || (exports.ProductPriceR = {}));
//# sourceMappingURL=ProductPriceR.js.map