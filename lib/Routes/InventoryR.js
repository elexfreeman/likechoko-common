"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'inventory';
/**
 * Инвентаризация
 */
var InventoryR;
(function (InventoryR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = InventoryR.list || (InventoryR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = InventoryR.listInfo || (InventoryR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = InventoryR.getById || (InventoryR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = InventoryR.insert || (InventoryR.insert = {}));
    /**
     * Вставить строку документа инфентаризации
     */
    let insertDocRow;
    (function (insertDocRow) {
        insertDocRow.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insertDocRow.action = `insertDocRow`;
    })(insertDocRow = InventoryR.insertDocRow || (InventoryR.insertDocRow = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = InventoryR.update || (InventoryR.update = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = InventoryR.info || (InventoryR.info = {}));
})(InventoryR = exports.InventoryR || (exports.InventoryR = {}));
//# sourceMappingURL=InventoryR.js.map