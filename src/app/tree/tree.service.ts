import { Injectable} from '@angular/core';

import { Tree, TREE_DATA } from '../treeData';

@Injectable()
export class TreeService {

  getTree(): Promise<Tree[]> {

    return new Promise((resolve, reject) => {
      resolve(TREE_DATA);
    });
  }
}
