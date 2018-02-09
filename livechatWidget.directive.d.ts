import { OnInit } from '@angular/core';
export declare class LivechatWidgetDirective implements OnInit {
    licenseId: number;
    group: number;
    gaVersion: string;
    ngOnInit(): void;
    private readonly _group;
    private readonly _gaVersion;
    private _injectScript();
}
