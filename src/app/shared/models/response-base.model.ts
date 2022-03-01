import { PaginationModel } from './pagination.model';

export interface ResponseBaseModel<T> {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  etag: string;
  status: string;
  data: PaginationModel<T>;
}
