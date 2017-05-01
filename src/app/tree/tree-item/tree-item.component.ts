import {
  Component,
  ViewEncapsulation,
  OnInit,
  ElementRef,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';

import * as _ from "lodash";

import { Menu, MenuItem } from '../../shared/interface/Menu';

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

  @Input() item: MenuItem;

  @Output() onClickFile = new EventEmitter<MenuItem>();

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
    else {
      this.isOpen = true;
      this.onClickFile.emit(this.item);
    }
  }
}
