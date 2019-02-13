import { Injectable } from '@angular/core';

@Injectable()
export class LibtreeUtil {
  
  constructor() {
  }

  public static isBlank(val:string): boolean{
    if (val !== null && 
        val !== undefined && 
        val !== '' && 
        val !== 'null' && 
        val != 'undefined' && 
        val.replace(/^\s+|\s+$/gm,'') !== ''
      ) {
      return false;
    }
    return true;
  }

  public static isNull(val:Object): boolean{
    if (val !== null && val !== undefined) {
      return false;
    }
    return true;
  }
}