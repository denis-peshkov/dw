import { Component, Inject } from '@angular/core';
import { globalConf, GlobalConfig } from '../../globals';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public globalConfig: GlobalConfig;

    /*constructor( @Inject('GLOBAL_CONFIG') globalConfig: GlobalConfig) {
        this.globalConfig = globalConfig;
    }*/

    constructor() {
        this.globalConfig = globalConf;
    }
}
