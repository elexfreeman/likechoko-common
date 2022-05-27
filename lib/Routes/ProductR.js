"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'product';
/**
 * Товар
 */
var ProductR;
(function (ProductR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = ProductR.list || (ProductR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = ProductR.listInfo || (ProductR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = ProductR.getById || (ProductR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = ProductR.insert || (ProductR.insert = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = ProductR.update || (ProductR.update = {}));
    let tagList;
    (function (tagList) {
        tagList.route = `/api/${exports.sRoute}/tagList`;
        tagList.action = `tagList`;
    })(tagList = ProductR.tagList || (ProductR.tagList = {}));
    let addTag;
    (function (addTag) {
        addTag.route = `/api/${exports.sRoute}/addTag`;
        addTag.action = `addTag`;
    })(addTag = ProductR.addTag || (ProductR.addTag = {}));
    let delTag;
    (function (delTag) {
        delTag.route = `/api/${exports.sRoute}/delTag`;
        delTag.action = `delTag`;
    })(delTag = ProductR.delTag || (ProductR.delTag = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = ProductR.info || (ProductR.info = {}));
})(ProductR = exports.ProductR || (exports.ProductR = {}));
//# sourceMappingURL=ProductR.js.map