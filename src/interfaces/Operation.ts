export interface Operation extends Array<string | object> {
  // type of operation
  0: string;

  // operation details
  1: object;
}

export type Operations = Array<Operation>;
