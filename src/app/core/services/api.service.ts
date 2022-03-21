import { AnyObject, ListParams, ListResponse } from '../types';

import { Endpoints } from 'src/app/core/misc/endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService<T = any> {
  protected readonly baseUrl = Endpoints.baseUrl;
  protected url: string;

  constructor(protected http: HttpClient) { }

  protected getUrl(url?: string): string {
    return this.baseUrl + ( url || this.url);
  }

  protected getParams(params: ListParams): { params?: AnyObject } {
    return params ? { params: params.getParams() } : {};
  }

  protected buildUrlWithName(name: string): string {
    return `${this.url}${name}/`;
  }

  getList<R = T>(params = new ListParams()): Observable<ListResponse<R>> {
    return this.http.get<ListResponse<R>>(this.getUrl(), this.getParams(params));
  }

  getListAll<R = T>(params = new ListParams(), url?: string): Observable<ListResponse<R>> {
    params.pagination.limit = 2000;
    return this.http.get<ListResponse<R>>(this.getUrl(), this.getParams(params));
  }

  get<R = T>(name: string): Observable<R> {
    const url = this.buildUrlWithName(name);
    return this.http.get<R>(this.getUrl(url));
  }

}
