export const pipe = <T>(...fns: Array<Function>) => (x: T) =>
  fns.reduce((v, f) => f(v), x);

export const combine = <T, U>(...fns: Array<Function>) => (
  ...args: Array<T>
): Array<U> =>
  fns.reduce(
    (arr, f) => {
      arr.push(f(...args));
      return arr;
    },
    [] as Array<U>
  );
