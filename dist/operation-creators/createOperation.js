"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates and returns operation.
 * @param {string} type The type of the operation (ex. 'comment').
 * @param {Object} config The configuration object for the operation.
 * @returns A single operation in the for of array.
 */
exports.createOperation = (type, _a) => {
    var parameters = __rest(_a, []);
    return [
        type,
        Object.assign({}, parameters)
    ];
};
