export declare const pipe: <T>(...fns: Function[]) => (x: T) => any;
export declare const combine: <T, U>(...fns: Function[]) => (...args: T[]) => U[];
