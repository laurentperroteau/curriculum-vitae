import {
  Component,
  ViewEncapsulation,
  OnInit,
  ElementRef
} from '@angular/core';

import * as _ from 'lodash';

import { Menu, MenuItem } from '../core/interface/Menu';
import { TreeService } from './tree.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None // ??
})
export class TreeComponent implements OnInit {
  tree: Menu = {
    title: "Curriculum Vitae",
    tree: {
      children: []
    }
  }

  constructor(private treeService: TreeService) {
    this.treeService = treeService
  }

  ngOnInit() {

    this.treeService.getTree().then((data: any) => {

      // Get all tree (include root)
      // let oResult = JSON.parse( data )

      console.log(data);

      // Sort subfolder
      let oResult: MenuItem[] = _.forEach(data.children, function (oLevel1) {

        if (oLevel1.isFolder) {

          oLevel1.children = _.sortBy(oLevel1.children, function (o: any) {
            return o.name.toLowerCase()
          });

          _.forEach(oLevel1.children, function (oLevel2: any) {

            oLevel2.children = _.sortBy(oLevel2.children, function (o: any) {
              return o.name.toLowerCase()
            });
          });
        }
      });

      // And sort first level
      oResult = _.sortBy(oResult, function (o: any) {
        return [!o.isFolder, o.name.toLowerCase()].join("_")
      });

      this.tree.tree = { children: oResult };

      console.log(this.tree);
    })
  }

  public openFile(item: MenuItem) {
    console.log('OPEN_TAB', item);
  }
}
