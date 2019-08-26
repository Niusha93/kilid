export enum StatusType {
  Unknown = 0,
  Success = 1,
  GeneralError = 2,
  ModelStateError = 3,
  ModificationNotAllowed = 4,
  TokenInvalid = 7
}

export class ResponseModel<T> {
  succeeded: boolean;
  message: string;
  data: T;
  modelState: any;
  status: StatusType;
}
