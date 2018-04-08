"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
exports.combine = (...fns) => (...args) => fns.reduce((arr, f) => {
    arr.push(f(...args));
    return arr;
}, []);
