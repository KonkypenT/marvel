/** Использовал дженерик, потому что это более общая модель в пагинацией и внутри results может лежать любой контракт,
 * т.е. в будущем можно будет переиспользовать модель с пагинацией */
export interface PaginationModel<T> {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: T[];
}
