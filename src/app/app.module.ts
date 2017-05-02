import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ??
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Core service
import { LocalStorageService } from './core/service/localStorage.service';

// Component
import { TreeComponent } from './tree/tree.component';
import { TreeItemComponent } from './tree/tree-item/tree-item.component';
import { TreeService } from './tree/tree.service';

import { TabComponent } from './tab/tab.component';

import { TabService } from './tab/tab.service';
import { KeyValuesPipe } from './key-values.pipe'; // ??

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
    declarations: [
      AppComponent,
      TreeComponent,
      TreeItemComponent,
      TabComponent,
      KeyValuesPipe
    ],
    providers: [
      LocalStorageService,
      TreeService,
      TabService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
