/** Установить статус для прелоадера */
export class SetStatusLoader {
  public static readonly type = '[Loader] Set Status Loader';
  constructor(public status: boolean) {}
}
