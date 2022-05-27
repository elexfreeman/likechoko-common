"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientR = exports.sRoute = void 0;
const TableI_1 = require("../Interfaces/TableI");
exports.sRoute = 'client';
/**
 * Клиент
 */
var ClientR;
(function (ClientR) {
    let list;
    (function (list) {
        list.route = `/api/${exports.sRoute}/list`;
        list.action = `list`;
    })(list = ClientR.list || (ClientR.list = {}));
    let listInfo;
    (function (listInfo) {
        listInfo.route = `/api/${exports.sRoute}/list/info`;
        listInfo.action = `listInfo`;
    })(listInfo = ClientR.listInfo || (ClientR.listInfo = {}));
    let getById;
    (function (getById) {
        getById.route = `/api/${exports.sRoute}/${TableI_1.sGetInfoByIdR}`;
        getById.action = `getById`;
    })(getById = ClientR.getById || (ClientR.getById = {}));
    let insert;
    (function (insert) {
        insert.route = `/api/${exports.sRoute}/${TableI_1.sInsertRow}`;
        insert.action = `insert`;
    })(insert = ClientR.insert || (ClientR.insert = {}));
    let update;
    (function (update) {
        update.route = `/api/${exports.sRoute}/${TableI_1.sUpdateRow}`;
        update.action = `update`;
    })(update = ClientR.update || (ClientR.update = {}));
    /**
     * Инфо об талице
     */
    let info;
    (function (info) {
        info.route = `/api/${exports.sRoute}/${TableI_1.sGetTableInfo}`;
        info.action = `info`;
    })(info = ClientR.info || (ClientR.info = {}));
})(ClientR = exports.ClientR || (exports.ClientR = {}));
//# sourceMappingURL=ClientR.js.map