import { AnyObject } from './any-object';
import { ListPagination } from './list-pagination';

export class ListParams {
  filters = {};
  pagination = new ListPagination();

  constructor() {
    
  }

  getParams(): AnyObject {
    return Object.assign(this.filters, this.getPagination() || {});
  }

  private getPagination(): { limit: number; offset: number } {
    return this.pagination ? { limit: this.pagination.limit, offset: this.pagination.offset } : undefined;
  }

}
