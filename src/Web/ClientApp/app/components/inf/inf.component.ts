import { Component, Inject, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { globalConf, GlobalConfig } from '../../globals';

class Info implements OnChanges, OnInit {

    constructor() {
        console.log("zodiac=" + this.zodiac);
    }

    ngOnInit(): void {
        console.log("zodiac="+this.zodiac);
        //this.zodiacPath = `EEEE${this.zodiac}`;
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            //if (propName === "zodiac") {
            //    this.zodiacPath = `/i/zodiac/${this.zodiac}.gif`;
            //}
        }
    }

    zodiac: number;

    zodiacPath: string;

    zodiacPath1 = function (this: Info) {
        return this.zodiac + "0000000";
    }

    zodiacPath2(this: Info) {
        return `/i/zodiac/${this.zodiac}.gif`;
    }

    get zodiacPath3(): string {
        var res = `/i/zodiac/${this.zodiac}.gif`;
        return res;
    }
}

@Component({
    selector: 'inf',
    templateUrl: './inf.component.html',
//    template: `
//<h1>М - Информация о LOGIN</h1>

//<p>This is a simple example of an Angular component.</p>

//<p *ngIf="!current"><em>Loading...</em></p>

//<div *ngIf="current">
//    <img src ="{{current.zodiacPath3}}" WIDTH="99" HEIGHT="99" ALT="Знак зодиака" align="right">
//</div>
//`,
})

export class InfComponent {
    public current: Info;
    public conf: GlobalConfig;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string/*, @Inject('GLOBAL_CONFIG') globalConfig: GlobalConfig*/) {
        this.conf = globalConf;
        this.conf.hideNavPanel = true;

        http.get(baseUrl + 'api/Info/UserInfo').subscribe(result => {
            var res = result.json() as Info;
            this.current = res;
            this.current.zodiacPath = `/i/zodiac/${this.current.zodiac}.gif`;
        }, error => console.error(error));

        var t = 34;
    }
}
