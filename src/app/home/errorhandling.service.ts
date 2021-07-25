import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingService {
  private errx: any;
  private data: string;
  private flag: number;

  constructor() { }
  errorhandle(err: any) {
    this.errx = err;
    this.flag = 1;
  }
  nowork(){
    if ( this.flag === 1 ){
      return 1;
    }
    else {
      return 0;
    }
  }
}
