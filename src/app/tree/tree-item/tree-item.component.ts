import {
  Component,
  ViewEncapsulation,
  OnInit,
  ElementRef,
  Input,
  HostBinding
} from '@angular/core';

import * as _ from "lodash";

import { Menu, MenuItem } from '../../interface/Menu';

@Component({
  selector: 'app-tree-item',
  template: `
    <button
        type="button"
        (click)="open()"
        [ngClass]="{
            'btn-tree--folder': item.isFolder,
            'btn-tree--arrow': item.isFolder,
            'jsisfolder': item.isFolder
        }"
        class="
            jsEventMenuItem
            btn-reset
            btn-tree"
        data-name="item.name"
        data-full-path="item.fullPath">
        {{ item.name }}
    </button>
  `
})
export class TreeItemComponent implements OnInit {

  @Input()
  item: MenuItem;

  @HostBinding('class') componentClass = 'app-tree-item';
  @HostBinding('class.jsisfolder') isFolder: boolean = false;
  @HostBinding('class.jsIsOpen')   isOpen  : boolean = false;

  ngOnInit() {
    this.isFolder = this.item.isFolder;
  }

  public open() {
    if (this.isFolder) {
      this.isOpen = !this.isOpen;
    }
    console.log(this.item);
  }
}
