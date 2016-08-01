import { Component } from '@angular/core';
import { TreeComponent } from './../tree/tree';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.html',
    directives: [
        TreeComponent,
        // TabComponent,
        // EditorComponent,
    ],
    styleUrls: ['app.css']
})
export class AppComponent {
    fileName: "/home/laurentperroteau/www/cv/web/"
    
    /*
    const App = new AppClass('app')

    App.setData( oApp )

    App.initTemplate()
     */
}
