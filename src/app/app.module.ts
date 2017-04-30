import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component'

import {TreeService} from "./tree.service";
import { KeyValuesPipe } from './key-values.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TreeComponent,
        KeyValuesPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        TreeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}