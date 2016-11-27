import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {TreeService} from "../tree.service";

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    // template: '{{tree.title}} {{tree.tree?.children}}<pre>{{ tree.tree?.children | json }}</pre>',
    styleUrls: ['./tree.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {
    tree: any = {}

    constructor(private treeService: TreeService) {
        this.treeService = treeService
    }

    ngOnInit() {

        this.load().then( tree => {

            this.tree = {
                "title": "Curriculum Vitae",
                "tree": tree
            }

            console.log( this.tree )
        })
    }

    private load() {

        return this.treeService.getTree()
    }

}
