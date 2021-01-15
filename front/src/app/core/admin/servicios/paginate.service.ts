import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PagintateService {

  getPager(totalPages:number,currentPage: number = 1) {
    // calculate total pages
    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    // calculate start and end item indexes
   
    // create an array of pages to ng-repeat in the pager control
    let pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    // return object with all pager properties required by the view
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      pages: pages
    };
  }



}
