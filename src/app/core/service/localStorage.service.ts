import { Injectable } from '@angular/core';

import { Tab } from '../interface/Tab';

@Injectable()
export class LocalStorageService {

  constructor() {
    console.info('local service constructor');
  }

  // TODO type
  setTab(tab: any) {

    if (typeof (Storage) !== undefined) {

      localStorage.setItem('tab', JSON.stringify(tab))
    }
  }
  getTab(): any {

    if (typeof (Storage) !== undefined) {
      return JSON.parse(localStorage.getItem('tab'))
    }
  }
}
