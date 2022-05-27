"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryDocRowR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'inventory_doc_row';
/**
 * Инвентаризация, табличная часть
 */
var InventoryDocRowR;
(function (InventoryDocRowR) {
    let listDocRow;
    (function (listDocRow) {
        listDocRow.route = `/api/${exports.sRoute}/${TableI_1.sListDocRow}`;
        listDocRow.action = `list_doc_row`;
    })(listDocRow = InventoryDocRowR.listDocRow || (InventoryDocRowR.listDocRow = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = InventoryDocRowR.listInfo || (InventoryDocRowR.listInfo = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = InventoryDocRowR.insert || (InventoryDocRowR.insert = {}));
    let removeDocRow;
    (function (removeDocRow) {
        removeDocRow.route = `/api/${exports.sRoute}/${TableI_1.sRemoveDocRow}`;
        removeDocRow.action = `remove_doc_row`;
    })(removeDocRow = InventoryDocRowR.removeDocRow || (InventoryDocRowR.removeDocRow = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = InventoryDocRowR.info || (InventoryDocRowR.info = {}));
})(InventoryDocRowR = exports.InventoryDocRowR || (exports.InventoryDocRowR = {}));
//# sourceMappingURL=InventoryDocRowR.js.map