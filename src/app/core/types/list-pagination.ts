import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

export class ListPagination {
  count?: number;
  limit = environment.list.limit;
  limitOptions = environment.list.limitOptions;
  private listOffset: number;
  pageIndex: number; 

  constructor() {
    this.offset = 0;
  }

  set offset(offset: number) {
    this.listOffset = offset;
    this.setCurrentPage();
  }

  get offset(): number {
    return this.listOffset;
  }

  setPagination(pageEvent: PageEvent): void {
    if (pageEvent.pageSize !== this.limit) {
      this.limit = pageEvent.pageSize;
      this.offset = 0; // if pageSize was changed jump to first page
    } else {
      this.offset = pageEvent.pageIndex * this.limit;
    }
  }

  private setCurrentPage(): void {
    this.pageIndex = this.offset / this.limit;
  }

}
