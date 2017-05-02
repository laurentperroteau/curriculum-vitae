import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { LocalStorageService } from '../core/service/localStorage.service';

// import { Tree, TREE_DATA } from '../treeData';

@Injectable()
export class TabService {
  sFileName: string = '';
  sFileFullPath: string = '';
  oData: any;

  constructor(
    private localStorageService: LocalStorageService) {}

  setData(data) {
    this.oData = data;
  }

  /*closeEventOnLoad() {

    const nItemS = this.nComponent.querySelectorAll('.jsEventTabItemClose')

    Array.from(nItemS).forEach((nItem) => {

      this._bindUnbindCloseEvent(nItem, 'add')
    })
  }*/

  /**
   * Open tab (calling or triggring)
   * ===============================
   * @param  {obj} data => mouse event or dataset
   */
  public openTab(tabName, fullPath) {

    /*if (data.target !== undefined) {
      data = data.target.dataset
    }*/

    // if (this.sFileName == data.name) return false

    this.sFileName = tabName
    this.sFileFullPath = fullPath

    // const self = this

    // If tab exist yet, switch active tab
    if (this._getIndexTabByName(this.sFileName) !== -1) {

      this.oData.tab.forEach((item) => {

        if (!item.active && item.name == this.sFileName) {

          item.active = true
          this._showFile(this.sFileFullPath)

          // log(`ACTIVE tab ${item.name}`)
        }
        else if (item.active && item.name != this.sFileName) {

          item.active = false

          // log(`ACTIVE tab ${item.name}`)
        }

      })
    }
    // Tab doesn't exist : unactive all and add it
    else {
      this._unactiveAllTab()

      this._addTabWithName()

      this._showFile(this.sFileFullPath)

      // TODO: bof...
      /*const nElemTab = this.nComponent.querySelector(`.jsEventTabItem[data-name="${this.sFileName}"]`)
      const nElemBtnClose = this.nComponent.querySelector(`.jsEventTabItemClose[data-name="${this.sFileName}"]`)

      if (nElemTab !== null && nElemBtnClose !== null) {

        this._bindUnbindOpenEvent(nElemTab, 'add')
        this._bindUnbindCloseEvent(nElemBtnClose, 'add')
      }*/
    }
  }

  /**
   * On close tab
   * ============
   * @param  {obj} e => event on click
   */
  closeTab(tabName: string) {

    let iTabToClose = null
    let bTabWasActive = null

    const sFileName = tabName;

    // We will perhaps remove an item, thus saving a clone to work with
    const aClone = _.cloneDeep(this.oData.tab)

    aClone.forEach((item, i, object) => {

      if (item.name == sFileName) {

        bTabWasActive = item.active;
        iTabToClose = i;

        // log(`DELETE tab ${item.name}`)

        return // Stop forEach
      }
    })

    // If the tab was active, now activate the tab with its index
    if (aClone.length > 0 && bTabWasActive && iTabToClose !== null) {

      // If was the last open on right, close one before
      if (aClone.length == iTabToClose + 1) {

        const indexToActive = iTabToClose - 1

        if (aClone[indexToActive] !== undefined) {

          this._activeOtherTab(indexToActive)

          this._showFile(aClone[indexToActive].fullPath)
        }
      }
      // If not, show next
      else {

        if (aClone[iTabToClose + 1] !== undefined) {

          this._activeOtherTab(iTabToClose + 1)

          this._showFile(aClone[iTabToClose + 1].fullPath)
        }
      }
    }

    // Close tab to close (only after all others things)
    if (iTabToClose !== null) {

      if (this.oData.tab[iTabToClose] !== undefined) {

        this._deleteTabByIndex(iTabToClose)

        // this._bindUnbindOpenEvent(nElem.parentElement, 'remove')
        // this._bindUnbindCloseEvent(nElem, 'remove')
      }

      // If after delete, no more tab, empty editor
      if (this.oData.tab.length === 0) {

        // PubSub.publish('EMPTY_EDITOR', sFileName)
      }
    }
  }

  _activeOtherTab(i) {

    this._unactiveAllTab()

    this._activeTabByIndex(i)
  }

  /*_bindUnbindOpenEvent(nItem, sType) {

    if (sType == 'add') {

      nItem.addEventListener('click', (e) => this.openTab(e), false)
    }
    else {
      nItem.removeEventListener('click', (e) => this.openTab(e), false)
    }
  }

  _bindUnbindCloseEvent(nItem, sType) {

    if (sType == 'add') {

      nItem.addEventListener('click', (e) => this._closeTab(e), false)
    }
    else {
      nItem.removeEventListener('click', (e) => this._closeTab(e), false)
    }
  }*/

  _updateStore() {

    this.localStorageService.setTab(this.oData)
    // log('Save tab in localStorage')
  }


  // Tabs event tested
  // -----------------

  _showFile(sFileFullPath) {

    // PubSub.publish('DISPLAY_FILE', sFileFullPath)

    // log('PUBLISH display file event of ' + sFileFullPath)
  }


  // Array tabs method (tested)
  // --------------------------

  _getIndexTabByName(sFileName) {

    return _.findIndex(this.oData.tab, (o :any) => { return o.name == sFileName });
  }

  _getIndexActiveTab() {

    return _.findIndex(this.oData.tab, (o :any) => { return o.active == true });
  }

  _deleteTabByIndex(i) {

    this.oData.tab.splice(i, 1)
    this._updateStore()
  }

  _addTabWithName() {

    const oNewTab = {
      name: this.sFileName,
      fullPath: this.sFileFullPath,
      active: true
    }

    this.oData.tab.push(oNewTab)
    this._updateStore()
  }

  _unactiveAllTab() {

    // TODO: voir utilise loadash
    this.oData.tab.map((x) => {
      x.active = false
      return x
    })
  }

  _activeTabByIndex(i) {

    this.oData.tab[i].active = true
    this._updateStore()
  }
}
