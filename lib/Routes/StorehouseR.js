"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorehouseR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'storehouse';
/**
 * Товар
 */
var StorehouseR;
(function (StorehouseR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = StorehouseR.list || (StorehouseR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = StorehouseR.listInfo || (StorehouseR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = StorehouseR.getById || (StorehouseR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = StorehouseR.insert || (StorehouseR.insert = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = StorehouseR.update || (StorehouseR.update = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = StorehouseR.info || (StorehouseR.info = {}));
})(StorehouseR = exports.StorehouseR || (exports.StorehouseR = {}));
//# sourceMappingURL=StorehouseR.js.map