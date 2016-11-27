import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

class Tree {
    isFolder: boolean;
    name: string;
    children: any;
}

@Injectable()
export class TreeService {

    constructor(private http: Http) {}

    getTree(): Promise<Tree[]> {

        return this.http.get('./tree.json')
            .toPromise()
            .then(response => response.json() as Tree[]);

        /*return this.http
            .get('./tree.json')*/
            // .map((r: Response) => r.json());
            /*.subscribe(response => {

                return response.json()
            })*/
    }

}
