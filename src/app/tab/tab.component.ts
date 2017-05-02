import {
  Component,
  ViewEncapsulation,
  OnInit,
  ElementRef
} from '@angular/core';

import * as _ from 'lodash';

import { CONFIG } from '../core/config'

import { Tab } from '../core/interface/Tab';

// TODO: don't user in component
import { LocalStorageService } from '../core/service/localStorage.service';

import { TabService } from './tab.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  oTab: { 'tab': Tab[] } = { 'tab': [] };

  constructor(
    private localStorageService: LocalStorageService,
    private tabService: TabService) {}

  ngOnInit() {

    let bShowSavedTab = false;

    if (CONFIG.PREVENT_TAB) {
      bShowSavedTab = confirm(
        'Voulez-vous restaurez les onglets de la session précédemente ?'
      )
    }

    if (bShowSavedTab && this.localStorageService.getTab() !== null) {

      this.oTab.tab = this.oTab.tab.concat(this.localStorageService.getTab().tab)
    }
    else {

      this.oTab.tab.push(
        {
          name: "demo.js",
          fullPath: "./content/demo.js",
          active: true
        }
      )
    }

    // this.Tab.openEventOnLoad()
    // this.Tab.setEventOnNodeList('click', '.jsEventTabItem', 'openTab')
    // this.Tab.closeEventOnLoad()

    this.tabService.setData(this.oTab); // ???


    /*PubSub.subscribe('OPEN_TAB', (msg, data) => {

      // Arrow fonction have not this, then this is tabCtrl
      if (data !== undefined) this.Tab.openTab(data)
    })*/
  }

  /**
 * Open tab
 * ========
 * @param  {obj} oTab
 */
  // TODO : corriger, la function existe déjà dans la classe, je me répète
  public openTab(tabName, fullPath) {

    this.tabService.openTab(tabName, fullPath);
  }

  public closeTab(tabName) {
    this.tabService.closeTab(tabName);
  }

  isTabOpen(sName) {

    // return this.Tab._getIndexActiveTab == this.Tab._getIndexTabByName(sName)
  }
}
