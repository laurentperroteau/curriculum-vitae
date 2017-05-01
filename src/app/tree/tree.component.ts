import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import * as _ from "lodash";

import { TreeService } from "../tree.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None // ??
})
export class TreeComponent implements OnInit {
    tree: any = {}

  constructor(private treeService: TreeService) {
      this.treeService = treeService
  }

  ngOnInit() {

    this.load().then( (data: any) => {

      // Get all tree (include root)
      // let oResult = JSON.parse( data )

      console.log(data);

      // Sort subfolder
      let oResult = _.forEach(data.children, function(oLevel1) {

          if( oLevel1.isFolder ) {

              oLevel1.children = _.sortBy(oLevel1.children, function(o: any) {
                  return o.name.toLowerCase()
              });

              _.forEach(oLevel1.children, function(oLevel2: any) {

                  oLevel2.children = _.sortBy(oLevel2.children, function(o: any) {
                      return o.name.toLowerCase()
                  });
              });
          }
      });

      // And sort first level
      oResult = _.sortBy(oResult, function(o: any) {
          return [ !o.isFolder, o.name.toLowerCase() ].join("_")
      });

      console.log(oResult);


      this.tree = {
        "title": "Curriculum Vitae",
        "tree": {children: oResult}
      }

      console.log( this.tree );
    })
  }

  private load() {

    return this.treeService.getTree()
  }

}
