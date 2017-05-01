import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { Tree, TREE_DATA } from '../treeData';

@Injectable()
export class TreeService {

  getTree(): Promise<Tree[]> {

    return new Promise((resolve, reject) => {
      resolve(TREE_DATA);
    });
  }
}
